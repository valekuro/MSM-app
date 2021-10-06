/**
 * @author: Valentina D'Orazio
 * year: 2021
 */
import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import EmptySection from '../EmptySection';
import theme from '../Theme';
import {useNavigation} from '@react-navigation/native';
import {
  faMinus,
  faChevronRight,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import {isEmpty} from 'lodash';
import {useAppDispatch, useAppSelector} from '../../store/hook';
import SingleItemList from '../SingleItemList';
import TapIcons from '../TapIcons';
import {addElement, deleteElement, removeElement} from '../../reducers/RedList';
/**
 * WIP -- List section
 * @returns
 */
export default function List() {
  const listState: Array<object> = useAppSelector(state => state.RedList);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  return (
    <View style={listStyles.listContainer}>
      {Object.keys(listState.list).length !== 0 && (
        <SingleItemList
          startImageAdornment={require('../../assets/images/addCircle.png')}
          data={'Aggiungi prodotto alla lista'}
          arrowIcon={faChevronRight}
          cartIconVisibility={false}
          onPress={() => navigation.navigate('Catalogo')}
        />
      )}
      {Object.keys(listState.list).length !== 0 ? (
        listState.list.map((el: object, key: number) => {
          return (
            <View key={key}>
              <SingleItemList
                startImageAdornment={el.image}
                data={el.title}
                otherData={`quantità: ${el.quantita.toString()} \nprezzo: € ${
                  el.prezzo
                }`}
                arrowIcon={faMinus}
                cartIconVisibility={false}
                secondaryIcon={faPlus}
                onPressSecondaryIcon={() => dispatch(addElement(el))}
                onPress={() => dispatch(removeElement(el.title))}
              /*   onPressDelete={() => dispatch(deleteElement(el.title))}
                deleteIcon={faTrash} */
              />
            </View>
          );
        })
      ) : (
        <View style={listStyles.emptyListStyle}>
          <EmptySection
            icon={require('../../assets/images/list.png')}
            buttonLabel={'Crea Lista'}
            iconLabel={`Non è presente nessuna lista creata.\nScegli un'azione.`}
            dimension={220}
            primaryButtonDisabled={false}
            onPressPrimaryButton={() => navigation.navigate('Catalogo')}
            showSecondaryButton={true}
            secondaryButtonLabel={'Usa ultima lista bloccata'}
            secondaryButtonDisabled={true}
          />
        </View>
      )}
    </View>
  );
}

const listStyles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: `${theme.colors.white}`,
  },
  emptyListStyle: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: `${theme.colors.white}`,
  },
});
