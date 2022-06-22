import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button ,Icon,Input} from '@rneui/base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {GradeForm} from './app/Screens/GradeForm';
import {ListGrades} from './app/Screens/ListGrades';

export default function App() {
  const StackGrades=createNativeStackNavigator();
  return (
   <NavigationContainer>
   <StackGrades.Navigator>
    <StackGrades.Screen name='GradeFormNav' component={GradeForm}/>
    <StackGrades.Screen name='ListGradesNav' component={ListGrades}/>
   </StackGrades.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
