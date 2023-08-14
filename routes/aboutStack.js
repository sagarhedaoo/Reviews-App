import { createStackNavigator } from "react-navigation-stack";

import About from "../screens/about";

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      title: "About my App",
      //   headerStyle: { backgroundColor: "#eee" },
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "red",
    headerStyle: { backgroundColor: "#eee" },
  },
});

export default AboutStack;
