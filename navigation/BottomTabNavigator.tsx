/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import * as React from "react";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import HomeDessertScreen from "../screens/HomeDessertScreen";
import SearchScreen from "../screens/SearchScreen";
import UserScreen from "../screens/UserScreen";
import DeliveryScreen from "../screens/DeliveryScreen";
import CreateScreen from "../screens/CreateScreen";
import {
  BottomTabParamList,
  HomeParamList,
  SCREEN_NAME,
  DeliveryParamList,
  SearchParamList,
  UserParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName={SCREEN_NAME.homeStack}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarInactiveTintColor: Colors[colorScheme].inactive,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme].background,
          borderTopWidth: 0,
        },
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name={SCREEN_NAME.homeStack}
        component={HomeNavigator}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home-work" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={SCREEN_NAME.searchStack}
        component={SearchNavigator}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={SCREEN_NAME.userStack}
        component={UserNavigator}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="supervised-user-circle" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={SCREEN_NAME.deliveryStack}
        component={DeliveryNavigator}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="delivery-dining" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>["name"];
  color: string;
}) {
  return <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen
        name={SCREEN_NAME.homeDessert}
        component={HomeDessertScreen}
        options={{ headerTitle: "Home screen" }}
      />
      <HomeStack.Screen
        name={SCREEN_NAME.home}
        component={HomeScreen}
        options={{ headerTitle: "Home screen" }}
      />
      <HomeStack.Screen
        name={SCREEN_NAME.create}
        component={CreateScreen}
        options={{ headerTitle: "Create dessert screen" }}
      />
    </HomeStack.Navigator>
  );
}
const SearchStack = createStackNavigator<SearchParamList>();

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name={SCREEN_NAME.search}
        component={SearchScreen}
        options={{ headerTitle: "Search screen" }}
      />
    </SearchStack.Navigator>
  );
}

const UserStack = createStackNavigator<UserParamList>();

function UserNavigator() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen
        name={SCREEN_NAME.user}
        component={UserScreen}
        options={{ headerTitle: "User Screen" }}
      />
    </UserStack.Navigator>
  );
}

const DeliveryStack = createStackNavigator<DeliveryParamList>();

function DeliveryNavigator() {
  return (
    <DeliveryStack.Navigator>
      <DeliveryStack.Screen
        name={SCREEN_NAME.delivery}
        component={DeliveryScreen}
        options={{ headerTitle: "Delivery Screen" }}
      />
    </DeliveryStack.Navigator>
  );
}
