import React, { useState } from 'react';
import {
  SafeAreaView, ScrollView, View, Text, StatusBar, Button, Alert, TouchableOpacity, TextInput
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles.js';

// import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;

const Weight = ({ navigation }) => {
  const [ selectA, setSelectA ] = useState('')
  return (
    <>
    <Picker>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
    {/* {myIcon} */}
    <Picker>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
      <View style={styles.sectionContainer}>
        <Text>Mass</Text>
        <TextInput
          style={styles.input}
          textAlign='center'
          placeholder='1'
        />
      </View>
    </>
  );
};

export default Weight;