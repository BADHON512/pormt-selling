import { SignIn } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='w-full h-screen flex items-center justify-center'><SignIn/></div>
  )
}

export default page