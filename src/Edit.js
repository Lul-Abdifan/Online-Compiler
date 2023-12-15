import React from 'react'
import Editor from '@monaco-editor/react';


export default function Edit() {
  function handleEditorChange(value, event) {
    console.log('here is the current model value:', value);
  }

 
  return (
    <div style={{display: 'flex' }}>
    <div>Input is here</div>
    <div>
      {/* Use the style prop to apply styles to the Editor */}
      {/* <Editor
        defaultLanguage="python"
        onChange={handleEditorChange}
        defaultValue="// some comment"
        style={editorStyle}
      /> */}
    </div>
    <div><h1>Hello, this is output</h1></div>
  </div>
  )
}
