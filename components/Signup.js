import React from 'react'
// import { Text,View } from 'react-native'
import { StyleSheet, Text, View ,Button, TouchableOpacity} from 'react-native';


const Signup = ({navigation}) => {
  return (
<>
    <Text style={styles.text}>SignUp</Text>

<TouchableOpacity>
<View style={styles.btn}>
    <Button 
       title='go' 
       color="white" 
       onPress={()=>{navigation.navigate('home')}}
     />
  </View>
</TouchableOpacity>

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
    },
    btn:{
      backgroundColor:'black',
      width:100,
      marginTop:10,
      color:'white'
    }
})

export default Signup