import AuthForm from '@/components/AuthForm'
import React from 'react'

const SignIn = () => {
  return (
    <section className='flex-center size-full max-sm:px-4'>
      <AuthForm type="signin"/>
    </section>
  )
}

export default SignIn