import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PlayerCard = ({ playerName, team, age, avatarUri, viewDetails }) => {
  return (
    <TouchableOpacity style={styles.cardHeader} onPress={viewDetails}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatarImage} source={{ uri: avatarUri }} />
        <View style={{ marginLeft: 8 }}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>{playerName}</Text>
          <Text style={{ color: '#ccc' }}>{team}</Text>
        </View>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>{age} years</Text>
      </View>
    </TouchableOpacity>
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

export default PlayerCard;
