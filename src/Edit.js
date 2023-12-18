import React,{ useState } from 'react';
import Editor from '@monaco-editor/react';
import GroupSizesColors from './GroupSizesColors';
import Button from '@mui/material/Button';
import { files } from './language';


export default function Edit() {
   const [lang,setLangs] = useState('javascript')
   const onClickFromButtons = (data) =>{
    setLangs(data)
    
   }  
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
<h2>Input is here
       <Button variant="outlined" disabled style={{marginLeft:"20px"}}>
  {file.name}
</Button>
</h2>
      <Editor
      key={lang} 
      theme="vs-dark"
        defaultLanguage={file.language}
        onChange={handleEditorChange}
        defaultValue={file.value}
        
       
      />
    </div>
    </div>
    <div><h2>This is output</h2></div>
  </div>
  )
}