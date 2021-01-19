import styled from 'styled-components/native'

import { Colors, Spacing } from '../../styles'

export const Title = styled.Text`
  color: ${Colors.textColor};
  fontSize: 36px;
  fontWeight: bold;
  paddingHorizontal: ${Spacing.padding}px;
  paddingVertical: ${3 * Spacing.padding}px;
`

export const Space = styled.View`
  height: ${Spacing.padding + Spacing.extraMargin}px;
`

export const List = styled.FlatList``
