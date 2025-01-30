import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const initialState = {
  favoriteEvents: [],
};

export const eventDataApi = createApi({
  reducerPath: 'eventDataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://3.7.81.243/projects/plie-api/public/api',
    prepareHeaders: (headers, { getState }) => {
      // Optionally, add authentication headers here
      return headers;
    },
  }),
  endpoints: (builder) => ({
    eventData: builder.query({
      query: (credentials) => ({
        url: '/events-listing',
        method: 'POST',
        body: credentials,
      }),
      // Add a custom onQueryStarted to log request and response
      // onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
      //   console.log('API Request Started');
      //   try {
      //     const result = await queryFulfilled; // Wait for the query to complete
      //     console.log('API Response:', result); // Log the response
      //   } catch (err) {
      //     console.error('API Request Failed:', err); // Log any error
      //   }
      // },

      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const result = await queryFulfilled; // Wait for the query to complete
          // After fetching data, dispatch toggleFavorite if any favorites exist
          result.data.forEach((event) => {
            const isFavorite = store.getState().favorites.favoriteEvents.some(
              (favEvent) => favEvent.event_name === event.event_name
            );
            if (isFavorite) {
              dispatch(toggleFavorite(event)); // Toggle to mark favorite
            }
          });
        } catch (err) {
          console.error('API Request Failed:', err);
        }
      },
      
    }),
  }),
});

export const { useEventDataQuery } = eventDataApi;
