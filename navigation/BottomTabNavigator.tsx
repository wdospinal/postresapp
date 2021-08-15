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
import SearchScreen from "../screens/SearchScreen";
import UserScreen from "../screens/UserScreen";
import DeliveryScreen from "../screens/DeliveryScreen";
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
      initialRouteName={SCREEN_NAME.home}
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        inactiveTintColor: Colors[colorScheme].inactive,
        style: {
          backgroundColor: Colors[colorScheme].background,
          borderTopWidth: 0,
        },
      }}
    >
      <BottomTab.Screen
        name={SCREEN_NAME.home}
        component={HomeNavigator}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home-work" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={SCREEN_NAME.search}
        component={SearchNavigator}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="search" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={SCREEN_NAME.user}
        component={UserNavigator}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="supervised-user-circle" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={SCREEN_NAME.delivery}
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
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={SCREEN_NAME.home}
        component={HomeScreen}
        options={{ headerTitle: "Home screen" }}
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
        options={{ headerTitle: "Tab Two Title" }}
      />
    </DeliveryStack.Navigator>
  );
}
