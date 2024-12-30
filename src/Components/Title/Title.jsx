import React from 'react'
import { Typography } from '../index'

function Title({title , variant , component , styles}) {
    return (
        <>
            <Typography
                variant={variant}
                component={component}
                sx={{ ...styles }}
            >
                {title}
            </Typography>
        </>
    )
}

export default Title
