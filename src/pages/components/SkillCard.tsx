

import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard({ skill, ...rest } : SkillCardProps){
    return(
        <TouchableOpacity style={styles.buttonSkill}>
            <Text 
                style={styles.textSkill}
                {...rest}
            >
                {skill}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 20,
        marginTop: 20,
    },
    textSkill: {
        width: '100%',
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})