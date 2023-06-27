import {StatusBar, StyleSheet, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoriesScreens from './Screens/CategoriesScreens';
import MealsOverView from './Screens/MealsOverView';
import MealDetails from './Screens/MealDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Meals  Categories">
          <Stack.Screen name="Meals Categories" component={CategoriesScreens} />
          <Stack.Screen name="Meals Over View" component={MealsOverView} />
          <Stack.Screen name="Meals Details" component={MealDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
