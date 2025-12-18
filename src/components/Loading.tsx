import React from 'react'
import { FallingLines } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='h-screen w-screen items-center justify-center flex'>
    <FallingLines
  color="red"
  width="100"
  visible={true}
  ariaLabel="falling-circles-loading"
  />
  </div>
  )
}

export default Loading