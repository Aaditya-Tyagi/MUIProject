import React from 'react'
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position='fixed' width={350}>
        <Typography variant='h6' fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt='Remy Sharp'
            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
          />
          <Avatar
            alt='Travis Howard'
            src='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600'
          />
          <Avatar
            alt='Cindy Baker'
            src='https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=600'
          />
          <Avatar
            alt='Agnes Walker'
            src='https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=600'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=600'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=600'
          />
          <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
          <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
          <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
          <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Images
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Pancakes'
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/235496/pexels-photo-235496.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt=''
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Summer BBQ'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Oui Oui'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar
