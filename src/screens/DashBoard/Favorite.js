import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {useAppDispatch} from '../../redux/store';
import {useSelector} from 'react-redux';
import {toggleFavorite} from '../../redux/slice/favoritesSlice';
import Header from '../../components/atoms/Header';
import EventListData from '../../components/molecules/EventListData';

const Favorite = () => {
  const favoriteEvents = useSelector(state => state?.favorites?.favoriteEvents);
  const loginData = useSelector(state => state?.auth?.data?.user);
  const dispatch = useAppDispatch();

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
      <EventListData
        data={favoriteEvents}
        favoriteEvents={favoriteEvents}
        handleFavoriteToggle={handleFavoriteToggle}
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
});
