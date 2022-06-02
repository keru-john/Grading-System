import React from 'react'
import { Grid } from '@mui/material'

const CGrid = ({children, sx, start, onClick}) => {
  return (
      <Grid
        sx={{
          ...sx,
        }}
        display='flex'
        justifyContent='space-between'
        alignItems={start ? 'start' : 'center'}
        onClick={onClick}
      >
        {children}
      </Grid>
  )
}

export default CGrid