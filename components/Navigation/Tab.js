import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Tab = () => {
  return (
    <>
      <Text style={styles.txt}>Tab</Text>
      <Text style={styles.txt}>Tab</Text>
      <Text style={styles.txt}>Tab</Text>
      <Text style={styles.txt}>Tab</Text>
      <Text style={styles.txt}>Tab</Text>
    </>
  )
}

const styles=StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
    },
    txt:{
        fontSize:20,
        color:'white',
    }
})

export default Tab