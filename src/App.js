import Feed from './Feed'
import Navbar from './Navbar'
import Rightbar from './Rightbar'
import Sidebar from './Sidebar'
import { Box, Stack } from '@mui/material'

export default function App () {
  return (
    <>
      <Box>
        <Navbar />
        <Stack direction='row' spacing={2} justifyContent={'space-evenly'}>
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </>
  )
}
