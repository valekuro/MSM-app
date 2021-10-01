/**
 * author: Valentina D'Orazio
 * year: 2021
 */
import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import MyText from '../MyText';
import PersonalizedButton from '../PersonalizedButton';
import TapIcons from '../TapIcons';
import theme from '../Theme';
import {faHeart as fullHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as emptyHeart} from '@fortawesome/free-regular-svg-icons';
import {useAppDispatch} from '../../store/hook';
import {addElement} from '../../reducers/RedList';

/**
 * item details component
 * @param data -- data referred to a single item
 * @returns
 */
export default function ItemDetails(data: Array<any>) {
  const itemData: Array<any> = data.route.params.params;
  const [isTapped, setIsTapped] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  return (
    <View style={{flex: 1, justifyContent: 'space-evenly'}}>
      <View style={itemDetailsStyles.imageItemDetailsContainer}>
        <Image
          source={itemData.image}
          style={itemDetailsStyles.imageItemDetails}
        />
        <TapIcons
          fullIcon={fullHeart}
          emptyIcon={emptyHeart}
          isTapped={isTapped}
          onPress={() => setIsTapped(!isTapped)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <MyText children={`€ ${itemData.prezzo}`} />
        <PersonalizedButton
          label={'+ Aggiungi alla lista'}
          onPress={() => dispatch(addElement(itemData))}
          disabled={false}
          width={200}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'column',
          margin: 20,
        }}>
        <MyText children={'Informazioni Generali:'} />
        <MyText children={itemData.descrizione} />
      </View>
    </View>
  );
}

const itemDetailsStyles = StyleSheet.create({
  imageItemDetails: {
    width: 250,
    height: 200,
  },
  imageItemDetailsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 8,
    margin: 5,
    backgroundColor: theme.colors.white,
  },
});
