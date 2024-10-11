import { View } from "react-native"
import { Text } from "react-native-paper"
import LOCALE from "../constants/locale/EN_DEFAULT.json"
import Styles from "../styles/Styles"

const SettingsSet = () => {
	return (
		<View style={Styles.container_test}>
			<Text>{LOCALE.SETTINGS}</Text>
		</View>
	)
}

export default SettingsSet