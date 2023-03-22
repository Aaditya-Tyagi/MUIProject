import Feed from './Feed'
import Navbar from './Navbar'
import Rightbar from './Rightbar'
import Sidebar from './Sidebar'
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import Add from './Add';
import { useState } from 'react';

export default function App () {
  const [mode,setMode]=useState('light')
  const darkTheme=createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction='row' spacing={2} justifyContent={'space-evenly'}>
          <Sidebar mode={mode} setMode={setMode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}
