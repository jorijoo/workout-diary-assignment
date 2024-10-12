import { View } from 'react-native'
import { MD3LightTheme, PaperProvider } from 'react-native-paper'
import { useEffect, useState } from 'react'
import styles from './assets/styles/Styles'
import WorkoutContext from './assets/components/WorkoutContext'
import BotNav from './assets/constants/data/BotNav'
import { StatusBar } from 'expo-status-bar'
import WORKOUTS from './assets/constants/data/WORKOUTS.json'


export default function App() {

	const [workout, setWorkout] = useState(WORKOUTS)
	
	useEffect(() => {
		console.log(workout.length)
		console.log(workout)
	}, [workout])



	return (
		<PaperProvider theme={MD3LightTheme}>
			<WorkoutContext.Provider value={[workout, setWorkout]}>
				<View style={styles.container}>
					<StatusBar style="auto" />
					<BotNav />
				</View>
			</WorkoutContext.Provider>
		</PaperProvider>
	);
}