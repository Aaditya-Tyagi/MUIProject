import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  MenuItem,
  Fade,
  Popover
} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import { Notifications, Pets } from '@mui/icons-material'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})
const Searchbar = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}))
const IconContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex'
  }
}))
const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}))
const Avatarbox=styled(Popover)(({theme})=>({
  marginTop:'10px'
}))

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          Troft's
        </Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Searchbar>
          <InputBase placeholder='search...'></InputBase>
        </Searchbar>
        <IconContainer>
          <Badge badgeContent={4} color='error'>
            <MailIcon color='white' />
          </Badge>
          <Badge badgeContent={2} color='error'>
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src='https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
            onClick={e => setAnchorEl(e.currentTarget)}
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
          ></Avatar>
        </IconContainer>
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src='https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
            onClick={e => setAnchorEl(e.currentTarget)}
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
          />
          <Typography onClick={e => setAnchorEl(e.currentTarget)}>
            User
          </Typography>
        </UserBox>
      </StyledToolbar>
      <Avatarbox
        id='fade-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={e => setAnchorEl(null)}
        TransitionComponent={Fade}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Avatarbox>
    </AppBar>
  )
}

export default Navbar
