// HomePage.js
import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import Header from '../header/Header';
import styles from './Style';
import DataFetcher from '../data/DataFetcher';

function HomePage() {
  const [currenciesData, setCurrenciesData] = useState(null);

  const handleDataFetched = (data) => {
    console.log('fez');
    setCurrenciesData(data);
  };

  return (
    <View style={styles.container}>
      <Header />
      {/* Use o componente DataFetcher e passe a função de callback onDataFetched */}
      <DataFetcher onDataFetched={handleDataFetched} />
      <FlatList
        style={styles.scrollView}
        data={currenciesData ? Object.entries(currenciesData) : []}
        keyExtractor={(item) => item[0]}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item[0]}</Text>
            <Text style={styles.cardText}>Compra: {item[1].buy}</Text>
            <Text style={styles.cardText}>Venda: {item[1].sell}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default HomePage;
