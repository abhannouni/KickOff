import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import {Picker} from '@react-native-picker/picker'; 
import TeamCard from '../components/TeamCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatchesThunk } from '../redux/thunks/dataThunks';
import Colors from '../styles/Colors';

const Matchs = ({ navigation }) => {
  const dispatch = useDispatch();
  // const [matchees, setMatchees] = useState([]);
  
  const loading = useSelector(state => state.loading);
  const matches = useSelector(state => state.matches);

  useEffect(() => {
    dispatch(fetchMatchesThunk('2024-02-24'));
  }, [dispatch]);

  const [selectedLeague, setSelectedLeague] = useState("All");

  const leagues = ['All', 'Premier League', 'La Liga', 'Bundesliga', 'Serie A', 'Ligue 1'];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Matchs</Text>

      {/* League Dropdown */}
      <View style={styles.dropdownContainer}>
        <Text style={styles.label}>Select League: </Text>
        <Picker
          selectedValue={selectedLeague}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedLeague(itemValue)}
        >
          {leagues.map(league => (
            <Picker.Item key={league} label={league} value={league} />
          ))}
        </Picker>
      </View>

      {/* Search Bar
      <TextInput
        style={styles.searchInput}
        placeholder="Search matches..."
        onChangeText={(text) => setSearchQuery(text)}

      /> */}

      {/* Loading */}
      {loading && <Text>Loading...</Text>}

      {/* Match List */}
      {matches.error && <Text>{matches.error}</Text>}

      {matches.length === 0 && <Text>No matches found</Text>} 

      <FlatList
        data={matches.events}
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


export default Matchs;
