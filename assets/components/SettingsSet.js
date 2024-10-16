import { View } from "react-native"
import { useState } from "react"
import { RadioButton, Text, useTheme } from "react-native-paper"
import styles from "../styles/styles"
import SettingsLocation from "./SettingsLocation"
import SETTINGS from '../constants/data/SETTINGS.json'
import LOCALE from '../constants/locale/EN_DEFAULT.json'

const SettingsSet = () => {
	const [checked, setChecked] = useState('km')
	
	const theme = useTheme()
	
	return (
		<View style={styles.container}>
			<SettingsLocation />
			<Text>Units:</Text>
			{SETTINGS.UNITS.map((u) => {
				const unitName = LOCALE.UNITS[u.ABBREVIATION].PLURAL

				return (
					<View
						style={{
							flexDirection: 'row',
							alignContent: 'center',
							padding: 30,
							fontSize: 50
						}}
						key={u.ABBREVIATION}>
						<Text style={{verticalAlign: 'middle'}}>{unitName}</Text>
						<RadioButton
							value={u.ABBREVIATION}
							status={checked === u.ABBREVIATION ? 'checked' : 'unchecked'}
							onPress={() => setChecked(u.ABBREVIATION)}
						/>
					</View>
				)
			})}
		</View>
	)
}

export default SettingsSet