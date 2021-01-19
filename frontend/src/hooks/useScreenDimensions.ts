import { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'

export const useScreenDimensions = () => {
  const [size, setSize] = useState(Dimensions.get('window'))

  useEffect(() => {
    const onChange = (result: any) => {
      setSize(result.window)
    }
    Dimensions.addEventListener('change', onChange)
    return () => Dimensions.removeEventListener('change', onChange)
  })

  return {
    ...size,
    isLandscape: size.width > size.height
  }
}
