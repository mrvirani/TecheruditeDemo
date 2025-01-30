import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EventCard from '../../components/molecules/EventCard';
import Header from '../../components/atoms/Header';
import {useEventDataQuery} from '../../api/eventDataApi';
import {useAppDispatch} from '../../redux/store';
import {toggleFavorite} from '../../redux/slice/favoritesSlice';
import {useSelector} from 'react-redux';

const Events = () => {
  const favoriteEvents = useSelector(state => state.favorites.favoriteEvents);
  const loginData = useSelector(state=> state.auth.data.user)
  const dispatch = useAppDispatch();

  console.log("auth", loginData);
  
  const {data: events, error, isLoading} = useEventDataQuery({});

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const handleFavoriteToggle = event => {
    dispatch(toggleFavorite(event)); 
  };

   const emptyScreen = () => {
            return (
              <View style={styles.emptyScreen}>
                <Text style={styles.emptyText}>No data found</Text>
              </View>
            );
          };

  return (
    <SafeAreaView style={styles.container}>
      <Header name={loginData?.usr_username} subtitle="Are you ready to dance?" />
      <View style={styles.listData}>
        <FlatList
          data={events?.data?.events}
          keyExtractor={(item, index) => `${item.event_name}-${index}`}
          renderItem={({item}) => {
            console.log('ITEM DATA:', item);

            const isFavorite = favoriteEvents?.some(
              favEvent => favEvent.event_name === item.event_name,
            );

            return (
              <EventCard
                event={item}
                onToggleFavorite={handleFavoriteToggle}
                isFavorite={isFavorite}
              />
            );
          }}
          contentContainerStyle={{flex:1,paddingBottom: 120}}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={emptyScreen}
        />
      </View>
    </SafeAreaView>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(242, 242, 242, 1)',
  },
  listData: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
  },
  emptyScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText:{
    color:"gray"
  }
});
