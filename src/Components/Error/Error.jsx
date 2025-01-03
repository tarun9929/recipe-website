import { Stack } from '../index'
import React from 'react'
import {Typography} from '../index'
import { ColorPaletter } from '../index'

function Error({error , errorImage}) {
  return <ColorPaletter children={
    <Stack
        justifyContent={'center'}
        alignItems={'center'}
    >
      <img src={errorImage} height={500} width={500} alt="" />
      <Typography
        component={'h1'}
        variant='h3'
        my={3}
        color='primary.main'
      >
        {error}
      </Typography>
    </Stack>
  }/>
}

export default Error
