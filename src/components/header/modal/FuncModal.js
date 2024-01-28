import React from 'react'
import styles from './Style'
import { Text, TouchableOpacity, View, } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'




function FuncModal({handleClose}) {
  

  return (
    

    <View style={styles.touchModal}>
      
      <TouchableOpacity style={styles.touchButton} onPress={() => handleClose()}>
          <Text>Fechar Modal</Text>
      </TouchableOpacity>
    
    </View> 

  

  )
}


export default FuncModal