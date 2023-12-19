import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import GroupSizesColors from './GroupSizesColors';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { files } from './language';

export default function Edit() {
  const [lang, setLang] = useState('javascript');
  const [theme, setTheme] = useState('light');

  const handleLanguageChange = (data) => {
    setLang(data);
  };

  const handleThemeChange = (event, newTheme) => {
    setTheme(newTheme);
  };

  function handleEditorChange(value, event) {
    console.log('Current model value:', value);
  }

  const file = files[lang];

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
    background: theme === 'light' ? '#333333' : '#ffffff', // Customize background color
    color: theme === 'light' ? '#333333' : '#ffffff', // Customize text color
    border: '5px solid #cccccc', // Customize border (width, style, color)
    borderRadius: '10px', // Customize border-radius
    marginBottom: '15px'
  }}
>
  {theme === 'light' ? '🌙' : '🔆'}  
</ToggleButton>


</ToggleButtonGroup>


    
          <span style={{ marginLeft: '150px' }}>Input Is Here</span>
          <Button variant="outlined" disabled style={{ marginLeft: '20px' }}>
            {file.name}
          </Button>
        </div>
        <Editor
          key={lang}
          theme={theme === 'light' ? 'light' : 'vs-dark'}
          defaultLanguage={file.language}
          onChange={handleEditorChange}
          defaultValue={file.value}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ height: '75vh', width: '40vw' }}>
          <h2>This is output</h2>
          <Editor
          // key={lang}
          // theme={theme === 'light' ? 'light' : 'vs-dark'}
          // defaultLanguage={file.language}
          // onChange={handleEditorChange}
          // defaultValue={file.value}
        />
        </div>
        <div>
          <Button
            variant="contained"
            color="success"
            style={{ marginLeft: '20px' }}
            onClick={() => {
              alert('Clicked');
            }}
          >
            Run
          </Button>
        </div>
      </div>
    </div>
  );
}
