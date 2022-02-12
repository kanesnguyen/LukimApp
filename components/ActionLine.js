import { StyleSheet, Text, View } from 'react-native';    
import { withTheme } from 'react-native-paper';
import styleGlobal from '../assets/css/globalStyle'
import React from 'react';
import Switch from './Switch';
const ActionLine = (props) => {
  const { colors } = props.theme;  
  return (
    <View style={[styleGlobal.flexBetween ,styles.container,{borderBottomColor:colors.borderColor}]}> 
        <Text style={[styles.title, {color:colors.text}]}>{props.title}</Text> 
        <Switch value={props.value}/>
    </View>
  );
};

export default withTheme(ActionLine);

const styles = StyleSheet.create({ 
  container: {
    height:50, 
    paddingHorizontal:20, 
    borderBottomWidth: 0.3, 
  },
  title: {  
    fontSize:15,
    color:'#000'
  },
  param: {
    fontSize:13,
    color:'#c2c0c0'
  }
});
