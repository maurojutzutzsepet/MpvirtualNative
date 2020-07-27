import React, { useState } from 'react'
import {Text, View, TouchableOpacity, StatusBar, Image} from 'react-native'
import {mainStyles, registroStyles } from '@styles/styles'
import MyTextInput from "@components/MyTextInput"
import color from "@styles/colors"
import { ScrollView } from 'react-native-gesture-handler'
import ToolBar from '../components/ToolBar'
import { CheckBox, SocialIcon, Button} from 'react-native-elements'

const goToScreen = (props,routeName) =>{
    //props.navigation.navigate(routeName)
        props.navigation.navigate(routeName)
    }

function RegistroScreen(props){
    const [hidePassword, setHidePassword] = useState(false)
    return(
        <ScrollView
        keyboardDismissMode='on-drag'
        keyboardShouldPersistTaps='always'
        style={{backgroundColor: color.WHITE}}
        >
            <StatusBar backgroundColor={color.BLUE} translucent={true}/>
            <ToolBar titulo='Registrarse'
                 onPressLeft={() => goToScreen(props, 'Login')}
                 iconLeft={require('@recursos/images/back.png')}
                />
            <View style={[mainStyles.container, {padding: 50}]}>
            <Text style={mainStyles.titleText}> Crea tu cuenta </Text>
            <MyTextInput placeholder='CUI' image='user' />
            <MyTextInput placeholder='Nombre' image='user' />
            <MyTextInput placeholder='Apellidos' image='user' />

            <MyTextInput keyboardType='email-address' placeholder='E-mail' image='envelope' />

            <MyTextInput keyboardType={null} placeholder={'Contrase;a'}
                onPress={()=> setHidePassword(!hidePassword)}
                keyboardType={null}
                image='lock' bolGone={true}
                secureTextEntry={hidePassword}
            />

            <CheckBox 
                containerStyle={registroStyles.CheckBox}
                textStyle={{color: color.BLUE}}
                title={'He leido y acepto  los terminos y condiciones'}
                checked={false}
                checkedColor={color.BLUE}
            />

            <View style={mainStyles.btnMain}>
                <TouchableOpacity onPress={() => goToScreen(props, 'Login')}>
                    <Text style={mainStyles.btntxt}> Registrarse </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{ color: color.BLUE}}> ¿Ya tienes una cuenta? </Text>
                <Button title="Inicia Sesion" onPress={() => goToScreen(props, 'Login')} type="clear" />
            </View>
            <View style={registroStyles.containerSocial}>
                <SocialIcon 
                    style={registroStyles.buttonSocialIcon}
                    title='Iniciar con FaceBook'
                    button
                    type='facebook'
                />
                <SocialIcon 
                    style={registroStyles.buttonSocialIcon}
                    title='Iniciar con Google'
                    button
                    type='google-plus-official'
                />
                
            </View>
        </View>
        </ScrollView>
    )
}

export default RegistroScreen