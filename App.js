import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { MD3DarkTheme, PaperProvider } from 'react-native-paper';
import { useState } from 'react';
import LOCALE from './assets/constants/locale/EN_DEFAULT.json';
import styles from './assets/styles/Default';
import WorkoutContext from './assets/components/WorkoutContext'
import WorkoutFormAdd from './assets/components/WorkoutFormAdd';

export default function App() {

	const [workout, setWorkout] = useState([])

	return (
		<PaperProvider theme={MD3DarkTheme}>
			<WorkoutContext.Provider value={[workout, setWorkout]}>
				<View style={styles.container}>
					<Text>{LOCALE.INIT} {LOCALE.LANG}</Text>
					<StatusBar style="auto" />
					<WorkoutFormAdd />
				</View>
			</WorkoutContext.Provider>
		</PaperProvider>
	);
}