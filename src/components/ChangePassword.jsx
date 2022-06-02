import { PasswordOutlined } from '@mui/icons-material'
import { Button, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Auth } from '../App'
import CGrid from './common_components/CGrid'
import Form from './common_components/Form'
import { cp_handleSubmit } from './functions/change-password.fn'

const ChangePassword = () => {

    const nav = useNavigate()
    const {users, setUsers, changePasswordEmail, setCurrentUser} = useContext(Auth)

    return (
        <Grid sx={{width: {xs: '100%', sm: '350px', md: '500px'}, display: 'grid', margin: '100px auto', bgcolor: 'rgba(0,0,0,.2)', p: 5, boxShadow: 5, borderRadius: 3}}>
        <Grid mb={2}>
            <CGrid start>
            <Typography variant="h4">New Password</Typography>
            <PasswordOutlined fontSize={'large'}/>
            </CGrid>
        </Grid>
        <Form
            submitFn={cp_handleSubmit}
            users={users}
            setUsers={setUsers}
            setCurrentUser={setCurrentUser}
            changePasswordEmail={changePasswordEmail}
            cp
            type='Change Password'
        />

            <CGrid sx={{mt: 5}}>
                <Grid display='flex' justifyContent='end' width='100%'>
                    <Button variant="contained" color="error" onClick={()=>nav('/login')}>Cancel</Button>
                </Grid>
        </CGrid>
        </Grid>
    )
}

export default ChangePassword