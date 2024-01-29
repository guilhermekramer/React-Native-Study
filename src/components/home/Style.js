import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333', // Cor do texto, ajuste conforme necessário
  },
  imageStyle: {
    width: '100%', // Ocupa 100% da largura do container
    height: 200, // Ajuste conforme necessário
    resizeMode: 'cover', // ou 'contain' dependendo do comportamento desejado
  },
  container: {
    flex:1,
    backgroundColor: '#f0f0f0',
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
  },
  
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    marginBottom: 4,
  },

  
});

export default styles;
