import React from 'react'
import Editor from '@monaco-editor/react';
import GroupSizesColors from './GroupSizesColors';


export default function Edit() {
  function handleEditorChange(value, event) {
    console.log('here is the current model value:', value);
  }
 

 
  return (
    <div style={{display: 'flex', margin: '50px'}}>
    <GroupSizesColors />
    <div style={{height: "70vh",width: "50%"}}>
      <h2>Input is here</h2>
      <Editor
        defaultLanguage="python"
        onChange={handleEditorChange}
        defaultValue="//Choose your favorite languages"
        // style={{padding: "30px"}}
      />
    </div>
    <div><h2>This is output</h2></div>
  </div>
  )
}