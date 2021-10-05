/**
 * author: Valentina D'Orazio
 * year: 2021
 */
import React from 'react';
import {View} from 'react-native';
import {users} from '../../utils/data';
import SingleItemList from '../SingleItemList';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import theme from '../Theme';
/**
 * user informations list
 * @returns
 */
export default function UserInformationList() {
  //find user by email
  const findByEmail = (email: string) => {
    const loggedUserData = users.find(userItem => (userItem.email = email));
    return loggedUserData;
  };
  const hidePassword = (word: string) => {
    const wordLenght: number = word.length;
    let hideWord: string = '';
    for (let i = 0; i < wordLenght; i++) {
      hideWord = hideWord.concat('*');
    }
    return hideWord;
  };
  const dataPass = findByEmail('valentina.dorazio@example.com')
    ? hidePassword(findByEmail('valentina.dorazio@example.com').password)
    : '';

  return (
    <View style={{backgroundColor: `${theme.colors.white}`}}>
      <SingleItemList
        label={'Nome'}
        data={findByEmail('valentina.dorazio@example.com')?.nome}
        arrowIcon={faChevronRight}
        onPress={() => console.log('nome')}
      />
      <SingleItemList
        label={'E-mail'}
        data={findByEmail('valentina.dorazio@example.com')?.email}
        arrowIcon={faChevronRight}
        onPress={() => console.log('email')}
      />
      <SingleItemList
        label={'Password'}
        data={dataPass}
        arrowIcon={faChevronRight}
        onPress={() =>
          console.log(
            'La password è ',
            findByEmail('valentina.dorazio@example.com')?.password,
          )
        }
      />
    </View>
  );
}
