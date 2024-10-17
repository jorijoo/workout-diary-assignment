import { View } from "react-native"
import WorkoutList from "./WorkoutList"
import WorkoutSummary from "./WorkoutSummary"
import styles from "../styles/styles"

const WorkoutsShow = () => {
	return (
		<View style={[styles.container, styles.container.padded]}>
			<WorkoutSummary />
			<WorkoutList />
		</View>
	)
}

export default WorkoutsShow