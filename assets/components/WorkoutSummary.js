import { View } from "react-native"
import { Icon, Surface, Text } from "react-native-paper"
import styles from "../styles/styles"
import SPORTS from "../constants/data/SPORTS"
import SETTINGS from '../constants/data/SETTINGS.json'
import { useContext } from "react"
import WorkoutContext from "./WorkoutContext"
import SettingsContext from "./SettingsContext"

const WorkoutSummary = () => {
	const [workouts] = useContext(WorkoutContext)
	const [settings] = useContext(SettingsContext)

	return (
		<View style={styles.surface.container}>
			{
				// Calculate the distances of specific sports
				SPORTS.map((s) => {
					const distSum = Math.round(workouts.reduce((total, row) => {
						if (row.value === s.value) total += row.distance
						return total
					}, 0))

					// Check if miles are on and convert to mileage
					const modDistance = (settings.UNITS === 'mi') ? Math.round(distSum / SETTINGS.UNITS[1][1])
						: distSum

					return (
						<Surface style={styles.surface} key={s.value}>
							<View style={styles.surface.title}>
								<Icon source={s.icon} />
								<Text>{` ${s.label}`}</Text>
							</View>
							<View>
								<Text style={styles.surface.distance}>{`${modDistance} ${settings.UNITS}`}</Text>
							</View>
						</Surface>
					)
				}
				)}
		</View>
	)
}

export default WorkoutSummary