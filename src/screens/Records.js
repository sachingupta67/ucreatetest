import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {getDetails} from '../redux/actions';
const Records = props => {
  const dispatch = useDispatch();
  useEffect(props => {
    dispatch(getDetails());
  }, []);
  const {data} = props;
  console.log('data====>', data);
  return (
    <View>
      <Text style={styles.heading}>Dogs Records</Text>
      {data.length ? (
        <View style={styles.data}>
          <Text>Name</Text>
          <Text>Breed</Text>
          <Text>Action</Text>
        </View>
      ) : (
        <Text style={styles.records}>No Records Found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 23,
    marginVertical: 10,
    textAlign: 'center',
  },
  records: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
  data: {flexDirection: 'row', justifyContent: 'space-around'},
});
const mapStateToProps = ({details}) => {
  return {data: details.data};
};
export default connect(
  mapStateToProps,
  {getDetails},
)(Records);
