import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from '../BatTextInput/BatTextInputStyle';

interface BatTextInputProps{
  pass:string
}


export function BatTextInput(props:BatTextInputProps) {
  return (
        <TextInput 
            style={styles.textInputSenha}
            placeholder='Senha'
            value={props.pass}
        /> 
  );
}