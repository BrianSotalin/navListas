import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export const ListGrades = () => {
  return (
    <View style={styles.container}>
      <Text>ListGrades</Text>
    </View>
  )
}
const styles =StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
});
export default ListGrades