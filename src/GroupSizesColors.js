import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
  <Button key="one" style={{ marginTop: '10px', width: '100%' }}>Python</Button>,
  <Button key="two" style={{ marginTop: '10px', width: '100%' }}>JavaScript</Button>,
  <Button key="three" style={{ marginTop: '10px', width: '100%' }}>C++</Button>,
  <Button key="four" style={{ marginTop: '10px', width: '100%' }}>Java</Button>,
  <Button key="five" style={{ marginTop: '10px', width: '100%' }}>Ruby</Button>,
  <Button key="six" style={{ marginTop: '10px', width: '100%' }}>PHP</Button>,
  <Button key="seven" style={{ marginTop: '10px', width: '100%' }}>Rust</Button>,
  <Button key="eight" style={{ marginTop: '10px', width: '100%' }}>Swift</Button>,
  <Button key="nine" style={{ marginTop: '10px', width: '100%' }}>Kotlin</Button>,
  <Button key="ten" style={{ marginTop: '10px', width: '100%' }}>Go</Button>,
];

export default function GroupSizesColors() {
  return (
    <Box
 
    >
     
     <ButtonGroup size="large" style={{outline:'none', display: 'flex', flexDirection: 'column',paddingTop:'120px', alignItems: 'flex-start' }} aria-label="small button group">
        
        {buttons}
      </ButtonGroup>
    
    </Box>
  );
}