/**
 * @author: Valentina D'Orazio
 * year: 2021
 */
import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import SingleItemList from '../SingleItemList';
import {categories} from '../../utils/data';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import theme from '../Theme';
import {useAppSelector} from '../../store/hook';

/**
 * This component returns the categories list.
 * @returns
 */
export default function Catalog() {
  const navigation = useNavigation();
  let listFavState: Array<object> = [];
  listFavState = useAppSelector(state => state.FavouriteList);
  const [state, setState] = useState<boolean>(false);
  useEffect(() => {
    listFavState.list.length !== 0 ? setState(true) : setState(false);
  }, [listFavState]);
  return (
    <ScrollView style={catalogStyles.catalogContainer}>
      {categories.map((category: any, key: number) => {
        if (category.title === 'Preferiti') {
          return (
            state && (
              <SingleItemList
                key={key}
                startImageAdornment={category.categoryImage}
                data={category.title}
                arrowIcon={faChevronRight}
                onPress={() =>
                  navigation.navigate('Prodotti', {
                    screen: 'Catalogo',
                    params: listFavState.list,
                  })
                }
              />
            )
          );
        } else {
          return (
            <SingleItemList
              key={key}
              startImageAdornment={category.categoryImage}
              data={category.title}
              arrowIcon={faChevronRight}
              onPress={() =>
                navigation.navigate('Prodotti', {
                  screen: 'Catalogo',
                  params: category.subCategories,
                })
              }
            />
          );
        }
      })}
    </ScrollView>
  );
}
const catalogStyles = StyleSheet.create({
  catalogContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
  },
});
