import React, { useState, useEffect } from 'react'
import { FlatList, ScrollView } from 'react-native'
import { getList } from '../../services/api'
import CardListItem from '../../components/CardListItem'
import { Title } from './styles'
import { CarProps } from '../../models/car';

const Garage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const updateData = async () => {
      const res = await getList()

      // Filter dupes
      let carIds: Array<String> = [];
      const filteredRes = res.items.filter((car: CarProps) => {
        if (car) {
          if (carIds.includes(car.id)) return;
          carIds.push(car.id);
          return car;
        }
      });


      setData(filteredRes)
    }
    updateData()
  }, [])

  const renderCardListItem = ({ item }: { item: CarProps }) => {
    return (
      <CardListItem
        id={item.model}
        model={item.model}
        make={item.make}
        year={item.year}
        coverURL={item.image ? item.image.url : ''}
      />
    )
  }

  return (
    <>
      <Title>Garage</Title>
      <FlatList
        data={data}
        keyExtractor={item => item.id ? item.id : item.model}
        renderItem={renderCardListItem}
        style={{ width: '100%' }}
      />
    </>
  )
}

export default Garage
