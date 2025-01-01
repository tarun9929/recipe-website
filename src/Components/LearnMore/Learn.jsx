import React from 'react'
import { Introduction, Stack, Typography } from '../index'
import aboutImage1 from '../../../images/aboutImage1.jpg'
import aboutImage2 from '../../../images/aboutImage2.jpg'
import aboutImage3 from '../../../images/aboutImage3.webp'

function Learn() {
    const content = [
        {
            image: aboutImage1,
            title: "Cook Your Favorite Food"
        }, 
        {
            image: aboutImage1,
            title: "Search Recipes"
        },
        {
            image: aboutImage3,
            title: "Help"
        }
    ]
    return (
        <>  
            <Typography
                textAlign={'center'}
                component={'h1'}
                variant='h4'
                my={4}
            >
                Learn
            </Typography>
            <Stack
                direction={'row'}
                justifyContent={'space-around'}
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
