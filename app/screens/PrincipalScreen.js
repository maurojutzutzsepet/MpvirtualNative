import React, { useContext, useEffect } from 'react'
import { Text, View, TouchableOpacity, StatusBar, Alert, BackHandler } from 'react-native'
import { mainStyles } from "@styles/styles"
import color from '@styles/colors'
import { UsuarioContext } from '@context/UsuarioContext'
import MyButton from '@components/MyButton'
import ToolBar from '@components/ToolBar'

function useBackButtom(handler) {
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handler)
        return () => {
            console.log('hardwareBackPress Close')
            BackHandler.removeEventListener("hardwareBackPress", handler)
        }
    }, [handler])
}

function PrincipalScreen(props) {
    useBackButtom(desconectarse)
    const [login, loginAction] = useContext(UsuarioContext)

    const IrA = () =>{
        goToScreen('Fiscalias')
    }

    return (
        <View >
            <StatusBar backgroundColor={color.BLUE}
                barStyle='dark-content'
                translucent={true}
            />
             <ToolBar titulo='MP Virtual'
            />
             <View style={{ alignItems: 'center'}}>
                <Text style={{ textAlign: 'center', marginTop: 200, fontFamily: 'Poppins-Bold' }}> Bienvenido {'\n' + login.usuario.email} </Text>
            <MyButton
            titulo='Fiscalias'
            onPress={() => IrA()}
            />
            <MyButton
            titulo='Cerrar sesion'
            onPress={() => desconectarse()}
            />
            </View>
        </View>
    )
    function goToScreen(routeName){
        props.navigation.navigate(routeName)
    }

    function desconectarse(){
        Alert.alert(
            "Salir",
            "Esta seguro de \ncerrar sesion",
            [
                {
                    text: "Si", onPress: () =>{
                        loginAction({
                            type: 'sign-out',
                            data:{}
                        })
                        goToScreen('Login')
                    }
                },
                {
                    text: "No", onPress: ()=>{}, style: 'cancel'
                }
            ]
        )
    }

}

export default PrincipalScreen