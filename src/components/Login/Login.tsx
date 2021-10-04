/**
 * author: Valentina D'Orazio
 * year: 2021
 */
import React, {useState} from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import Input from '../Input';
import theme from '../Theme';
import PersonalizedButton from '../PersonalizedButton';
import {useNavigation} from '@react-navigation/native';
import MyText from '../MyText';
import TapIcons from '../TapIcons';
import {faDoorOpen} from '@fortawesome/free-solid-svg-icons';
/**
 * Login section
 * @returns 
 */
export default function Login() {
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isTapped, setIsTapped] = useState<boolean>(false);
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../assets/images/spesa1.png')}
      style={{flex: 1, width: '100%', height: '100%', zIndex: 0}}
      /* resizeMode="cover" */
    >
      <View style={loginStyles(theme.colors.darkGrey).lPageContainer}>
        <Text style={loginStyles(theme.colors.darkGrey).titleStyle}>
          MyStudentMarket
        </Text>
        <View style={loginStyles(theme.colors.darkGrey).loginContainer}>
          <Input
            state={user}
            setState={setUser}
            placeholder={'Email'}
            icon={faEnvelope}
            secure={false}
          />
          <Input
            state={password}
            setState={setPassword}
            placeholder={'Password'}
            icon={faLock}
            secure={true}
          />
          <View style={{marginTop: 45}}>
            <PersonalizedButton
              label={'Registrati'}
              onPress={() => navigation.navigate('Settings')}
              disabled={false}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <MyText children={'Sei già registrato? Accedi'} />
          <TapIcons
            fullIcon={faDoorOpen}
            emptyIcon={faDoorOpen}
            isTapped={isTapped}
            onPress={() => setIsTapped(!isTapped)}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const loginStyles = (color: string) =>
  StyleSheet.create({
    loginContainer: {
      flexDirection: 'column',
      borderColor: `${color}`,
      borderStyle: 'solid',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      alignSelf: 'center',
      borderRadius: 10,
      width: 380,
      padding: 25,
    },
    lPageContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      alignContent: 'space-between',
      justifyContent: 'space-between',
    },
    titleStyle: {
      fontFamily: 'BonheurRoyale-Regular',
      fontSize: 50,
      textAlign: 'center',
      padding: 10,
    },
  });
