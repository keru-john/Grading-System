import { LoginOutlined } from '@mui/icons-material'
import { Button, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Auth } from '../App'
import CGrid from './common_components/CGrid'
import Form from './common_components/Form'
import { login_handleSubmit } from './functions/login.fn'

const Login = () => {
  
  const {users, setCurrentUser} = useContext(Auth)
  const nav = useNavigate()

  return (
    <Grid sx={{width: {xs: '100%', sm: '350px', md: '500px'}, display: 'grid', margin: '100px auto', bgcolor: 'rgba(0,0,0,.2)', p: 5, boxShadow: 5, borderRadius: 3}}>
      <Grid mb={2}>
        <CGrid start>
          <Typography variant="h4">Login</Typography>
          <LoginOutlined fontSize={'large'}/>
        </CGrid>
      </Grid>

      <Form
        submitFn={login_handleSubmit}
        users={users}
        setCurrentUser={setCurrentUser}
        type={'Sign In'}
        auth
      />

      <CGrid sx={{mt: 5}}>
        <Typography variant="body1" sx={{cursor: 'pointer'}} onClick={()=>nav('/reset-password')}>Forgot password?</Typography>
        <Button variant="contained" color="primary" onClick={()=>nav('/register')}>Sign Up instead?</Button>
      </CGrid>
    </Grid>
  )
}

export default Login