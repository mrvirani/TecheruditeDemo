import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import matrics from '../../constants/matrics';

const EventCard = ({event, onToggleFavorite, isFavorite}) => {
  const {
    event_name,
    readable_from_date,
    readable_to_date,
    event_price_from,
    event_price_to,
    city,
    country,
    event_profile_img,
    keywords,
  } = event;

  const handleFavoriteToggle = () => {
    onToggleFavorite(event);
  };

  const formattedDate = readable_to_date
    ? `${readable_from_date} - ${readable_to_date}`
    : readable_from_date;

  const formattedPrice =
    event_price_from === event_price_to
      ? `€${event_price_from}`
      : `€${event_price_from} - €${event_price_to}`;

  return (
    <View style={styles.card}>
      <Image source={{uri: event_profile_img}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.eventName}>{event_name}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.date}>{formattedDate}</Text>
          <Text style={styles.location}>
            {city}, {country}
          </Text>
        </View>
        <Text style={styles.price}>{formattedPrice}</Text>
        <View style={styles.keywords}>
          {keywords.map((keyword, index) => (
            <View key={index} style={styles.keywordBadge}>
              <Text style={styles.keywordText}>{keyword}</Text>
            </View>
          ))}
        </View>
      </View>
      <TouchableOpacity style={{right: 10, top: 10, position: 'absolute'}}>
        <Image
          source={require('../../assets/Images/rightArrow.png')}
          style={{
            width: 18,
            height: 18,
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.actions}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/Images/share.png')}
            style={{
              width: 18,
              height: 18,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleFavoriteToggle}>
          <Image
            source={
              isFavorite
                ? require('../../assets/Images/greenHeart.png')
                : require('../../assets/Images/heart.png')
            }
            style={{
              width: 18,
              height: 18,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: matrics.vs(8),
    elevation: 8,
    gap: 8,
  },

  image: {
    width: matrics.vs(76),
    height: matrics.vs(76),
    borderRadius: 8,
  },
  details: {
    flex: 1,
  },
  eventName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: '#34A853',
  },
  price: {
    fontSize: 14,
    color: '#828282',
  },
  location: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
    right: -60,
  },
  keywords: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  keywordBadge: {
    backgroundColor: '#F5F7FC',
    borderRadius: 10,
    paddingHorizontal: matrics.s(8),
    paddingVertical: matrics.vs(4),
    marginRight: 5,
    marginBottom: 5,
  },
  keywordText: {
    fontSize: 12,
    color: '#181A1F',
  },
  actions: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    gap: 10,
  },
});

export default EventCard;
