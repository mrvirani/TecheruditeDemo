import {StyleSheet, Text, FlatList, SafeAreaView, View} from 'react-native';
import React from 'react';
import {useAppDispatch} from '../../redux/store';
import EventCard from '../../components/molecules/EventCard';
import {useSelector} from 'react-redux';
import {toggleFavorite} from '../../redux/slice/favoritesSlice';
import Header from '../../components/atoms/Header';

const Favorite = () => {
  const favoriteEvents = useSelector(state => state.favorites.favoriteEvents);
  const dispatch = useAppDispatch();

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
      <Header name="Renzo" subtitle="Are you ready to dance?" />
      <FlatList
        data={favoriteEvents}
        keyExtractor={(item, index) => `${item?.event_name}-${index}`}
        renderItem={({item}) => (
          <EventCard
            event={item}
            isFavorite={true}
            onToggleFavorite={handleFavoriteToggle}
          />
        )}
        contentContainerStyle={{flexGrow: 1, paddingBottom: 120}}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={emptyScreen}
      />
    </SafeAreaView>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(242, 242, 242, 1)',
  },
  emptyScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: 'gray',
  },
});
