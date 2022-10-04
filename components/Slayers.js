import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Tab from './Navigation/Tab'

const Slayers = ({navigation}) => {
  return (
    <> 
    <View style={styles.container1}>
      <Text>user section</Text>
    </View>
    <View style={styles.container2}>
      <Text>content section</Text>
    </View>
    <View style={styles.container3}>
       <Tab navigation={navigation}/>
    </View>
    </>
  )
}


const styles=StyleSheet.create({
    container1:{
        flex:0.3,
        backgroundColor:'yellow'
    },
    container2:{
        flex:2,
        backgroundColor:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    container3:{
        flex:0.15,
        backgroundColor:'blue',
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row',
    },
})

export default Slayers