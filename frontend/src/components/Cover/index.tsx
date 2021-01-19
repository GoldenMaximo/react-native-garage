import React from 'react'
// import { Spacing } from '../../styles'
import { useScreenDimensions } from '../../hooks/useScreenDimensions'

import { Image } from './styles'

interface Props {
  source: string
}

// Cover has to fill the whole card area.
const Cover = ({ source }: Props) => {
  const size = useScreenDimensions()

  return (
    <Image
      source={{ uri: source }}
      style={{
        width: '100%',
        height: size.width * 0.67,
      }}
    />
  )
}

export default Cover
