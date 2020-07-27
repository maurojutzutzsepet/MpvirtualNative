import React, { useState, useContext } from 'react'
import {Text, View, TouchableOpacity, StatusBar, Image} from 'react-native'
import { mainStyles,loginStyles } from '@styles/styles'
import MyTextInput from "@components/MyTextInput"
import MyButton from "@components/MyButton"
import color from "@styles/colors"
import { UsuarioContext } from "@context/UsuarioContext"




function LoginScreen(props){
    const [login, loginAction] = useContext(UsuarioContext)
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [hidePassword, setHidePassword] = useState(false)
    
    const iniciarSesion = () =>{
        //props.navigation.navigate(routeName)
            loginAction({
                type: 'sign',
                data: {
                    email, password
                }
            })
            goToScreen('Principal')
        }
    const goToScreen = (routeName) =>{
            //props.navigation.navigate(routeName)
                props.navigation.replace(routeName)
            }

    return(
        <View style={[mainStyles.container, {padding: 50}]}>
            <StatusBar backgroundColor={color.BLUE} translucent={true}/>
            <View style={loginStyles.logo}>
                <Image source={require('@recursos/images/MpVirtual2.png')} style={{ height: 150, width:150}}/>
            </View>
            <MyTextInput keyboardType='email-address' placeholder='CUI' image='user' 
            value={email} onChangeText={(email) => setEmail(email)}
            />
            <MyTextInput keyboardType={null} placeholder='Contrasena' image='lock' bolGone={true} 
            secureTextEntry={hidePassword}
            onPress={()=> setHidePassword(!hidePassword)}
            value={password} onChangeText={(password) => setPassword(password)}
            />
            <MyButton 
                titulo='Iniciar Sesion'
                onPress={()=> iniciarSesion()}
            />
            <MyButton 
                titulo='Registrarse'
                transparent={true}
                onPress={()=> goToScreen('Registro')}
            />
            
            <View >
                <TouchableOpacity onPress={() => goToScreen(props, 'RecuperarPassword')}>
                    <Text style={[mainStyles.txtTransparent, {textDecorationLine: 'underline'}]}> Olvide mi contrase;a</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default LoginScreen