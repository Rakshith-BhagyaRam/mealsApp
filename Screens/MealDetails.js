import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {MEALS} from '../Data/dummy-data';
import MealsDetails from '../components/MealsDetails';

const MealDetails = ({route}) => {
  const mealId = route.params.mealId;

  const displayMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{displayMeal.title}</Text>
        <Image source={{uri: displayMeal.imageUrl}} style={styles.image} />
        <MealsDetails
          duration={displayMeal.duration}
          complexity={displayMeal.complexity}
          affordability={displayMeal.affordability}
        />
        <Text>{displayMeal.ingredients}</Text>
        <Text>{displayMeal.steps}</Text>
      </View>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },

  image: {
    height: 200,
    width: '100%',
    borderRadius: 20,
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
