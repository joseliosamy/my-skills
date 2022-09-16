

import React, { useEffect, useState } from 'react';
import {
    FlatList, Platform, StyleSheet, Text, TextInput, View
} from 'react-native';

import { Button } from './components/Button';
import { SkillCard } from './components/SkillCard';

interface SkillData {
    id: string;
    name: string;
}

export default function Home(){
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [gretting, setGretting] = useState('');

    function handleAddNewSkill(){
        if(newSkill === '') return;

        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }

        setMySkills(oldState => [...oldState, data]);

        handleDeletNewSkillInput();
    }
    function handleRemoveSkill(id: string){
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ))
    }
    function handleDeletNewSkillInput(){
        setNewSkill('');
    }
    useEffect(() =>{
        const currentHour = new Date().getHours();
        
        if(currentHour < 12){
            setGretting('Good morning');
        }else if(currentHour >= 12 && currentHour < 18){
            setGretting('Good afternoon');
        }else{
            setGretting('Good night');
        }
    },[])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Josélio 😁</Text>

            <Text style={styles.greetings}>{gretting}</Text>


            <TextInput 
                style={styles.input}
                placeholder="New Skill"
                placeholderTextColor="#666"
                onChangeText={setNewSkill}
                value={newSkill}
            />
            

            <Button 
                activeOpacity={.7}
                onPress={handleAddNewSkill}
                title="Add +"
             />

            <Text style={[styles.title, {marginTop: 50}]}>My Skills</Text>


        {/* Só usar ScrollView caso hajam poucos itens na lista, caso contrário, usar flatlist */}

             <FlatList
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => 
                    <SkillCard 
                        skill={item.name} 
                        onPress={() =>  handleRemoveSkill(item.id)}
                    />}
                showsVerticalScrollIndicator={false}
            />
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121015',
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 30
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeigh: 'bold'
    },
    input: {
        backgroundColor: '#1F1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 7 : 15,
        marginVertical: 15,
        borderRadius: 10,
    },
    greetings: {
        color: '#fff'
    }
})
