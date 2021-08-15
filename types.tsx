/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
export enum SCREEN_NAME {
  home = "app.screen.home",
  homeDessert = "app.screen.homeDessert",
  detailDessert = "app.screen.detailDessert",
  homeStack = "app.stack.home",
  create = "app.screen.create",
  search = "app.screen.search",
  searchStack = "app.stack.search",
  user = "app.screen.user",
  userStack = "app.stack.user",
  delivery = "app.screen.delivery",
  deliveryStack = "app.stack.delivery",
}

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  [SCREEN_NAME.homeStack]: undefined;
  [SCREEN_NAME.searchStack]: undefined;
  [SCREEN_NAME.userStack]: undefined;
  [SCREEN_NAME.deliveryStack]: undefined;
};

export type HomeParamList = {
  [SCREEN_NAME.home]: undefined;
  [SCREEN_NAME.homeDessert]: undefined;
  [SCREEN_NAME.detailDessert]: { dessert: Dessert };
  [SCREEN_NAME.create]: undefined;
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

export type Dessert = {
  id: number;
  name: string;
  type: Array<CategoryName>;
  uri: string;
  price: string;
  description?: string;
};

export type Category = {
  id: number;
  name: string;
  type: CategoryName;
};

export enum CategoryName {
  general = "general",
  fruit = "fruit",
  artificial = "artificial",
}
