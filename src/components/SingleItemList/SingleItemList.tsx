/**
 * author: Valentina D'Orazio
 * year: 2021
 */
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  GestureResponderEvent,
} from 'react-native';
import {faShoppingCart, faTasks} from '@fortawesome/free-solid-svg-icons';
import theme from '../Theme';
import MyText from '../MyText';
import TapIcons from '../TapIcons';
interface SingleItemMenuListProps {
  label?: string;
  startIconAdornment?: IconDefinition | undefined;
  startImageAdornment?: any | undefined;
  data: string | undefined;
  otherData?: string;
  arrowIcon?: IconDefinition | undefined;
  secondaryIcon?: IconDefinition | undefined;
  colorAdornment?: string;
  cartIconVisibility?: boolean;
  textUnderArrow?: string;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
  onPressSecondaryIcon?:
    | ((event: GestureResponderEvent) => void)
    | null
    | undefined;
}
/**
 *  the component manages the single list's item.
 * @param label -- words on the left side in gray
 * @param data -- other data on the left sie in black
 * @param otherData -- word under data in black
 * @param arrowIcon -- arrow icon (or another icon) in the right side
 * @param startIconAdornment -- instead of label or image you could need a fontawesome icon in the left side
 * @param colorAdornment -- icon color
 * @param startImageAdornment -- instead of fontawesome icon or label you could need an image in the left side
 * @param cartIconVisibility -- icon cart visibility
 * @param onPress -- event
 * @param textUnderArrow -- if you want a word under the arrow (or other) icon on the right
 * @param secondaryIcon
 * @param onPressSecondaryIcon
 * @returns
 */
export default function SingleItemList({
  label,
  data,
  otherData,
  arrowIcon,
  startIconAdornment,
  colorAdornment,
  startImageAdornment,
  cartIconVisibility,
  textUnderArrow,
  secondaryIcon,
  onPressSecondaryIcon,
  onPress,
}: SingleItemMenuListProps) {
  const [isTapped, setIsTapped] = useState<boolean>(false);

  return (
    <Pressable onPress={onPress}>
      <View style={singleItemMenuListStyle.singleItemMenuListContainer}>
        {label && (
          <Text style={singleItemMenuListStyle.labelStyle}>{label} </Text>
        )}
        {startIconAdornment && (
          <View style={singleItemMenuListStyle.labelStyle}>
            <FontAwesomeIcon
              icon={startIconAdornment}
              style={iconLabelStyle(colorAdornment).iconStyle}
            />
          </View>
        )}
        {startImageAdornment && (
          <Image
            source={startImageAdornment}
            style={singleItemMenuListStyle.imageAdornmentStyle}
          />
        )}
        <View style={{flex: 2, flexDirection: 'column'}}>
          <MyText children={data} />
          {otherData ? <MyText children={otherData} /> : null}
        </View>
        {cartIconVisibility && (
          <View style={{flex: 1}}>
            <TapIcons
              fullIcon={faTasks}
              emptyIcon={faShoppingCart}
              isTapped={isTapped}
              onPress={() => setIsTapped(!isTapped)}
            />
          </View>
        )}
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          {textUnderArrow ? <MyText children={textUnderArrow} /> : null}

          {secondaryIcon && (
            <View style={{marginRight: 80}}>
              <TapIcons
                fullIcon={secondaryIcon}
                emptyIcon={secondaryIcon}
                isTapped={true}
                onPress={onPressSecondaryIcon}
              />
            </View>
          )}
          {arrowIcon && (
            <TapIcons
              fullIcon={arrowIcon}
              emptyIcon={arrowIcon}
              isTapped={true}
              onPress={onPress}
            />
          )}
        </View>
      </View>
    </Pressable>
  );
}

const singleItemMenuListStyle = StyleSheet.create({
  singleItemMenuListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'justify',
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: `${theme.colors.lightGrey}`,
  },
  labelStyle: {
    flex: 1,
    alignSelf: 'flex-start',
    color: `${theme.colors.darkGrey}`,
  },
  imageAdornmentStyle: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 50,
  },
  dataStyle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
});

const iconLabelStyle = (colorAdornment?: string) =>
  StyleSheet.create({
    iconStyle: {
      backgroundColor: colorAdornment,
      color: theme.colors.white,
      padding: 10,
      borderRadius: 3,
      borderColor: colorAdornment,
      borderWidth: 3,
    },
  });
