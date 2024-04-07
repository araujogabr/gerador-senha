import { StyleSheet } from 'react-native';
import { listaSenha } from '../../services/savePassword';


const styles = StyleSheet.create({
    containerLogo: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '50%'
      
    },


    background:{
      width: '100%',
      height: '100%'
    },

    logocontainer:{
      display: 'flex',
      alignItems:'center',
      justifyContent: 'flex-end',
      height: '50%'
    },

    containerBotoes:{
      height: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',

    },

  });

  export default styles;