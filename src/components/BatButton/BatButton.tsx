  import React, { useState } from 'react';
  import { Pressable, View, Text, Alert } from 'react-native';
  import * as Clipboard from 'expo-clipboard';
  import { styles } from './BatButtonStyle';
  import { BatTextInput } from '../BatTextInput/BatTextInput';
  import generatePass from '../../services/passwordService';
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
  import savePasswords from '../../services/savePassword';

  export function BatButton({navigation}:any) {
    const [pass, setPass] = useState('');

    function handleGeneratePass() {
      let genereteToken = generatePass();
      setPass(genereteToken);
    }

    function handleCopy() {
      if (pass) {
        Clipboard.setStringAsync(pass);
        Alert.alert('Senha copiada com sucesso!');
      } else {
        Alert.alert('Nenhuma senha gerada ainda.');
      }
    }

    function handleSavePassword() {
        savePasswords(pass);
        Alert.alert('Senha sava com sucesso');
    }

    return (
      <>
        <BatTextInput
          pass={pass}
        />

        <Pressable
          style={styles.button}
          onPress={handleGeneratePass}
        >
          <Icon name="form-textbox-password" size={20} color="#fff" />
          <Text style={styles.text}> Gerar senha</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={handleCopy}
        >
          <Icon name="content-copy" size={20} color="#fff" />
          <Text style={styles.text}> Copy</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={handleSavePassword}
        >
          <Icon name="content-save-outline" size={20} color="#fff" />
          <Text style={styles.text}> Save</Text>
        </Pressable>

        <Pressable
          style={styles.listPass}
          onPress={() => navigation.navigate('PasswordSaved')}
        >
          <Icon name="content-save-outline" size={20} color="#fff" />
          <Text style={styles.text}>Lista de Senhas</Text>
        </Pressable>

    </>
    );
  }