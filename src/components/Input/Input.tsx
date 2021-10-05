/**
 * @author: Valentina D'Orazio
 * year: 2021
 */
import React from 'react';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TextInput, View, StyleSheet} from 'react-native';
import theme from '../Theme';
interface InputProps {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  icon?: IconDefinition | undefined;
  secure: boolean;
}
/**
 * Input text
 * @param state -- input value
 * @param setState -- to manage input value
 * @param placeholder -- input placeholder
 * @param icon -- input text icon
 * @param secure - set it if you need a password input
 * @returns 
 */
export default function Input({
  state,
  setState,
  placeholder,
  icon,
  secure,
}: InputProps) {
  return (
    <View style={inputStyles(theme.colors.darkGrey).inputContainer}>
      {icon && (
        <FontAwesomeIcon
          style={inputStyles(theme.colors.darkGrey).icon}
          icon={icon}
        />
      )}
      <TextInput
        secureTextEntry={secure}
        onChangeText={value => setState(value)}
        value={state}
        placeholder={placeholder}
        style={inputStyles(theme.colors.darkGrey).input}
      />
    </View>
  );
}

const inputStyles = (color: any) =>
  StyleSheet.create({
    inputContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      borderBottomWidth: 1,
      borderColor: `${color}`,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    icon: {
      top: 8,
      flex: 1,
      color: `${color}`,
    },
    input: {
      flex: 1,
      color: `${color}`,
      fontStyle: 'italic',
    },
  });
