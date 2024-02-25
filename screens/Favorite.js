import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import TeamCard from '../components/TeamCard';
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../styles/Colors';

const Favorite = ({ navigation }) => {
  const matches = useSelector(state => state.Favorites);


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Favorites</Text>
      <FlatList
        data={matches}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TeamCard 
          match={item} 
          viewDetails={() =>
            navigation.navigate('MatchDetails',{
              Id: item.id
            })
          }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.background,
  },
  heading: {
    color: Colors.textWhite,
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    color: Colors.textWhite,
  },
  picker: {
    height: 50,
    width: 150,
    color: Colors.textWhite,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    color: 'black', 
    backgroundColor: 'white',
  },
});


export default Favorite;
