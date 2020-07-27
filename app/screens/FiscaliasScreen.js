import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import axios from "axios";
import ToolBar from '@components/ToolBar'
//import { DataTable } from 'react-native-paper'


export default function FiscaliasScreen(props) {
    const [fiscalias, setfiscalias] = useState(null)

    useEffect(() => {
        const apiUrl = 'https://fiscaliasbackend.herokuapp.com/api/fiscalias'
        axios.get(apiUrl)
            .then((res) => {
                setfiscalias(res.data)
            })
    }, [])

    const goToScreen = (props, routeName) => {
        //props.navigation.navigate(routeName)
        props.navigation.navigate(routeName)
    }


    return (
        <View>
            <ToolBar titulo='Fiscalias'
                onPressLeft={() => goToScreen(props, 'Principal')}
                iconLeft={require('@recursos/images/back.png')}
            />
            <Text style={{ marginTop: 200, textAlign: "center" }}>Fiscalias view</Text>
            {
                fiscalias&&(
                    fiscalias.map(item =>{
                        return(
                            
                        <View key={item._id}>
                        <Text>{item.fiscalia}</Text>
                        </View>
                        )
                    })
                )
            }
            {/* <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Fiscalia</DataTable.Title>
                    <DataTable.Title numeric>Lugar</DataTable.Title>
                    <DataTable.Title numeric>Fiscal</DataTable.Title>
                </DataTable.Header>
                {
                fiscalias && (
                    fiscalias.map(items => {
                        return (
                            <DataTable.Row>
                                <DataTable.Cell> {items.fiscalia}</DataTable.Cell>
                                <DataTable.Cell> {items.municipio}</DataTable.Cell>
                                <DataTable.Cell> {items.author}</DataTable.Cell>
                            </DataTable.Row>
                        )
                    })
                )
            }


            </DataTable> */}
{console.log(fiscalias)}

            
        </View>
    )
}
