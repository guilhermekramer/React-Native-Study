import React, { useState } from 'react'
import { View } from 'react-native'
import Header from '../header/Header'
import DataFetcher from '../data/DataFetcher'
import styles from '../home/Style'

function Stocks() {
    const [stocks, setStocks] = useState(null);

    const handleDataFetched = (data) =>{
        setStocks(data.stocks)
    }

  return (

    <View>
        <Header/>
        <DataFetcher onDataFetched={handleDataFetched}/>
        <FlatList
        style={styles}
        data={currenciesData ? Object.entries(stocks) : []}
        keyExtractor={(item) => item[0]}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item[0]}</Text>
            <Text style={styles.cardText}>Nome: {item[0].name}</Text>
            <Text style={styles.cardText}>Location: {item[1].location}</Text>
            <Text style={styles.cardText}>Points: {item[1].points}</Text>
            <Text style={styles.cardText}>Variation: {item[0].variation}</Text>
          </View>
        )}
      />

    </View>
  )
}

export default Stocks