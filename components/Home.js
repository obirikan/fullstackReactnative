import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <> 
    <View style={styles.container1}>
      <Text>user section</Text>
    </View>
    <View style={styles.container2}>
      <Text>content section</Text>
    </View>
    <View style={styles.container3}>
      <Text >navigation</Text>
    </View>
    </>
  )
}


const styles=StyleSheet.create({
    container1:{
        flex:1,
        backgroundColor:'yellow'
    },
    container2:{
        flex:1,
        backgroundColor:'grey'
    },
    container3:{
        flex:1,
        backgroundColor:'blue'
    },
})

export default Home