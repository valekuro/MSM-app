/**
 * @author: Valentina D'Orazio
 * year: 2021
 */
import React, {useState, useEffect} from 'react';
import {buttonLayout} from '../StyleComponents/styles';
import {TouchableHighlight, Text} from 'react-native';
import theme from '../Theme';
interface PersonalizedButtonProps {
  label: string;
  onPress?: ((event: any) => void) | undefined;
  disabled: boolean;
  width?: number;
}
/**
 * Button component
 * @param label -- button label
 * @param onPress -- button event onPress
 * @param disabled -- set false if your button should be disabled
 * @param width -- button size (if you not set this value, there is a default value)
 * @returns
 */
export default function PersonalizedButton({
  label,
  onPress,
  disabled,
  width,
}: PersonalizedButtonProps) {
  const [textColor, setTextColor] = useState<string>(theme.colors.white);
  const [bgColor, setBgColor] = useState<string>(theme.colors.darkOrange);
  useEffect(() => {
    if (!disabled) {
      setTextColor(theme.colors.white);
      setBgColor(theme.colors.darkOrange);
    } else {
      setTextColor(theme.colors.lightGrey);
      setBgColor(theme.colors.white);
    }
  }, [disabled]);
  return (
    <TouchableHighlight
      style={buttonLayout(textColor, bgColor, width).but_layout}
      onPress={onPress}>
      <Text style={buttonLayout(textColor, bgColor).text_button}>{label}</Text>
    </TouchableHighlight>
  );
}
