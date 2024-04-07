import React, {useLayoutEffect} from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './StylePasswordSaved';
import { listaSenha } from '../../services/savePassword';
import { useNavigation } from '@react-navigation/native';
import savePasswords from '../../services/savePassword';

const PasswordSaved = () =>{
  const navigation = useNavigation(); // Obtenha a propriedade navigation

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Lista de Senhas',
    });
  }, [navigation]);
    

  let listaTodasSenha:string = listaSenha();
  function handleLimpar(){
    listaTodasSenha = '';
  }

  return (
    <View style={styles.container}>
        <Text style={styles.text}>{listaTodasSenha}</Text>
    </View>
  );
}

export default PasswordSaved;