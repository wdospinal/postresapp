/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';
import { SCREEN_NAME } from '../types';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        initialRouteName: '/home',
        screens: {
          [SCREEN_NAME.homeStack]: {
            screens: {
              [SCREEN_NAME.home]: 'home',
            },
          },
          [SCREEN_NAME.deliveryStack]: {
            screens: {
              [SCREEN_NAME.delivery]: 'delivery',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
