import { View } from "react-native"
import { Text } from "react-native-paper"
import Styles from "../styles/Styles"
import LOCALE from "../constants/locale/EN_DEFAULT.json"
import WorkoutList from "./WorkoutList"

const WorkoutsShow = () => {
	return (
		<View style={Styles.container}>
			<Text style={Styles.container_test} >{LOCALE.BOTTOM_NAV.SHOW_WORKOUTS}</Text>
			<WorkoutList />
		</View>
	)
}

export default WorkoutsShow