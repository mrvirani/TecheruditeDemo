import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favoriteEvents: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const event = action.payload;
      console.log('EVENT DATA IN SLICE::', action.payload);

      const isFavorite = state.favoriteEvents.some(
        favEvent => favEvent?.event_name === event?.event_name,
      );
      if (isFavorite) {
        state.favoriteEvents = state.favoriteEvents.filter(
          favEvent => favEvent.event_name !== event.event_name,
        );
      } else {
        state.favoriteEvents.push(event);
      }
    },
  },
});

export const {toggleFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;
