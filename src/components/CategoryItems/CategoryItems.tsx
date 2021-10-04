/**
 * author: Valentina D'Orazio
 * year: 2021
 */
import React, {useState} from 'react';
import SingleItemList from '../SingleItemList';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {View, StyleSheet} from 'react-native';
import EmptySection from '../EmptySection';
import {useNavigation} from '@react-navigation/native';
import theme from '../Theme';
import {isEmpty} from 'lodash';

/**
 * The component manages items list for each category
 * @param data -- items information
 * @returns
 */
export default function CategoryItems(data: Array<any>) {
  const itemData: Array<any> = data.route.params.params;
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      {Object.keys(itemData[0]).length !== 0 ? (
        itemData.map((el: any, key: number) => {
          return (
            <View key={key}>
              <SingleItemList
                key={key}
                startImageAdornment={el.image}
                data={el.title}
                otherData={`€ ${el.prezzo}`}
                arrowIcon={faChevronRight}
                cartIconVisibility={true}
                onPress={() =>
                  navigation.navigate('Dettagli', {
                    screen: 'Catalog',
                    params: el,
                  })
                }
              />
            </View>
          );
        })
      ) : (
        <View style={categoryItemsStyles.categoryItemsContainer}>
          <EmptySection
            icon={require('../../assets/images/empty.png')}
            iconLabel={`Categoria momentaneamente vuota.\nRiprova più tardi`}
            showSecondaryButton={false}
            dimension={220}
          />
        </View>
      )}
    </View>
  );
}

const categoryItemsStyles = StyleSheet.create({
  categoryItemsContainer: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    backgroundColor: `${theme.colors.white}`,
  },
});
