import React from 'react'
import { Container, Typography, Stack } from '@mui/material'
import { Box } from '@mui/material'
import master from '../../../images/master.png';
import {ColorPaletter, Title} from '../index'
import useMediaQuery from '@mui/material/useMediaQuery';

function LandingPage() {
    const matches = useMediaQuery('(max-width:232px)');
    return (
        <>
            <ColorPaletter children={
                <Container>
                    <Stack 
                        direction={'row'} 
                        gap={10}
                        sx={{ 
                            alignItems: 'center' , 
                            flexWrap: 'wrap' , 
                            justifyContent: 'center' , 
                            textAlign: 'center'
                        }}
                    >
                        <Box 
                            sx={{width: 500}}
                        >
                            <img src={master} alt="" width={'100%'} />
                        </Box>
                        <Box>
                            <Title 
                                title="Are You Hungry" 
                                variant={matches ? 'h5' : 'h3' }
                                component={'h3'}
                                styles={{
                                    textAlign: 'center', 
                                    color: 'primary.main',
                                }}
                            />
                            < Title
                                title={"Let's Make Somethin Special!"}
                                variant={matches ? 'h6' : 'h4'}
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
