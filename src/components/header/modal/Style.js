import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    touchModal: {
      height: 100,
      width: 200,
      backgroundColor: 'orange',
      borderTopRightRadius: 10, // Ajuste conforme necessário para obter as bordas arredondadas desejadas
      borderBottomRightRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    touchButton: {
      borderRadius: 10, // Aumentando o raio da borda para suavizar mais
      width: 150,      // Aumentando a largura do botão
      height: 50,      // Aumentando a altura do botão
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
  });

export default styles