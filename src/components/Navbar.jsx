import { Typography, Avatar } from '@mui/material'
import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import CGrid from './common_components/CGrid'
import { FormatListBulleted } from '@mui/icons-material'
import { Auth } from '../App'

const Navbar = () => {

    const {currentUser, setCurrentUser} = useContext(Auth)

    const nav = useNavigate()
    const onLogout = (e) => {
        e.preventDefault()
        setCurrentUser(null)
        nav('/login')
    }

    return (
        <CGrid
            sx={{
                p: 3,
                px: 4,
                borderBottom: '1px solid',
                borderColor: 'darkgray',
            }}
        >
            <CGrid>
                <FormatListBulleted/>
                <Typography variant="h6" color="inherit" noWrap>Grading System</Typography>
            </CGrid>
            <CGrid>
                {!currentUser ? <CGrid>
                    <Typography sx={{mr: 3, cursor: 'pointer', ':hover': {color: '#c0c0c0'}}} onClick={()=>nav('/login')}>Login</Typography>
                    <Typography onClick={()=>nav('/register')} sx={{cursor: 'pointer', ':hover': {color: '#c0c0c0'}}}>Register</Typography>
                </CGrid> : 
                <CGrid>
                    <Typography mr={1}>Logout: </Typography>
                    <CGrid sx={{cursor: 'pointer', border: '1px solid #c0c0c0', py: 1, px: 3, ':hover':{bgcolor: 'rgba(0,0,0,.3)'}}} onClick={onLogout}>
                        <Avatar sx={{mr: 1}}/>
                        <Typography>{currentUser}</Typography>
                    </CGrid>
                </CGrid>
                }
            </CGrid>
        </CGrid>
    )
}

export default Navbar