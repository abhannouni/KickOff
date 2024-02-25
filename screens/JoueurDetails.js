import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../styles/Colors';


const JoueurDetails = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatarImage}
            source={{ uri: 'https://static.footballtransfers.com/resources/players/506100.png' }}
          />
          <View style={{ marginLeft: 8 }}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Jude Bellingham</Text>
            <Text style={{ color: '#ccc' }}>Real Madrid</Text>
          </View>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={{ color: 'white', fontSize: 16 }}>20 years</Text>
        </View>
      </View>
      <View style={styles.cardContent}>
        <View style={styles.skillPotentialContainer}>
          <View style={styles.skillPotentialItem}>
            <Text style={{ color: '#ccc' }}>Skill</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginRight: 8 }}>81.0</Text>
              <View style={[styles.badgeContainer, { padding: 4 }]}>
                <Text style={{ color: 'white' }}>Good</Text>
              </View>
            </View>
          </View>
          <View style={styles.skillPotentialItem}>
            <Text style={{ color: '#ccc' }}>Potential</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginRight: 8 }}>98.4</Text>
              <View style={[styles.badgeContainer, { padding: 4 }]}>
                <Text style={{ color: 'white' }}>Good</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.cardFooter}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={styles.teamAvatarContainer}>
            <Image
              style={styles.teamAvatarImage}
              source={{ uri: 'https://static.footballtransfers.com/resources/teams/48.png' }}
            />
            <Text style={{ color: 'white', marginLeft: 8 }}>M (C), DM (RL)</Text>
          </View>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>€140.1M</Text>
        </View>
      </View>
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

export default JoueurDetails;
