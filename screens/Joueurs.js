import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../styles/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlayersThunk } from '../redux/thunks/dataThunks';
import { FlatList } from 'react-native-gesture-handler';
import PlayerCard from '../components/PlayerCard';



const Joueurs = ({ navigation }) => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.players);
  useEffect(() => {
    dispatch(fetchPlayersThunk());
  }, [dispatch]);
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.heading}>Joueurs</Text>
      <FlatList
        data={players.records}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <PlayerCard
            playerName={item.player_name}
            team={item.team_name}
            age={item.age}
            avatarUri={item.player_picture}
            viewDetails={() =>
              navigation.navigate('JoueurDetails',{
                item: item
              })
            }
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: Colors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    paddingTop: 16,
    paddingBottom: 16,
  },
  heading: {
    color: Colors.textWhite,
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.cardHeader,
    padding: 16,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  cardContent: {
    padding: 16,
  },
  skillPotentialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  skillPotentialItem: {
    flex: 1,
  },
  badgeContainer: {
    backgroundColor: Colors.badgeGood,
  },
  cardFooter: {
    backgroundColor: Colors.cardFooter,
    padding: 16,
  },
  teamAvatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  teamAvatarImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default Joueurs;
