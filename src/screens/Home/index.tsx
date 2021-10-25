import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header'
import { MessageList } from '../../components/MessageList';
import { SingninBox } from '../../components/SingninBox';


export function Home() {



    return (
        <View style={styles.container}>
            <Header />
            <MessageList />
            <SingninBox />
        </View >
    )
}