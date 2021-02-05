import React, { useState, useEffect} from 'react';
import {
  SafeAreaView, ScrollView, View, Text, StatusBar, Button, Alert, TouchableOpacity, TextInput, Keyboard,KeyboardAvoidingView, TouchableWithoutFeedback
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles.js';

// import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;

const Weight = ({ navigation }) => {
  const [ selectA, setSelectA ] = useState('Java');
  const [ selectB, setSelectB ] = useState('JavaScript');


  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
        behavior='position'
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            {}
            <Picker
              selectedValue={selectA}
              onValueChange={(itemValue, itemIndex) => setSelectA(itemValue)}
            >
              <Picker.Item label="Java" value="Java" />
              <Picker.Item label="JavaScript" value="JavaScript" />
            </Picker>
            {/* {myIcon} */}
            <Picker
              selectedValue={selectB}
              onValueChange={(itemValue) => setSelectB(itemValue)}
            >
              <Picker.Item label="Java" value="Java" />
              <Picker.Item label="JavaScript" value="JavaScript" />
            </Picker>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.sectionContainer}>
          <Text style={styles.converterLable}>{`${selectA} → ${selectB}`}</Text>
          <TextInput
            keyboardType = 'numeric'
            style={styles.input}
            textAlign='center'
            placeholder='0'
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Weight;