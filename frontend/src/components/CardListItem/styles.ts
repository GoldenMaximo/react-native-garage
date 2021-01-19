import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

import { Colors, Spacing } from '../../styles'

export const Card = styled.View`
  backgroundColor: ${Colors.cardColor};
  marginHorizontal: ${Spacing.padding}px;
  marginVertical: ${Spacing.padding}px;
  shadowOffset: {
    width: 0;
    height: 5;
  };
  shadowOpacity: 0.25;
  shadowRadius: 20px;
  elevation: 2;
`

export const Details = styled.View`
  padding: ${Spacing.padding}px;
`

export const Header = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  paddingVertical: ${Spacing.extraMargin}px;
`

export const Model = styled.Text`
  color: ${Colors.textColor};
  fontSize: 30px;
`

export const Line = styled.View`
  height: 1px;
  backgroundColor: ${Colors.divisorColor};
  marginVertical: ${Spacing.extraMargin}px;
`

export const MakeYear = styled.Text`
  paddingVertical: ${Spacing.extraMargin}px;
`

export const StarIcon = styled(AntDesign).attrs(props => ({
  name: props.star ? 'star' : 'staro',
  color: props.star ? Colors.starColor : Colors.textColor,
  size: 24
}))``

export const ImageFallbackContainer = styled.View`
  width: 100%;
  height: 300px;
  align-items: center;
  justify-content: center;
`;

export const ImageFallbackText = styled.Text`
  font-size: 22px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;