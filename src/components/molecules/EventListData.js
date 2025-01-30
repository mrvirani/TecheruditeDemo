// SharedFlatList.js (Create this new component)
import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import EventCard from './EventCard';

const EventListData = ({ data, favoriteEvents, handleFavoriteToggle }) => {

    const emptyScreen = () => {
        return (
            <View style={styles.emptyScreen}>
                <Text style={styles.emptyText}>No data found</Text>
            </View>
        );
    };

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => `${item?.event_name}-${index}`}
      renderItem={({ item }) => {
        const isFavorite = favoriteEvents?.some(
          (favEvent) => favEvent.event_name === item.event_name
        );

        return (
          <EventCard
            event={item}
            onToggleFavorite={handleFavoriteToggle}
            isFavorite={isFavorite} 
          />
        );
      }}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 120 }}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={emptyScreen}
    />
  );
};

const styles = StyleSheet.create({
    emptyScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        color: 'gray',
    },
});

export default EventListData;