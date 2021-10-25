import React from 'react';

import { ScrollView } from 'react-native';

import { Message } from '../Message';
import { styles } from './styles';

export function MessageList() {
    const messageteste = {
        id: '1',
        text: 'ola',
        user: {
            name: 'pedro',
            avatar_url: 'https://github.com/PedroLucasBastos.png'
        }

    }

    return (
        <ScrollView style={styles.container}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps='never'
        >
            <Message data={messageteste} />
            <Message data={messageteste} />
            <Message data={messageteste} />
        </ScrollView>
    );
}