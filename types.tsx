/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
 export enum SCREEN_NAME {
  home = 'app.screen.home',
  search = 'app.screen.search',
  user = 'app.screen.user',
  delivery = 'app.screen.delivery',
}

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  [SCREEN_NAME.home]: undefined;
  [SCREEN_NAME.search]: undefined;
  [SCREEN_NAME.user]: undefined;
  [SCREEN_NAME.delivery]: undefined;
};

export type HomeParamList = {
  [SCREEN_NAME.home]: undefined;
};

export type SearchParamList = {
  [SCREEN_NAME.search]: undefined;
};

export type UserParamList = {
  [SCREEN_NAME.user]: undefined;
};

export type DeliveryParamList = {
  [SCREEN_NAME.delivery]: undefined;
};
