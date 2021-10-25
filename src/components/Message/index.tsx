import React from 'react';

import { View, Text } from 'react-native';
import { UserFoto } from '../UserFoto';

import { styles } from './styles';

export type MessageProps = {
    id: string;
    text: string;
    user: {
        nome: string;
        avatar_url: string;
    }
}
type Props = {
    data: MessageProps;
}

export function Message({ data }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>
                {data.text}
            </Text>

            <View style={styles.footer}>
                <UserFoto
                    imageUri={data.user.avatar_url}
                    sizes="SMALL" />

                <Text style={styles.userName}>{data.user.nome}</Text>
            </View>

        </View>
    );
}