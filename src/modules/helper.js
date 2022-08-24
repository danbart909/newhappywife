import React from 'react'
import { Box } from '@mui/material'

export const Row = (props) => {
  return <Box {...props}
    display='flex'
    flexDirection='row'
  >{props.children}</Box>
}

export const Col = (props) => {
  return <Box {...props}
    display='flex'
    flexDirection='column'
  >{props.children}</Box>
}