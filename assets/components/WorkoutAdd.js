import { View } from "react-native"
import { Text } from "react-native-paper"
import WorkoutFormAdd from "./WorkoutFormAdd"
import Styles from "../styles/Styles"
import LOCALE from "../constants/locale/EN_DEFAULT.json"


const WorkoutAdd = () => {
	return (
		<View style={Styles.container}>
			<Text>{LOCALE.INIT} {LOCALE.LANG}</Text>
			<WorkoutFormAdd />
		</View>
	)
}

export default WorkoutAdd