import { View } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { useState } from 'react'
import WorkoutContext from './assets/components/WorkoutContext'
import BotNav from './assets/components/BotNav'
import { StatusBar } from 'expo-status-bar'
import WORKOUTS from './assets/constants/data/WORKOUTS.json'
import { appContainer, lightTheme } from './assets/styles/styles'
import { DEFAULTS } from './assets/constants/data/SETTINGS.json'
import SettingsContext from './assets/components/SettingsContext'

export default function App() {

	const [workout, setWorkout] = useState(WORKOUTS)
	const [settings, setSettings] = useState(DEFAULTS)

	return (
		<PaperProvider theme={lightTheme}>
			<SettingsContext.Provider value={[settings, setSettings]}>
				<WorkoutContext.Provider value={[workout, setWorkout]}>
					<View style={appContainer}>
						<StatusBar style="auto" />
						<BotNav />
					</View>
				</WorkoutContext.Provider>
			</SettingsContext.Provider>
		</PaperProvider >
	);
}