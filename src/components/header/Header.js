import React from 'react';
import { TouchableOpacity, Text, View, Modal } from 'react-native';
import styles from '../header/Style';
import { Feather } from 'react-native-vector-icons';
import { useState } from 'react';
import FuncModal from './modal/FuncModal';

function Header() {

  const [modalDrawer, setModalDrawer] = React.useState(false);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={() => setModalDrawer(true)}>
          <Feather name="align-justify" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Cotações</Text>
      </View>

      <Modal visible={modalDrawer} transparent={true}
        onRequestClose={() => setModalDrawer(false)}>
            
        <FuncModal handleClose={() => setModalDrawer(false)}/>

      </Modal>
    </View>
  );
}

export default Header;
