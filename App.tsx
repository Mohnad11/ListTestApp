/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, FlatList, NativeSyntheticEvent, NativeScrollEvent, Alert, ViewToken,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HorizontalDataItem from "./src/HorizontalDataItem";
import VerticalDataItem from "./src/VerticalDataItem";

declare const global: {HermesInternal: null | {}};
interface IState{
  data:any[];
  horizontalListCurrentItemIndex:number
  verticalListCurrentItemIndex:number
}
class App extends React.Component<any>{
  state:IState={
    data:[],
    horizontalListCurrentItemIndex:0,
    verticalListCurrentItemIndex:0,
  }
  componentDidMount() {
    this.fillList();
  }
  fillList(){
    let data:any=[];
    for(let i=0;i<100;i++){
      let randWidth=Math.floor(Math.random() * 200) + 50;
      data.push({id:i,width:randWidth})
    }
    this.setState({data:data})
  }
  handleScroll(event:NativeSyntheticEvent<NativeScrollEvent>){
    //Alert.alert(JSON.stringify(event.target.toFixed(2)))
  }
  onHorizontalListViewableItemsChanged = (info: { viewableItems: Array<ViewToken>; changed: Array<ViewToken> }) => {
    if(info && info.viewableItems && info.viewableItems.length>0 && info.viewableItems[0].index){
      let index=info.viewableItems[0].index;
      this.setState({horizontalListCurrentItemIndex:index})
    }else{
      this.setState({horizontalListCurrentItemIndex:0})
    }
  }
  onVerticalListViewableItemsChanged = (info: { viewableItems: Array<ViewToken>; changed: Array<ViewToken> }) => {
    if(info && info.viewableItems && info.viewableItems.length>0 && info.viewableItems[0].index){
      let index=info.viewableItems[0].index;
      this.setState({verticalListCurrentItemIndex:index})
    }else{
      this.setState({verticalListCurrentItemIndex:0})
    }
  }

  render() {
    return(
        <SafeAreaView>
          <View style={{width:'100%',height:'100%',backgroundColor:'white',paddingLeft:10,paddingRight:10}}>
              <View>
                <Text style={{marginTop:15,marginBottom:15}}>{"current index:"+this.state.horizontalListCurrentItemIndex}</Text>
                <FlatList
                    onViewableItemsChanged={this.onHorizontalListViewableItemsChanged }
                    viewabilityConfig={{itemVisiblePercentThreshold: 10}}
                    onScroll={event =>this.handleScroll(event) }
                    horizontal={true}
                    data={this.state.data}
                    renderItem={({item})=><HorizontalDataItem item={item} />}
                    keyExtractor={(item:any)=>item.id.toString()}
                />
                <Text style={{marginTop:15,marginBottom:15}}>{"current index:"+this.state.verticalListCurrentItemIndex}</Text>
                <FlatList
                    onViewableItemsChanged={this.onVerticalListViewableItemsChanged }
                    viewabilityConfig={{ itemVisiblePercentThreshold: 10 }}
                    onScroll={event => this.handleScroll(event) }
                    data={this.state.data}
                    renderItem={({item})=><VerticalDataItem item={item} />}
                    keyExtractor={(item:any)=>item.id.toString()}
                />
              </View>
          </View>
        </SafeAreaView>
    )
  }
};



export default App;
