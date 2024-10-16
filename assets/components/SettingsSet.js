import { View } from "react-native"
import { List, Text } from "react-native-paper"
import styles from "../styles/styles"
import SETTINGS from '../constants/data/SETTINGS.json'
import SettingsLocation from "./SettingsLocation"

const SettingsSet = () => {
	return (
		<View style={styles.container}>
			<SettingsLocation />
			<Text>Units:</Text>
			<List.Item title='Kilometers' />
			<List.Item title='Miles' />
		</View>
	)
}

export default SettingsSet