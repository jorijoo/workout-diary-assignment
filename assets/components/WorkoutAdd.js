import { View } from "react-native"
import { Text } from "react-native-paper"
import WorkoutFormAdd from "./WorkoutFormAdd"
import Styles from "../styles/Styles"
import LOCALE from "../constants/locale/EN_DEFAULT.json"
import WorkoutList from "./WorkoutList"


const WorkoutAdd = () => {
	return (
		<View style={Styles.container_reverse}>
			<Text style={Styles.header}>{LOCALE.INIT} {LOCALE.LANG}</Text>
			<WorkoutFormAdd />
			<WorkoutList />
		</View>
	)
}

export default WorkoutAdd