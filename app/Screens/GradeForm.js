import { View, Text,StyleSheet,Alert } from 'react-native'
import React, { useState } from 'react';
import { Button ,Icon,Input,onPress} from '@rneui/base';
import {guardarNotas} from '../Services/GradeServices'

export const GradeForm = ({navigation}) => {
    const [materia,setMateria]=useState();
    const [nota,setNota]=useState();
    const [errorMateria,setErrorMateria]=useState();
    const [errorNota,setErrorNota]=useState();
    let hasError=false;

    const save=()=>{
        setErrorMateria(null);
        setErrorNota(null);
        validacion();
        if(!hasError){
            guardarNotas({materia:materia,nota:nota});
            navigation.navigate('ListGradesNav')
        }

    }
    const validacion=()=>{
        if(materia==null || materia=="" ){
            setErrorMateria('Debe ingresar una materia');
            hasError=true;
        }
        let NotaFloat =parseFloat(nota);
        if(NotaFloat==null || isNaN(NotaFloat) || NotaFloat<0 || NotaFloat>10){
            setErrorNota('Debe ingresar una nota entre 0 y 10');
            hasError=true;
        }
    }
  return (
    <View style={styles.container}>
      <Input
      value={materia}
      onChangeText={setMateria}
      placeholder='Ejemplo: Programacion'
      label='Materia'
      errorMessage={errorMateria}
      />
       <Input
      value={nota}
      onChangeText={setNota}
      placeholder='0-10'
      label='Puntuacion'
      keyboardType='numeric'
      errorMessage={errorNota}
      />
      <Button
      color='#012C44'
      onPress={save}
      buttonStyle={{width:120,marginHorizontal:10,justifyContent:'space-evenly',borderRadius:15}}
      >
        Guardar 
        <Icon  name='save' type='feather' color='white' />
      </Button>
    </View>
  )
}
const styles =StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',  
        justifyContent:'center',
        marginHorizontal:30
    }
});
export default GradeForm