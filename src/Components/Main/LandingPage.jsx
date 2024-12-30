import React from 'react'
import { Container, Typography, Stack } from '@mui/material'
import { Box } from '@mui/material'
import master from '../../../images/master.png';
import {ColorPaletter, Title} from '../index'

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
                            <Title 
                                title="Are You Hungry" 
                                variant={'h3'}
                                component={'h3'}
                                styles={{
                                    textAlign: 'center', 
                                    color: 'primary.main'
                                }}
                            />
                            < Title
                                title={"Let's Make Somethin Special!"}
                                variant='h4'
                                component={'h2'}
                                styles={{
                                    my:2
                                }}
                            />
                        </Box>
                    </Stack>
                </Container>
            } />
        </>
    )
}

export default LandingPage
