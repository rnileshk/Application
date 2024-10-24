import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function Navbar() {
  return (
    <>
      <AppBar sx={{ bgcolor: '#f5ab22', height: '60px', width: '100%'}}>
        <Toolbar>
          <Typography variant="" component="div" sx={{ flexGrow: 1 }} to="" ><a href='/'><img  src='logo.png' alt='logo' height={'45px'}/></a></Typography>
          <Typography variant="" to="" ><a href='/' style={{textDecoration:"none", color: "black", fontWeight: "700", fontSize: "20px", marginRight: "4rem"}}>Home</a></Typography>
          <Typography variant="" to="" ><a href='/apply' style={{textDecoration:"none", color: "black", fontWeight: "700", fontSize: "20px"}}>Apply Now</a></Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}
