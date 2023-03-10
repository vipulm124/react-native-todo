import React, {useState} from "react";
import { View, Text, StyleSheet,ScrollView, TouchableOpacity  } from "react-native";
import CheckBox from '@react-native-community/checkbox';

function TodoTile({...props}){
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    function trimTitle(title){
        if(title.length>25){
            return title.substring(0,25) + "...";
        }
        else{
            return title;
        }
    }

    function checkBoxClicked(newValue){
        setToggleCheckBox(newValue);
        props.updateSelectedKeys(props[0], newValue);
    }

return(
<TouchableOpacity onPress={() => props.navigation.navigate('ToDoItem',{key:props[0],title:JSON.parse(props[1]).title,data:JSON.parse(props[1]).data})}>
    <View style={styles.container}>
    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => checkBoxClicked(newValue)}
    />
        <Text style={styles.heading}>{trimTitle(JSON.parse(props[1]).title)}</Text>
        {/* <Text>{JSON.parse(props[1]).date}</Text> */}
        
    </View>
</TouchableOpacity>
)
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
        marginVertical:7,
        elevation:1,
        padding:10,
        borderRadius:5,
        backgroundColor:'#51E1ED',
        // flex:1,
        flexDirection:'row'
    },
    heading:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:3,
        marginLeft:3
    }

})

export default TodoTile;