/**
 * author: Valentina D'Orazio
 * year: 2021
 */
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import theme from '../Theme';

type avatarSizes = keyof typeof theme.avatarSizes;

interface AvatarProps {
  url: any;
  size: avatarSizes;
  icon?: any;
}
/**
 * User Avatar (three sizes available)
 * @param url -- user image url
 * @param size -- avatar size (s, l, xl)
 * @param icon -- icon under photo to click to change photo for example
 * @returns
 */
export default function Avatar({url, size, icon}: AvatarProps) {
  return (
    <View style={imageStyles(theme.avatarSizes[size]).avatarContainer}>
      <View>
        <Image
          source={url}
          style={imageStyles(theme.avatarSizes[size]).imageContainer}
        />
      </View>
      {icon ? (
        <View style={imageStyles(theme.avatarSizes[size]).iconStyle}>
          <FontAwesomeIcon icon={icon} />
        </View>
      ) : null}
    </View>
  );
}

const imageStyles = (size: number) =>
  StyleSheet.create({
    imageContainer: {
      borderRadius: 100,
      width: size,
      height: size,
    },
    iconStyle: {
      borderRadius: 100,
      padding: 4,
      borderWidth: 1,
      borderColor: 'red',
      width: 26,
      height: 26,
    },
    avatarContainer: {
      flexDirection: 'row',
      alignContent: 'flex-end',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
  });
