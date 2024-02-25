import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../styles/Colors';

const CustomButton = ({ textButton, handler }) => {
  return (
    <TouchableOpacity onPress={handler}>
      <View style={styles.btnAddToCart}>
        <Text style={styles.btnText}>{textButton}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnAddToCart: {
    borderRadius: 6,
    paddingVertical: 9,
    paddingHorizontal: 25,
    backgroundColor: Colors.lightOrange,
  },
  btnText: {
    fontSize: 19,
  },
});

export default CustomButton;
