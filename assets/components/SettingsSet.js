import { View } from "react-native"
import { useState, useContext, useEffect } from "react"
import { RadioButton, Text, Title, } from "react-native-paper"
import styles from "../styles/styles"
import SETTINGS from '../constants/data/SETTINGS.json'
import LOCALE from '../constants/locale/EN_DEFAULT.json'
import SettingsContext from "./SettingsContext"

const SettingsSet = () => {
	const [settings, setSettings] = useContext(SettingsContext)

	useEffect(() => {
		console.log(`Units are now: ${settings.UNITS}`)
	}, [settings])

	return (
		<View style={[styles.container, styles.container.padded]}>
			<Title>{LOCALE.SETTINGS.toUpperCase()}</Title>
			{SETTINGS.UNITS.map((u) => {
				const unitName = LOCALE.UNITS[u[0]].PLURAL

				return (
					<View
						style={{
							flexDirection: 'row',
							alignContent: 'center',
							padding: 30,
							fontSize: 50
						}}
						key={u[0]}>
						<Text style={{ verticalAlign: 'middle' }}>{unitName}</Text>
						<RadioButton
							value={u[0]}
							status={settings.UNITS === u[0] ? 'checked' : 'unchecked'}
							onPress={() => setSettings({UNITS: u[0]})}
						/>
					</View>
				)
			})}
		</View>
	)
}

export default SettingsSet