import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
  
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#fff'
  },

  listPass:{
    marginTop: 5,
    textAlign: 'center',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5, 
    backgroundColor:'#c1c1c1',
    elevation: 3,
    borderWidth: 2,
    borderColor: '#fff',
    display: 'flex',
    alignItems: 'center',
  }
});