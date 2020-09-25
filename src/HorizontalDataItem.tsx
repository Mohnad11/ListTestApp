import React from "react";
import {View,Text} from "react-native";
interface IProps{
    item:any;
}
export default class HorizontalDataItem extends React.Component<IProps>{
    componentDidMount() {

    }

    render() {
        return(
            <View style={{height:150,width:this.props.item.width,backgroundColor:'green',marginLeft:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#fff',fontSize:18,fontWeight:'500'}}>{this.props.item.id}</Text>
            </View>
        )
    }
}
