'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({
    amount
}: {amount: number}) => {
  return (
    <p className='w-full'>
        <CountUp 
            end={amount}
            duration={3}
            decimals={2}
            prefix="$"
        /> 
    </p>
 )
}

export default AnimatedCounter