import React, { useState } from 'react'
import {Text, View, TouchableOpacity, StatusBar, Image} from 'react-native'
import {mainStyles, loginStyles } from '@styles/styles'
import MyTextInput from "@components/MyTextInput"
import color from "@styles/colors"
import { ScrollView } from 'react-native-gesture-handler'
import ToolBar from '../components/ToolBar'

const goToScreen = (props,routeName) =>{
    //props.navigation.navigate(routeName)
        props.navigation.navigate(routeName)
    }

function RecuperarPassword(props){
    const [hidePassword, setHidePassword] = useState(false)
    return(
        <ScrollView
        keyboardDismissMode='on-drag'
        keyboardShouldPersistTaps='always'
        style={{backgroundColor: color.WHITE}}
        >
        
            <StatusBar backgroundColor={color.BLUE} translucent={true}/>
            <ToolBar titulo='Contraseña'
                 onPressLeft={() => goToScreen(props, 'Login')}
                 iconLeft={require('@recursos/images/back.png')}
                />
            <View style={[mainStyles.container, {padding: 50}]}>
            <Text style={mainStyles.titleText}> Recuperar{'\n'}Contraseña</Text>
            <MyTextInput keyboardType='email-address' placeholder='E-mail' image='user' />

            <View style={mainStyles.btnMain}>
                <TouchableOpacity onPress={() => goToScreen(props, 'Login')}>
                    <Text style={mainStyles.btntxt}> Recuperar </Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    )
}

export default RecuperarPassword