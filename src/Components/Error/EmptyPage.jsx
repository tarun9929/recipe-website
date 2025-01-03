import React from 'react'
import { Stack } from '../index'
import Empty from '../../../images/empty.png'

function EmptyPage() {
  return (
    <>
      <Stack
        justifyContent={'center'}
        alignItems={'center'}
      >
        <img 
          src={Empty} 
          alt="" 
          width={500}
          height={500}
        />
      </Stack>
    </>
  )
}

export default EmptyPage
