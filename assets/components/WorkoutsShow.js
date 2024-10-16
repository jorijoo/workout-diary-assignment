import { View } from "react-native"
import { Title } from "react-native-paper"
import styles from "../styles/styles"
import LOCALE from "../constants/locale/EN_DEFAULT.json"
import WorkoutList from "./WorkoutList"
import WorkoutSummary from "./WorkoutSummary"

const WorkoutsShow = () => {
	return (
		<View style={[styles.container, styles.container.padded]}>
			<WorkoutSummary />
			<WorkoutList />
		</View>
	)
}

export default WorkoutsShow