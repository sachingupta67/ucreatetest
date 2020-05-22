import React, {useState, useEffect} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import CustomModal from '../components/CustomModal';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import {storeData, getData} from '../helpers/utility';
const AddDog = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [desc, setDesc] = useState('');

  const modalHandler = () => {
    setModal(!modal);
  };
  const nameHandler = value => {
    setName(value);
  };
  const breedHandler = value => {
    setBreed(value);
  };
  const descHandler = value => {
    setDesc(value);
  };
  useEffect(async () => {
    console.log('hello===>');
    let x = await getData('@details');
    console.log(x);
  }, []);
  const submitHandler = async () => {
    if (name.length > 3 && breed.length > 3 && desc.length > 3) {
      console.log(name, breed, desc);
      const data = {
        id: parseInt(Math.random() * 10),
        name: name,
        breed: breed,
        desc: desc,
      };
      await storeData('@details', data);
    } else {
      Alert.alert('All fields are mandatory with at least 4 characters');
    }
  };

  const addDogJSX = (
    <CustomModal
      visible={modal}
      handler={() => modalHandler()}
      content={
        <>
          <CustomTextInput
            title="Name"
            placeholder="Enter dog's name"
            value={name}
            onChangeText={nameHandler}
          />
          <CustomTextInput
            title="Breed"
            placeholder="Enter dog's breed"
            value={breed}
            onChangeText={breedHandler}
          />
          <CustomTextInput
            title="Description"
            placeholder="Enter dog's description"
            value={desc}
            onChangeText={descHandler}
          />
          <CustomButton title="Add" onPress={() => submitHandler()} />
        </>
      }
    />
  );
  return (
    <View>
      <CustomButton title="Add Dog" onPress={() => modalHandler()} />
      {modal ? addDogJSX : null}
    </View>
  );
};

export default AddDog;
