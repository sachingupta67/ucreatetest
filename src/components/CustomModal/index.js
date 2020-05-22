import React from 'react';
import {Modal, Text, StyleSheet} from 'react-native';
import MasterLayout from '../../Layout/MasterLayout';

const CustomModal = ({visible, handler, content}) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={handler}>
      <MasterLayout>
        <>
          <Text onPress={handler} style={styles.back}>
            {`<< Back`}
          </Text>
          {content}
        </>
      </MasterLayout>
    </Modal>
  );
};

const styles = StyleSheet.create({
  back: {
    marginLeft: 10,
    fontSize: 18,
  },
});
export default CustomModal;
