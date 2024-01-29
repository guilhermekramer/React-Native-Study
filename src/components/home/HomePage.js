// HomePage.js
import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from './Style';
import DataFetcher from '../data/DataFetcher';

function HomePage() {
  
  const {currencies} = DataFetcher()

/*   const handleDataFetched = (data) => {
    console.log('fez');
    setCurrenciesData(data);
  } */;

  return (
    <View style={styles}>
      {/* <DataFetcher onDataFetched={handleDataFetched} /> */}

      <FlatList
        style={styles}
        data={currencies ? Object.entries(currencies) : []}
        keyExtractor={(item) => item[0]}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item[0]}</Text>
            <Text style={styles.cardText}>Nome: {item[1].name}</Text>
            <Text style={styles.cardText}>Compra: {item[1].buy}</Text>
            <Text style={styles.cardText}>Venda: {item[1].sell ?? 'N/A'}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default HomePage;
