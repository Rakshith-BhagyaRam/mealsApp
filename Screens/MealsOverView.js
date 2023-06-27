import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {MEALS} from '../Data/dummy-data';
import MealItem from '../components/MealItem';

const MealsOverView = ({route}) => {
  const catID = route.params.categoryID;

  const displayMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  const renderMealItem = itemData => {
    const item = itemData.item;

    const mealItemProp = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    return <MealItem {...mealItemProp} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padd: 18,
  },
});
