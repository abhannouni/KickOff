import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Colors from '../styles/Colors';
import { format } from 'date-fns';





const TeamCard = ({ match, viewDetails }) => {
  
  const logo = (id) => {
    return `https://api.sofascore.app/api/v1/team/${id}/image`;
  };

  const date = match.startTimestamp ? new Date(match.startTimestamp * 1000) : null;
  const formattedDate = date ? format(date, 'yyyy-MM-dd HH:mm:ss') : 'No Date';
  return (
    <TouchableOpacity style={styles.scoreboard} onPress={viewDetails}>
      <View style={styles.scoreboardContainer}>
        <View style={styles.scoreboardBasics}>
          <Text style={styles.label}></Text> 
          <Text style={styles.label}>{formattedDate}</Text>
      <Text style={styles.label}>{match.status.description}</Text>
        </View>

        <View style={styles.scoreboardTeams}>
          <View style={[styles.scoreboardTeam, styles.scoreboardTeamAlignRight]}>
            <View style={styles.scoreboardBadge}>
              <Image style={styles.teamBadge} source={{ uri: logo(match.homeTeam.id) }} />
            </View>
            <Text style={styles.scoreboardName}>{match.homeTeam.name}</Text>
          </View>

          <View style={styles.scoreboardResult}>
            <Text style={styles.scoreboardResultHome}>{match.homeScore.display}</Text>
            <Text style={styles.scoreboardResultSeparator}>:</Text>
            <Text style={styles.scoreboardResultHome}>{match.awayScore.display}</Text>
          </View>

          <View style={[styles.scoreboardTeam, styles.scoreboardTeamAlignLeft]}>
            <View style={styles.scoreboardBadge}>
              <Image style={styles.teamBadge} source={{ uri: logo(match.awayTeam.id) }} />
            </View>
            <Text style={styles.scoreboardName}>{match.awayTeam.name}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  scoreboard: {
    backgroundColor: Colors.cardHeader,
    marginBottom: 8,
    borderRadius: 4,
  },
  scoreboardContainer: {
    padding: 16,
  },
  scoreboardBasics: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 9,
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: 0.095,
    marginBottom: 4,
    color: Colors.textWhite,
  },
  textDanger: {
    color: Colors.textDanger,
  },
  scoreboardTeams: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  scoreboardTeam: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexGrow: 1,
  },
  scoreboardTeamAlignRight: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
  },
  scoreboardTeamAlignLeft: {
    justifyContent: 'flex-start',
  },
  scoreboardBadge: {
    width: 38,
    height: 38,
    marginLeft: 8,
    marginRight: 8,
  },
  teamBadge: {
    height: '100%',
  },
  scoreboardName: {
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    color: Colors.textWhite,
    width: 100,
    paddingStart: 25,
  },
  scoreboardResult: {
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreboardResultHome: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.textDanger,
  },
  scoreboardResultSeparator: {
    marginHorizontal: 8,
    fontSize: 26,
    color: Colors.textGray,
  },
});


export default TeamCard;
