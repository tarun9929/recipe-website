import React from 'react'
import { Container, Typography, Stack } from '@mui/material'
import { Box } from '@mui/material'
import master from '../../../images/master.png';
import {ColorPaletter} from '../index'

function LandingPage() {
    return (
        <>
            <ColorPaletter children={
                <Container>
                    <Stack 
                        direction={'row'} 
                        spacing={16} 
                        sx={{ 
                            alignItems: 'center' , 
                            flexWrap: 'wrap' , 
                            justifyContent: 'center' , 
                            textAlign: 'center'
                        }}
                    >
                        <Box>
                            <img src={master} alt="" width={500} />
                        </Box>
                        <Box>
                            <Typography 
                                variant='h3' 
                                component={'h1'} 
                                sx={{ textAlign: 'center', color: 'primary.main' }}
                            >
                                Are You Hungry ?
                            </Typography>
                            <Typography
                                variant='h4'
                                component={'h2'}
                                sx={{my: 2}}
                            >
                                Let's Make Something Special!"
                            </Typography>
                        </Box>
                    </Stack>
                </Container>
            } />
        </>
    )
}

export default LandingPage
