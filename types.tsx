/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export enum SCREEN_NAME {
  main = 'app.screen.main',
  search = 'app.screen.search',
}

export type MainStackParamList = {
  [SCREEN_NAME.main]: undefined;
  [SCREEN_NAME.search]: undefined;
};
