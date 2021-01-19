import React from 'react'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { TouchableOpacity } from 'react-native'

import { toggleStar } from '../../store/actions'
import { CarProps } from '../../models/car';

import Cover from '../Cover'

import {
  Card,
  Header,
  Details,
  Line,
  Model,
  MakeYear,
  StarIcon,
  ImageFallbackContainer,
  ImageFallbackText,
  ImageContainer
} from './styles'

const CardListItem: React.FC<CarProps> = (car: CarProps) => {
  const star = useSelector<RootStateOrAny>((state) => {
    return state.star.starred[car.id]
  })
  const dispatch = useDispatch()

  const _toggleStar = () => {
    dispatch(toggleStar(car.id))
  }

  return (
    <Card>
      {car.coverURL ? (
        <ImageContainer>
          <Cover source={car.coverURL} />
        </ImageContainer>
      ) : (
          <ImageFallbackContainer>
            <ImageFallbackText>No image available</ImageFallbackText>
          </ImageFallbackContainer>
        )}
      <Details>
        <Header>
          <Model>{car.model}</Model>
          <TouchableOpacity onPress={() => _toggleStar()}>
            <StarIcon star={star} />
          </TouchableOpacity>
        </Header>
        <Line />
        <MakeYear>
          {car.make} | {car.year}
        </MakeYear>
      </Details>
    </Card>
  )
}

export default CardListItem
