import { View } from 'react-native'
import { useState } from 'react'
import WorkoutContext from './assets/components/WorkoutContext'
import BotNav from './assets/components/BotNav'
import { StatusBar } from 'expo-status-bar'
import WORKOUTS from './assets/constants/data/WORKOUTS.json'
import { appContainer } from './assets/styles/styles'
import { DEFAULTS } from './assets/constants/data/SETTINGS.json'
import SettingsContext from './assets/components/SettingsContext'
import { PaperProvider } from 'react-native-paper'
import theme from './assets/styles/theme'

export default function App() {

	const [workouts, setWorkouts] = useState(WORKOUTS)
	const [settings, setSettings] = useState(DEFAULTS)

	return (
		<PaperProvider theme={theme}>
			<SettingsContext.Provider value={[settings, setSettings]}>
				<WorkoutContext.Provider value={[workouts, setWorkouts]}>
					<View style={appContainer}>
						<StatusBar style="auto" />
						<BotNav />
					</View>
				</WorkoutContext.Provider>
			</SettingsContext.Provider>
		</PaperProvider >
	);
}
