import { NavigationContainer } from "@react-navigation/native"

import DrawerNavigator from "./Drawer"
import MainContainer from "./Tabs"

export default function NavPage() {
  return (
    <NavigationContainer>
        <MainContainer />
    </NavigationContainer>
  )
}