import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DividerWithText = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',     // Horizontal layout
    alignItems: 'center',     // Center align items vertically
    marginVertical: 16,       // Spacing above and below the divider
  },
  line: {
    flex: 1,                  // Makes the line fill the available space
    height: 2,
    backgroundColor: '#F4F4F6',
  },
  text: {
    marginHorizontal: 8,      // Spacing on either side of the text
    color: '#7D8A95',            // Text color
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default DividerWithText;
