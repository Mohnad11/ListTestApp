import React from "react";
import {View,Text} from "react-native";
interface IProps{
    item:any;
}
export default class VerticalDataItem extends React.Component<IProps>{
    componentDidMount() {

    }

    render() {
        return(
            <View style={{height:this.props.item.width,width:'100%',backgroundColor:'blue',marginBottom:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#fff',fontSize:18,fontWeight:'500'}}>{this.props.item.id}</Text>
            </View>
        )
    }
}
