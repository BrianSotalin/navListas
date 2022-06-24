import { View, Text,StyleSheet,FlatList,TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import {getNotas} from '../Services/GradeServices'
import { Avatar, color, FAB, ListItem } from "@rneui/base";

export const ListGrades = ({navigation}) => {
  const [time,setTime]=useState();
  const refresh=()=>{
    setTime(new Date().getTime());
  }
  const ItemGrade =({nota})=>{
   return <TouchableHighlight onPress={()=>{navigation.navigate('GradeFormNav',{grade:nota,refrescando:refresh})}}>     
    <ListItem bottomDivider>
   <Avatar
    title={nota.materia.substring(0,1)}
    containerStyle={{ backgroundColor: '#012C44' }}
    rounded
    />
    <ListItem.Content>
      <ListItem.Title>{nota.materia}</ListItem.Title>
    </ListItem.Content>
    
    <ListItem.Content>
      <ListItem.Title><Text style={{color:'#7D50D4'}}>Calificacion:</Text> {nota.nota}</ListItem.Title>
    </ListItem.Content>
    <ListItem.Chevron color={'#7D50D4'}/>
   </ListItem>
   </TouchableHighlight> 
     
  }
  return (
    <View style={styles.container}>
      <FlatList
      data={getNotas()}
      renderItem={({item})=>{
               return  <ItemGrade nota={item}/>
      }}
      keyExtractor={(item)=>{return item.materia}}
      extraData={time}
      />
      <FAB
      icon={{ name: 'add', color: 'white' }}
      color='#012C44'
      placement='right'
      onPress={()=>{navigation.navigate('GradeFormNav',{grade:null,refrescando:refresh})}}
      />
    </View>
  )
}
const styles =StyleSheet.create({
    container:{
        flex: 1, 
        color:'#012C44'
    }
});
export default ListGrades