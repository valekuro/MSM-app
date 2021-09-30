import {StyleSheet} from 'react-native';
import theme from '../Theme';
export const buttonLayout = (color: string, bgColor: string, width?: number) =>
  StyleSheet.create({
    but_layout: {
      borderRadius: 10,
      padding: 10,
      width: width ? width : 340,
      backgroundColor: `${bgColor}`,
      borderColor: theme.colors.lightGrey,
      borderWidth: 1,
    },
    text_button: {
      color: `${color}`,
      textAlign: 'center',
      fontSize: 18,
      fontFamily: 'Roboto-Regular',
    },
  });

export const spacerLayout = StyleSheet.create({
  spacerStyle: {
    width: 35,
    height: 35,
  },
});
