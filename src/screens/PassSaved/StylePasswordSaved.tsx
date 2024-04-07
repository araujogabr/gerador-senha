import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height:'100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'#000',
    padding: 20
  },
  text:{
    fontSize: 20,
    color:'#fff'
  },

  button:{
    marginTop: 5,
    textAlign: 'center',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5, 
    backgroundColor:'#000',
    elevation: 3,
    borderWidth: 2,
    borderColor: '#EAD549',
    display: 'flex',
    alignItems: 'center',
  },
});