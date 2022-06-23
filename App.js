import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Bus132 from './132-1';
import List132 from './132-2';
import Bus133 from './133-1';
import List133 from './133-2';
import Bus172 from './172-1';
import List172 from './172-2';
import Bus9025A from './9025A-1';
import List9025A from './9025A-2';
import First from './firstpage';
import Second from './second';
import Lake from './lake';
import Gym from './gym';
import Backdoor from './backdoor';
import Library from './library';
import Sg from './sg';
import Frontdoor from './frontdoor';
import Bus173 from './173-1';
import List173 from './173-2';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={First} />
        <Stack.Screen name="Second" component={Second} />
        <Stack.Screen name="Bus133" component={Bus133} />
        <Stack.Screen name="List133" component={List133} />
        <Stack.Screen name="Bus172" component={Bus172} />
        <Stack.Screen name="List172" component={List172} />
        <Stack.Screen name="Bus132" component={Bus132} />
        <Stack.Screen name="List132" component={List132} />
        <Stack.Screen name="Bus9025A" component={Bus9025A} />
        <Stack.Screen name="List9025A" component={List9025A} />
        <Stack.Screen name="Backdoor" component={Backdoor} />
        <Stack.Screen name="Gym" component={Gym} />
        <Stack.Screen name="Lake" component={Lake} />
        <Stack.Screen name="Library" component={Library}/>
        <Stack.Screen name="Guardroom of Central University" component={Sg}/>
        <Stack.Screen name="The Front Door of Central University" component={Frontdoor}/>
        <Stack.Screen name="Bus173" component={Bus173}/>
        <Stack.Screen name="List173" component={List173}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;