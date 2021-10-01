/**
 * author: Valentina D'Orazio
 * year: 2021
 */
import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import SingleItemList from '../SingleItemList';
import {categories} from '../../utils/data';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import theme from '../Theme';

/**
 * This component returns the categories list.
 * @returns
 */
export default function Catalog() {
  const navigation = useNavigation();
  return (
    <ScrollView style={catalogStyles.catalogContainer}>
      {categories.map((category: any, key: number) => {
        return (
          <SingleItemList
            key={key}
            startImageAdornment={category.categoryImage}
            data={category.title}
            arrowIcon={faChevronRight}
            onPress={() =>
              navigation.navigate('Prodotti', {
                screen: 'Catalog',
                params: category.subCategories,
              })
            }
          />
        );
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
