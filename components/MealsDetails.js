import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MealsDetails = ({duration , complexity , affordability}) => {
    return (
        <View>
          <View style={styles.content}>
          <Text style={styles.contentItem}>{duration} m</Text>
          <Text style={styles.contentItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.contentItem}>{affordability.toUpperCase()}</Text>
        </View>
        </View>
    )
}

export default MealsDetails


const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 16,
      },
      contentItem: {
        marginHorizontal: 16,
        fontSize: 12,
        fontWeight: 'bold',
      },
})