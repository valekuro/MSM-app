import {faCamera} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Avatar from '../Avatar';
import UserInformationList from '../UserInformationList';
import theme from '../Theme';
import {userMenu} from '../../utils/data';
import SingleItemList from '../SingleItemList';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {spacerLayout} from '../StyleComponents/styles';
export default function User() {
  return (
    <View>
      <View style={userStyle.userContainer}>
        <Avatar
          url={require('../../assets/images/photo.png')}
          size={'s'}
          icon={faCamera}
        />
      </View>
      <UserInformationList />
      <View style={spacerLayout.spacerStyle}></View>
      <FlatList
        data={userMenu}
        renderItem={({item}) => (
          <SingleItemList
            data={item.title}
            startIconAdornment={item.icon}
            arrowIcon={faChevronRight}
            colorAdornment={item.iconColor}
            onPress={() => console.log('toDo')}
          />
        )}
        style={userStyle.listMenuItem}
      />
    </View>
  );
}

const userStyle = StyleSheet.create({
  userContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: `${theme.colors.white}`,
    borderBottomColor: `${theme.colors.lightGrey}`,
    borderBottomWidth: 2,
    padding: 8,
  },
  listMenuItem: {
    backgroundColor: `${theme.colors.white}`,
  },
});
