import { View } from "react-native"
import { Text } from "react-native-paper"
import styles from "../styles/styles"
import LOCALE from "../constants/locale/EN_DEFAULT.json"
import WorkoutList from "./WorkoutList"
import WorkoutAddForm from "./WorkoutAddForm"


const WorkoutAdd = () => {
	return (
		<View style={[styles.container]}>
			<WorkoutAddForm />
		</View>
	)
}

export default WorkoutAdd