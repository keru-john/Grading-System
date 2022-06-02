import { EmailOutlined } from '@mui/icons-material'
import { Button, Grid, Typography } from '@mui/material'
import React, {useContext} from 'react'
import CGrid from './common_components/CGrid'
import Form from './common_components/Form'
import { fn_handleSubmit } from './functions/forgot-password.fn'
import { useNavigate } from 'react-router-dom'
import {Auth} from '../App'

const ForgotPassword = () => {

    const nav = useNavigate()
    const {users, setCurrentUser, setChangePasswordEmail} = useContext(Auth)

    return (
        <Grid sx={{width: {xs: '100%', sm: '350px', md: '500px'}, display: 'grid', margin: '100px auto', bgcolor: 'rgba(0,0,0,.2)', p: 5, boxShadow: 5, borderRadius: 3}}>
        <Grid mb={2}>
            <CGrid start>
            <Typography variant="h4">Forgot Password</Typography>
            <EmailOutlined fontSize={'large'}/>
            </CGrid>
        </Grid>

        <Form
            submitFn={fn_handleSubmit}
            users={users}
            setChangePasswordEmail={setChangePasswordEmail}
            setCurrentUser={setCurrentUser}
            fp
            type={'Forgot'}
        />

            <CGrid sx={{mt: 5}}>
                <Grid display='flex' justifyContent='end' width='100%'>
                    <Button variant="contained" color="error" onClick={()=>nav('/login')}>Cancel</Button>
                </Grid>
        </CGrid>
        </Grid>
    )
}

export default ForgotPassword