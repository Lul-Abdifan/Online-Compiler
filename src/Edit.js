import React,{ useState } from 'react';
import Editor from '@monaco-editor/react';
import GroupSizesColors from './GroupSizesColors';
import Button from '@mui/material/Button';


import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { files } from './language';


export default function Edit() {
   const [lang,setLangs] = useState('javascript')
   const [alignment, setAlignment] = React.useState('web');
   const onClickFromButtons = (data) =>{
    setLangs(data)
    
   }  
  
   const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  }; 


  function handleEditorChange(value, event) {
    console.log('here is the current model value:', value);
  } 

 
 

  const file = files[lang]
  console.log(file)
  return (
    <div style={{display: 'flex', margin: '50px'}}>
    <GroupSizesColors onClickFromButton ={onClickFromButtons}/>
<div >
      
<div style={{height: "75vh",width: "45vw"}}>
<h2>
<ToggleButtonGroup
  color="primary"
  value={alignment}
  exclusive
  onChange={handleChange}
  aria-label="Platform"
>
  <ToggleButton value="light">Light</ToggleButton>
  <ToggleButton value="vs-dark">dark</ToggleButton>
  {/* <ToggleButton value="ios">iOS</ToggleButton> */}
</ToggleButtonGroup>
Input is here
       <Button variant="outlined" disabled style={{marginLeft:"20px"}}>
  {file.name}
</Button>
</h2>
      <Editor
      key={lang} 
      theme={alignment}
        defaultLanguage={file.language}
        onChange={handleEditorChange}
        defaultValue={file.value}
        
       
      />
    </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
       <div>
        <h2>This is output</h2>
      </div>
      <div>
        <Button variant="contained" color="success" style={{marginLeft: "20px"}}
          onClick={() => {
            alert('clicked');
          }}
        >
          Run
        </Button>
      </div>
    </div>
    
  </div>
  )
}

