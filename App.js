import { View } from 'react-native'
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { PaperProvider } from 'react-native-paper'
import BotNav from './assets/components/BotNav'
import WorkoutContext from './assets/components/WorkoutContext'
import SettingsContext from './assets/components/SettingsContext'
import WORKOUTS from './assets/constants/data/WORKOUTS.json'
import { DEFAULTS } from './assets/constants/data/SETTINGS.json'
import theme from './assets/styles/theme'
import { appContainer } from './assets/styles/styles'

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
