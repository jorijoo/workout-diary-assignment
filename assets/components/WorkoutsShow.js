import { View } from "react-native"
import { Text } from "react-native-paper"
import styles from "../styles/styles"
import LOCALE from "../constants/locale/EN_DEFAULT.json"
import WorkoutList from "./WorkoutList"

const WorkoutsShow = () => {
	return (
		<View style={styles.container}>
			<Text style={[styles.header]} >{LOCALE.BOTTOM_NAV.SHOW_WORKOUTS}</Text>
			<WorkoutList />
		</View>
	)
}

export default WorkoutsShow