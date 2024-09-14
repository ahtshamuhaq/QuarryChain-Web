import React from 'react'
import { GradientHeading } from '../RealWorldAssets.styles'

const QuerryCard = () => {
  return (
    <div className='w-full max-w-3xl text-center mx-auto'>
      <GradientHeading >How QuarryChain will Approach Tokenization</GradientHeading>
      <div className='text-[16px] leading-[30px] mt-10'>
          <p className='font-normal'>The QuarryChain Network will allow the creation of Digital Representation of Assets through Tokenization. This process does not greatly differ from other IT projects whereby data models are created to represent assets or goods. </p>
          <p className='font-normal'> In simple terms, asset tokenization consists of creating an informatic code presenting the key characteristics of the assets while exposing some functions allowing the user to interact with the digital representaion of the asset. On QuarryChain, this formatic code is developed in Solidity.</p>
      </div>
    </div>
  )
}

export default QuerryCard
