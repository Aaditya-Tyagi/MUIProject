import '@fontsource/roboto/300.css'
import { Button } from '@mui/material'

function App () {
  return (
    <div className='App'>
      <Button variant='text'>Text</Button>
      <Button variant='contained' color="secondary" size='small'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
    </div>
  )
}

export default App
