import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {sortBookMarkList} from './src/components/utils/actions';

const HeaderSortLabel = (props) => {
  return (
    <Text
      style={{color: 'white', fontWeight: 'bold', padding: 10}}
      onPress={() => props.sortBookMarkList()}>
      Sort: {props.sort}
    </Text>
  );
};

const mapStateToProps = (state) => {
  const {sort} = state;
  return {
    sort: sort,
  };
};

const mapDispatchToProps = (dispatch) => ({
  sortBookMarkList: () => dispatch(sortBookMarkList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSortLabel);