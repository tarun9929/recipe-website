import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack, Container, Typography, Button } from '../index'
import SendIcon from '@mui/icons-material/Send';

export default function Contect() {
  return (
    <Container
      maxWidth={'md'}
      sx={{
        mt: 6
      }}
    >
      <Box
      >
        <Typography
          variant='h3'
          component={'h1'}
        >
          CONTECT US
        </Typography>
      </Box>
      <Box
        component="form"
        sx={
          { '& .MuiTextField-root': { my: 2, width: '100%', display: 'flex' } }}
        noValidate
        autoComplete="off"
      >
        <Box>
          <TextField
            required
            id="outlined-required"
            label="Email"
            type='email'
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Discription"
            multiline
            rows={10}
          />
          <Button 
            variant="contained" 
            endIcon={<SendIcon />}
            sx={{
              width: '100%'
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
