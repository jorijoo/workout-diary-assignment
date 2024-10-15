import { View } from "react-native"
import { Icon, Surface, Text } from "react-native-paper"
import styles from "../styles/styles"
import WORKOUTS from '../constants/data/WORKOUTS.json'
import SPORTS from "../constants/data/sports2"

const WorkoutSummary = () => {
	return (
		<View style={styles.surface.container}>

			{SPORTS.map((s) => {
				const distSum = WORKOUTS.reduce((total, row) => {
					if (row.sport === s.sport) total += row.distance
					return total
				}, 0)

				return (
					<Surface style={styles.surface} key={s.sport}>
						<View style={styles.surface.title}>
							<Icon source={s.icon} />
							<Text>{` ${s.label}`}</Text>
						</View>
						<View>
							<Text style={styles.surface.distance}>{`${distSum} km`}</Text>
						</View>
					</Surface>
				)
			}
			)}
		</View>
	)
}

export default WorkoutSummary