/**
 * @author: Valentina D'Orazio
 * year: 2021
 */
import React from 'react';
import {Text} from 'react-native';
import theme from '../Theme';
interface MyTextProps {
  children: string;
}
/**
 * Personalized text component (to set a global font family and size)
 * @param children -- text 
 * @returns 
 */
export default function MyText({children}: MyTextProps) {
  return (
    <Text
      style={{fontFamily: 'Roboto-Regular', fontSize: theme.fonts.fontText}}>
      {children}
    </Text>
  );
}
