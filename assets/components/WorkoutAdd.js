import { View } from "react-native"
import styles from "../styles/styles"
import WorkoutAddForm from "./WorkoutAddForm"


const WorkoutAdd = () => {
	return (
		<View style={[styles.container, styles.container.padded]}>
			<WorkoutAddForm />
		</View>
	)
}

export default WorkoutAdd