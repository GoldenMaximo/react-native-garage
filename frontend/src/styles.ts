import styled from 'styled-components/native'
import { StatusBar as eStatusBar } from 'expo-status-bar'

export const Colors = {
  backgroundColor: '#EFEDEE',
  cardColor: '#ffffff',
  textColor: '#000000',
  starColor: '#F9E26B',
  divisorColor: '#9F9F9F'
}

export const Spacing = {
  padding: 15,
  extraMargin: 10
}

export const Container = styled.View`
  flex: 1;
  backgroundColor: ${Colors.backgroundColor};
  alignItems: flex-start;
  justifyContent: center;
}`

export const StatusBar = styled(eStatusBar).attrs({
  style: 'auto'
})``
