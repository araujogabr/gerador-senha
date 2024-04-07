import React from "react";
import {Text, StyleSheet, View, ImageBackground, TextInput, Pressable} from "react-native"
import { StatusBar } from 'expo-status-bar';
import styles from "./Style";
import { Batlogo } from "../../components/Logo/Batlogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";
import { Icon } from "@rneui/base";
import { useNavigation } from '@react-navigation/native';


export default function Home(){
    const navigation = useNavigation();

    return(
        
        <View style={styles.containerLogo}>
            <ImageBackground style={styles.background} source={require('../../../assets/back.webp')}>
                <View style={styles.logocontainer}>
                    <Batlogo/>
                </View>
                <View style={styles.containerBotoes}>
                    <BatButton
                        navigation={navigation}
                    />
                </View>
            </ImageBackground>
            
           <StatusBar  style="light"/>
        </View>
        
    );
}


