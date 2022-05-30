import React, {useState, useEffect} from 'react';
import {View, StyleSheet,Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () =>{
  const [toggle, setToggle] = useState(false); //false

  const handleChangeToggle = () => setToggle (oldToggle => !oldToggle);
  useEffect(()=> {
    //liga o flash do celular
   Torch.switchState(toggle);
  }, [toggle]);

  useEffect(()=>{
    const subscription = RNShake.addListener(()=>{
      setToggle(oldToggle => !oldToggle);
    });
    //Essa função vai ser chamada quando o componente
    //For ser desmontado
    return()=> subscription.remove();

  }, []);
  return 
  <View style = {toggle ? style.containerLight : style.container}>
  <TouchableOpacity onPress={handleChangeToggle}>
  <Image style={toggle ? style.lightningOn : style.lightingOff}
  source={toggle
    ? require('./assets/icons/eco-light.png')
    : require('./assets/icons/eco-light-off.png')}
  />

<Image style={style.diologo}
  source={toggle
    ? require('./assets/icons/logo-dio-white.png')
    : require('./assets/icons/logo-dio.png')}
  />
</TouchableOpacity>
  </View>;
};
export default App;


const style = StyleSheet.create({
container:{
  flex:1,
  backgroundColor: 'black',
  alignItems: 'center',
  justifyContent: 'center',

},
containerLight:{
  flex:1,
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',

},

lightingOn:{
  resizeMode: 'contain',
  alignSelf:'center',
  width: 150,
  height:150,
},

lightingOff:{
  resizeMode: 'contain',
  alignSelf:'center',
  tintColor:'white',
  width: 150,
  height:150,
},
diologo:{
  resizeMode: 'contain',
  alignSelf:'center',
  
  width: 250,
  height:250,
},


});
