import React from 'react'
// import { Text,View } from 'react-native'
import { StyleSheet, Text, View ,Button} from 'react-native';


const Signup = ({navigation}) => {
  return (
<>
    <Text style={styles.text}>SignUp</Text>
    <Button title='Tap!' onPress={()=>{
       navigation.navigate('login')
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

export default Signup