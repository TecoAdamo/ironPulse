import { Platform } from "react-native";
import { useTheme } from "native-base";
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import Ionicons from '@expo/vector-icons/Ionicons';

import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";
import { History } from "@screens/History";
import { Exercise } from "@screens/Exercise";


type AppRoutes = {
    home: undefined;
    history: undefined;
    profile: undefined;
    exercise: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
    const { sizes, colors } = useTheme()

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.green[500],
                tabBarInactiveTintColor: colors.gray[200],
                tabBarStyle: {
                    backgroundColor: colors.gray[600],
                    borderTopWidth: 0,
                },
            }}
        >

            <Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" size={24} color={color} />
                    ),
                }}
            />
            <Screen
                name="history"
                component={History}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="reload" size={24} color={color} />
                    ),
                }}
            />
            <Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person" size={24} color={color} />
                    ),
                }}
            />
            <Screen
                name="exercise"
                component={Exercise}
                options={{ tabBarButton: () => null }}
            />
        </Navigator>
    )
}