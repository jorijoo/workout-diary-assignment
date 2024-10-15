import { View } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { useState } from 'react'
import WorkoutContext from './assets/components/WorkoutContext'
import BotNav from './assets/components/BotNav'
import { StatusBar } from 'expo-status-bar'
import WORKOUTS from './assets/constants/data/WORKOUTS.json'
import { appContainer, lightTheme } from './assets/styles/styles'


export default function App() {

	const [workout, setWorkout] = useState(WORKOUTS)

	return (
		<PaperProvider theme={lightTheme}>
			<WorkoutContext.Provider value={[workout, setWorkout]}>
				<View style={appContainer}>
					<StatusBar style="auto" />
					<BotNav />
				</View>
			</WorkoutContext.Provider>
		</PaperProvider>
	);
}