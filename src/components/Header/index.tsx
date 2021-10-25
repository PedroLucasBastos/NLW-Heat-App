import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


import { styles } from './styles';
import LogoSvg from '../../assets/logo_teste.svg';
import { UserFoto } from '../UserFoto';

export function Header() {
    return (
        <View style={styles.container}>
            <LogoSvg />
            <View style={styles.logoutButton}>
                <TouchableOpacity>
                    <Text style={styles.logoutText}>Sair</Text>
                </TouchableOpacity>

                <UserFoto imageUri="https://github.com/PedroLucasBastos.png " />
            </View>
        </View>
    );
}