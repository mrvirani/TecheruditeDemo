import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../components/atoms/Header';
import {useEventDataQuery} from '../../api/eventDataApi';
import {useAppDispatch} from '../../redux/store';
import {toggleFavorite} from '../../redux/slice/favoritesSlice';
import {useSelector} from 'react-redux';
import EventListData from '../../components/molecules/EventListData';

const Events = () => {
  const favoriteEvents = useSelector(state => state?.favorites?.favoriteEvents);
  const loginData = useSelector(state => state?.auth?.data?.user);
  const dispatch = useAppDispatch();

  console.log('auth', loginData);

  const {data: events, isLoading} = useEventDataQuery({});

  const handleFavoriteToggle = event => {
    dispatch(toggleFavorite(event));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Header
        name={loginData?.usr_username}
        subtitle="Are you ready to dance?"
      />
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <View style={styles.listData}>
          <EventListData
            data={events?.data?.events}
            favoriteEvents={favoriteEvents}
            handleFavoriteToggle={handleFavoriteToggle}
          />
        </View>
      )}
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
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
