import { AppRegistration } from '@mui/icons-material'
import { Button, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Auth } from '../App'
import CGrid from './common_components/CGrid'
import Form from './common_components/Form'
import { register_handleSubmit } from './functions/register.fn'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const {users, setUsers, setCurrentUser} = useContext(Auth)
  const nav = useNavigate()

  return (
    <Grid sx={{width: {xs: '100%', sm: '350px', md: '500px'}, display: 'grid', margin: '100px auto', bgcolor: 'rgba(0,0,0,.2)', p: 5, boxShadow: 5, borderRadius: 3}}>
      <Grid mb={2}>
        <CGrid start>
          <Typography variant="h4">Register</Typography>
          <AppRegistration fontSize={'large'}/>
        </CGrid>
      </Grid>
      
      
      <Form
        submitFn={register_handleSubmit}
        users={users}
        setUsers={setUsers}
        setCurrentUser={setCurrentUser}
        type={'Sign Up'}
        auth
      />


      <CGrid sx={{mt: 5}}>
        <Grid display='flex' justifyContent='end' width='100%'>
          <Button variant="contained" color="primary" onClick={()=>nav('/login')}>Sign In instead?</Button>
        </Grid>
      </CGrid>
    </Grid>
  )
}

export default Register