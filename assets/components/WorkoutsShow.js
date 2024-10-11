import { View } from "react-native"
import { Text } from "react-native-paper"
import Styles from "../styles/Styles"
import LOCALE from "../constants/locale/EN_DEFAULT.json"

const WorkoutsShow = () => {
	return (
		<View style={Styles.container_test}>
			<Text>{LOCALE.BOTTOM_NAV.SHOW_WORKOUTS}</Text>
		</View>
	)
}
export default WorkoutsShow