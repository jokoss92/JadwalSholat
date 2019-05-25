import React from "react";
import {View, Text} from "react-native";

export default class TentangKami extends React.Component{
    //Constructor
    constructor(props){
        super(props);
    }

    //Render component
    render(){
        return(
            <View>
                <Text>Halaman Tentang Kami</Text>
            </View>
        )
    }
}