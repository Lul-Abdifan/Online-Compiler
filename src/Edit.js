import React, { useRef, useState } from 'react';
import Editor from '@monaco-editor/react';
import GroupSizesColors from './GroupSizesColors';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { files } from './language';
import axios from 'axios';
import qs from 'qs';

export default function Edit() {
  const [lang, setLang] = useState('javascript');
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const handleLanguageChange = (data) => {
    setLang(data);
  };

  const handleThemeChange = (event, newTheme) => {
    setTheme(newTheme);
  };

  const editorRef = useRef(null);

  const handleRunClick = async () => {
    try {
      if (!editorRef.current) {
        console.error('Editor reference is null.');
        return;
      }

      const userCode = editorRef.current.getValue();
      console.log(userCode);

      // Show loading indicator
      setLoading(true);

      const requestData = qs.stringify({
        code: userCode,
        language: files[lang].language,
        input: '', // Example input, you may want to get this from a user input field
      });

      const apiConfig = {
        method: 'post',
        url: 'https://api.codex.jaagrav.in',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: requestData,
      };

      const response = await axios(apiConfig);

      // Handle the API response
      console.log('API Response:', response.data);

      // Set the output in state
      setOutput(response.data.output || '');

      // Check for errors in the response
      // if (response.data.error) {
      //   setOutput(response.data.error);
      // } else {
      //   setOutput('');
      // }

    } catch (error) {
      console.error('API Error:', error.response ? error.response.data : error.message);
      // Set the error state
      // setError(error.response ? error.response.data.error || 'Unknown error' : error.message || 'Unknown error');
      // setOutput(error.response.data.error)
    } finally {
      // Hide loading indicator
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', margin: '50px' }}>
      <GroupSizesColors onClickFromButton={handleLanguageChange} />
      <div style={{ height: '75vh', width: '45vw' }}>
        <div>
          <ToggleButtonGroup
            color="primary"
            value={theme}
            exclusive
            onChange={handleThemeChange}
            aria-label="Theme"
          >
            <ToggleButton
              value={theme === 'light' ? 'vs-dark' : 'light'}
              style={{
                background: theme === 'light' ? '#333333' : '#ffffff',
                color: theme === 'light' ? '#333333' : '#ffffff',
                border: '5px solid #cccccc',
                borderRadius: '10px',
                marginBottom: '15px'
              }}
            >
              {theme === 'light' ? '🌙' : '🔆'}
            </ToggleButton>
          </ToggleButtonGroup>

          <span style={{ marginLeft: '150px' }}>Input Is Here</span>
          <Button variant="outlined" disabled style={{ marginLeft: '20px' }}>
            {files[lang].name}
          </Button>
        </div>
        <Editor
          key={lang}
          theme={theme === 'light' ? 'light' : 'vs-dark'}
          defaultLanguage={files[lang].language}
          onMount={(editor, monaco) => {
            editorRef.current = editor;
          }}
          // other props...
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ height: '75vh', width: '40vw' }}>
          <h2>This is output</h2>
         
          <Editor
          key={output}
            defaultValue={output}

          />
       
        </div>
        <div>
          <Button
            variant="contained"
            color="success"
            style={{ marginLeft: '20px' }}
            onClick={handleRunClick}
            disabled={loading} // Disable the button when loading
          >
            {loading ? 'Running...' : 'Run'}
          </Button>
        </div>
      </div>
    </div>
  );
}
