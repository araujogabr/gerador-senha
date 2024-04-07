import React from 'react';
import { Image, View, Text } from 'react-native';
import Batman_logo from '../../../assets/Batman_logo.webp'
import { styles } from './BatlogoStyles';
import logo from '../../../assets/logo.webp'

export function Batlogo() {
  return (
    <View style={styles.container}>
            <Image 
                source={require('../../../assets/logo.webp')} 
                style={styles.logobat}
                />
            <Text style={styles.title}>BAT PASS GENERATE</Text>
    </View>
  );
}