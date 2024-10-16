import { View } from "react-native"
import { Button, Text } from "react-native-paper"
import LOCALE from "../constants/locale/EN_DEFAULT.json"
import styles from "../styles/styles"
import SETTINGS from '../constants/data/SETTINGS.json'

const SettingsLocation = () => {
	return (
		<View style={styles.container}>
			<Text>{LOCALE.SETTINGS}</Text>
			<View style={styles.surface.container}>
				{
					SETTINGS.LOCATION.map((l) => {
						const iso = l.substring(l.length - 2)

						return (
							<Button
								mode='outlined'
								key={l}
								accessibilityLabel={`Language and location set to ${iso}`}>
								{`🇫🇮 ${iso}`}
							</Button>
						)
					}
					)
				}
			</View>
		</View>
	)
}

export default SettingsLocation