import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../styles/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatchDetailsThunk } from '../redux/thunks/dataThunks';
import { format, isPast } from 'date-fns';

const MatchDetails = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { Id } = route.params;
  const logo = (id) => `https://api.sofascore.app/api/v1/team/${id}/image`;
  const matchDetails = useSelector((state) => state.matchDetails.event);

  useEffect(() => {
    dispatch(fetchMatchDetailsThunk(Id));
  }, []);

  const formattedDate = isPast(new Date(matchDetails.startTimestamp * 1000))
    ? 'Ended'
    : format(new Date(matchDetails.startTimestamp * 1000), 'MMMM dd, yyyy HH:mm');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.footerBottom} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-sharp" size={30} color="white" />
      </TouchableOpacity>
      {matchDetails && (
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.contentRow}>
              <View style={styles.teamContainer}>
                <Image source={{ uri: logo(matchDetails.homeTeam.id) }} style={styles.teamLogo} />
                <Text style={styles.teamScore}>{matchDetails.homeScore.current}</Text>
              </View>
              <Text style={styles.time}>{formattedDate}</Text>
              <View style={styles.teamContainer}>
                <Text style={styles.teamScore}>{matchDetails.awayScore.current}</Text>
                <Image source={{ uri: logo(matchDetails.awayTeam.id) }} style={styles.teamLogo} />
              </View>
            </View>
            <View style={styles.contentDis}>
              <Text style={styles.matchEvent}>
                <Ionicons name="football" size={15} color="#00d800c2" /> {matchDetails.homeTeam.name} '{' '}
                {matchDetails.currentPeriodStartTimestamp}
              </Text>
              <Text style={styles.matchEvent}>
                <Ionicons name="football" size={15} color="#00d800c2" /> {matchDetails.awayTeam.name} '{' '}
                {matchDetails.currentPeriodStartTimestamp}
              </Text>
            </View>
            <View style={styles.contentDis}>
              <Text style={styles.matchEvent}>
                <MaterialCommunityIcons name="card" size={14} color="yellow" /> {matchDetails.homeTeam.name}{' '}
                {matchDetails.currentPeriodStartTimestamp}
              </Text>
              <Text style={styles.matchEvent}>
                <MaterialCommunityIcons name="card" size={14} color="red" /> {matchDetails.awayTeam.name}{' '}
                {matchDetails.currentPeriodStartTimestamp}
              </Text>
            </View>
            <Text style={styles.detailsText}>Status: {matchDetails.status.description}</Text>
            {matchDetails.status.code === 100 && (
              <>
                <Text style={styles.detailsText}>Goal Scorers:</Text>
                <View style={styles.goalScorers}>
                  {matchDetails?.incidents
                    .filter((incident) => incident.type === 'goal')
                    .map((goal) => (
                      <Text key={goal.id} style={styles.goalScorerText}>
                        {goal.team.name} - {goal.player.name} ({goal.time}')
                      </Text>
                    ))}
                </View>
              </>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.background,
  },
  footerBottom: {
    backgroundColor: Colors.cardHeader,
    marginTop: 20,
    borderRadius: 50,
    height: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  card: {
    marginTop: 20,
    width: '100%',
    height: 350,
    backgroundColor: Colors.cardHeader,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    elevation: 3,
  },
  cardContent: {
    padding: 10,
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamLogo: {
    width: 70,
    height: 70,
    borderRadius: 100,
    margin: 5,
  },
  teamScore: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'green',
  },
  contentDis: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  matchEvent: {
    fontWeight: '300',
    fontSize: 12,
  },
  goalScorers: {
    marginTop: 10,
  },
  goalScorerText: {
    fontSize: 14,
    color: 'white',
  },
  detailsText: {
    fontSize: 14,
    color: 'white',
    marginTop: 10,
  },
});

export default MatchDetails;
