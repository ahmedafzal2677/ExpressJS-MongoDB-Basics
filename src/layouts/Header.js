import React from 'react'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { InputBase } from '@mui/material'

export const Header = () => {
  return (
    <> 
    <AppBar position="fixed" color="primary" sx={{bgcolor:'white'}}>
      <Toolbar>
        <Typography variant="h3" sx={{color:'blue'}}>
          Sketchers
        </Typography>

        <Typography variant="h5" sx={{color:'black', ml:3}}>
          Men
        </Typography>

        <Typography variant="h5" sx={{color:'black', ml:3}}>
          Women
        </Typography>

        <Typography variant="h5" sx={{color:'black', ml:3}}>
          Kids
        </Typography>

        <Typography variant="h5" sx={{color:'black', ml:3}}>
          Technologies
        </Typography>

        <Typography variant="h5" sx={{color:'black', ml:3}}>
          Clothing
        </Typography>

        <Typography variant="h5" sx={{color:'black', ml:3}}>
          Sale
        </Typography>

        <InputBase sx={{ml:3}} placeholder='What are you looking for?'/>
      </Toolbar>
    </AppBar>
    </>
  )
}
