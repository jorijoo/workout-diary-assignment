import { View } from "react-native"
import { Text } from "react-native-paper"
import styles from "../styles/styles2"
import LOCALE from "../constants/locale/EN_DEFAULT.json"
import WorkoutList from "./WorkoutList"
import WorkoutAddForm from "./WorkoutAddForm"


const WorkoutAdd = () => {
	return (
		<View style={[styles.container, styles.container.padded]}>
			<WorkoutAddForm />
		</View>
	)
}

export default WorkoutAdd