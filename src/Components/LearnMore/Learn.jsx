import React from 'react'
import { Introduction, Stack, Typography } from '../index'
import FlatwareIcon from '@mui/icons-material/Flatware';
import SearchIcon from '@mui/icons-material/Search';
import ShareIcon from '@mui/icons-material/Share';

function Learn() {
    const content = [
        {
            Image: () => <FlatwareIcon sx={{
                fontSize: '5rem',
                color: 'primary.main'
            }}/>,
            title: "Cook Your Favorite Food"
        }, 
        {
            Image: () => <SearchIcon sx={{
                fontSize: '5rem',
                color: 'primary.main'
            }}/>,
            title: "Search Recipes"
        },
        {
            Image: () => <ShareIcon sx={{
                fontSize: '5rem',
                color: 'primary.main'
            }}/>,
            title: "Share with your Friends"
        }
    ]
    return (
        <>  
            <Typography
                textAlign={'center'}
                component={'h1'}
                variant='h4'
                my={4}
                mb={10}
            >
                LEARN
            </Typography>
            <Stack
                direction={'row'}
                justifyContent={'space-around'}
                flexWrap={'wrap'}
                mb={15}
            >
                {
                    content.map((element , index) => {
                        return <Introduction content={element} key={index} />
                    })
                }
            </Stack>
        </>
    )
}

export default Learn
