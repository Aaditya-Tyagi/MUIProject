import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack
} from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add'
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled
} from '@mui/material'
import React, { useState } from 'react'

function Add () {
  const [open, setOpen] = useState(false)
  const StyledModel = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  })
  const Userbox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px'
  })
  return (
    <>
      <Tooltip
        title='Delete'
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc( 50% - 25px )', md: 30 }
        }}
      >
        <Fab
          color='primary'
          aria-label='add'
          onClick={() => {
            setOpen(true)
          }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModel
        open={open}
        onClose={e => {
          setOpen(false)
        }}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box width={400} height={280} bgcolor={'background.default'} color={'text.primary'} p={3} borderRadius={5}>
          <Typography variant='h6' color='grey' textAlign={'center'}>
            Create Post
          </Typography>
          <Userbox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src='https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
            />
            <Typography>User</Typography>
          </Userbox>
          <TextField
            id='standard-multiline-static'
            multiline
            rows={4}
            placeholder='whats on your mind'
            variant='standard'
            sx={{ width: '100%' }}
          />
          <Stack direction='row' gap={1} mt={2} mb={3}>
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
          </Stack>
          <ButtonGroup
            fullWidth
            variant='contained'
            aria-label='outlined primary button group'
          >
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModel>
    </>
  )
}

export default Add
