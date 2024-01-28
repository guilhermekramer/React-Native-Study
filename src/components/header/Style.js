import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  header: {
    backgroundColor: 'orange',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start', 
    height: 100,
  },

  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 20 
  },
  
  button: {
    marginRight: 15,
    marginTop: 20 
  },

  modalFun:{
    flex:1
  },

  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default styles;
