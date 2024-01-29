import React, { useState } from 'react'
import { FlatList, View, Text } from 'react-native'
import DataFetcher from '../data/DataFetcher'
import styles from '../home/Style'


function Stocks() {
  const {stocks} = DataFetcher()


  return (

    <View>
        <FlatList
          
          data={stocks ? Object.entries(stocks) : []}
          keyExtractor={(item) => item[0]}
          renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item[0]}</Text>
            <Text style={styles.cardText}>Name: {item[1].name}</Text>
            <Text style={styles.cardText}>Location: {item[1].location}</Text>
            <Text style={styles.cardText}>Points: {item[1].points}</Text>
            <Text style={styles.cardText}>Variation: {item[1].variation}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default Stocks