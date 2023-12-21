import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';



export default function GroupSizesColors({onClickFromButton}) {
  const setLang = (data) =>{
    console.log(data)
    onClickFromButton(data)

  }
  
  const buttons = [
    <Button key="one" style={{ marginTop: '10px', width: '100%' }} onClick={()=>setLang('python')}>Python</Button>,
    <Button key="two" style={{ marginTop: '10px', width: '100%' }} onClick={()=>setLang('javascript')}>JavaScript</Button>,
    <Button key="four" style={{ marginTop: '10px', width: '100%' }} onClick={()=>setLang('java')}>Java</Button>,

    <Button key="three" style={{ marginTop: '10px', width: '100%' }} onClick={()=>setLang('c++')}>C++</Button>,
    <Button key="five" style={{ marginTop: '10px', width: '100%' }} onClick={()=>setLang('cs')}>C#</Button>,
    <Button key="six" style={{ marginTop: '10px', width: '100%' }} onClick={()=>setLang('c')}>C</Button>,
    <Button key="ten" style={{ marginTop: '10px', width: '100%' }} onClick={()=>setLang('go')}>Go</Button>,

    <Button key="seven" style={{ marginTop: '10px', width: '100%' }} onClick={()=>setLang('rust')}>Rust</Button>,
    <Button key="eight" style={{ marginTop: '10px', width: '100%' }} onClick={()=>setLang('swift')}>Swift</Button>,
    <Button key="nine" style={{ marginTop: '10px', width: '100%' }} onClick={()=>setLang('r')}>r</Button>,
  ];


  return ( 
    <Box>
      <ButtonGroup size="large" style={{display: 'flex', flexDirection: 'column',marginRight: '40px',marginTop: "70px", alignItems: 'flex-start' }} aria-label="small button group">
        
        {buttons}
      </ButtonGroup>
    
    </Box>
  );
}