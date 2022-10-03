import React from 'react'
// import { Text,View } from 'react-native'
import { StyleSheet, Text, View ,Button} from 'react-native';


const Login = ({navigation}) => {
  return (
<>
    <Text style={styles.text}>login</Text>
    <Button title='Tap!' onPress={()=>{
        navigation.navigate('sign')
    }}/>
</>
  )
}
const styles=StyleSheet.create({
    text:{
        fontSize:50,
        marginTop:10,
        backgroundColor:'black',
        color:'white',
        padding:10
    }
})

export default Login