/**
 * @author: Valentina D'Orazio
 * year: 2021
 */
import React from 'react';
import {View} from 'react-native';
import SingleItemList from '../SingleItemList';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import theme from '../Theme';
import {useAppSelector} from '../../store/hook';

/**
 * user informations list
 * @returns
 */
export default function UserInformationList() {
  const userLogged: Array<object> = useAppSelector(state => state);

  const hidePassword = (word: string) => {
    const wordLenght: number = word.length;
    let hideWord: string = '';
    for (let i = 0; i < wordLenght; i++) {
      hideWord = hideWord.concat('*');
    }
    return hideWord;
  };
  const dataPass = userLogged.UserManage.user.password
    ? hidePassword(userLogged.UserManage.user.password)
    : '';
  return (
    <View style={{backgroundColor: `${theme.colors.white}`}}>
      <SingleItemList
        label={'Nome'}
        data={userLogged.UserManage.user.name}
        arrowIcon={faChevronRight}
        onPress={() => console.log('nome')}
      />
      <SingleItemList
        label={'E-mail'}
        data={userLogged.UserManage.user.email}
        arrowIcon={faChevronRight}
        onPress={() => console.log('email')}
      />
      <SingleItemList
        label={'Password'}
        data={dataPass}
        arrowIcon={faChevronRight}
        onPress={() =>
          console.log('La password è ', userLogged.UserManage.user.password)
        }
      />
    </View>
  );
}
