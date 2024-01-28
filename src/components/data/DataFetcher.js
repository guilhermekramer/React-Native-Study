import React, { useState, useEffect } from 'react';

function DataFetcher({ onDataFetched }) {
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.hgbrasil.com/finance?key=3184ae5b');

        if (response.status === 200) {
          const jsonData = await response.json();
          console.log('Dados JSON recebidos:', jsonData);

          const currencies = jsonData.results.currencies;
          const stocks = jsonData.results.stocks
          console.log("stocks:", stocks);

          
          //const stocks = jsonData.results.stocks

          const filteredCurrencies = Object.fromEntries(
            Object.entries(currencies).slice(1)
          );
            
          onDataFetched(filteredCurrencies, stocks);
        
        } else {
          throw new Error(`Erro na requisição: ${response.statusText}`);
        }
      } catch (error) {
        console.error('Erro durante a requisição:', error);
      }
    }

    fetchData();
  }, []);



  return null;
}

export default DataFetcher;