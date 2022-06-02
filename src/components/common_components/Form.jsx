import React from 'react'
import { Grid, Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import LinkToChangePassword from '../LinkToChangePassword'

const Form = ({auth, submitFn, setUsers, users, setCurrentUser, fp, cp, type, setChangePasswordEmail, changePasswordEmail}) => {

    const [err, setError] = React.useState('')
    const [open, setOpen] = React.useState(false)

    const nav = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        if(auth){
            if(setUsers) {
                submitFn(e, setError, users, setUsers, setCurrentUser, nav)
            } else{
                submitFn(e, setError, users, setCurrentUser, nav)
            }
        }
        if(fp){
            const submit = submitFn(e, setError, users, setChangePasswordEmail)
            if(submit) setOpen(true)
        }else{
            const submit = submitFn(e, setError, users, setUsers, changePasswordEmail)
            if(submit) nav('/')
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Grid>
                    {!cp && <TextField
                        label="Email"
                        variant="filled"
                        fullWidth
                        sx={{my: 2, background: "#fff"}}
                        error={err.includes('Email')}
                        helperText={err.includes('Email') ? err : ''}
                        name="email"
                        type="email"
                        onChange={()=>setError('')}
                    />}
                    </Grid>
                    <Grid>
                    {!fp && <TextField
                        label="Password"
                        variant="filled"
                        fullWidth
                        sx={{mt: 1, mb: 2, background: "#fff"}}
                        error={err.includes('Password')}
                        helperText={err.includes('Password') ? err : ''}
                        name="password"
                        type="password"
                        onChange={()=>setError('')}
                    />}
                    </Grid>
                <Grid>
                    <Button type='submit' variant="contained" color="primary" fullWidth sx={{p: 2, mt: 3}}>{type}</Button>
                </Grid>
            </form>

            <LinkToChangePassword
                open={open}
                setOpen={setOpen}
            />
        </>
  )
}

export default Form