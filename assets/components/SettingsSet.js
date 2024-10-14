import { View } from "react-native"
import { List, Text } from "react-native-paper"
import LOCALE from "../constants/locale/EN_DEFAULT.json"
import styles from "../styles/styles"

const SettingsSet = () => {
	return (
		<View style={styles.container_test}>
			<Text>{LOCALE.SETTINGS}</Text>
			<Text>Language</Text>
			<Text>Units:</Text>
			<List.Item title='Kilometers' />
			<List.Item title='Miles' />
		</View>
	)
}

export default SettingsSet