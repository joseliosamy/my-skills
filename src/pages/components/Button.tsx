

import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string
}

export function Button({ title, ...rest } : ButtonProps){
    return (
        <TouchableOpacity 
        style={styles.button}
        {...rest}
        >
          {/* receba todas as propriedades que vier no componente, usar ...rest */}
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0370f7',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    buttonText: {
        color: '#fff'
    },
})