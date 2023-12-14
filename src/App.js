import React from 'react';
// import ReactDOM from 'react-dom';

import Editor from '@monaco-editor/react';

function App() {
  return (
    <div className="App">
      <h1>Editor</h1>
      <Editor height="50vh" width="50%" defaultLanguage="javascript" defaultValue="// some comment" />;
    </div>
  );
}

export default App;


