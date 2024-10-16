import { View } from "react-native"
import { useContext } from "react"
import { DataTable, Headline, RadioButton, Text, Title, } from "react-native-paper"
import styles from "../styles/styles"
import SETTINGS from '../constants/data/SETTINGS.json'
import LOCALE from '../constants/locale/EN_DEFAULT.json'
import SettingsContext from "./SettingsContext"

const SettingsSet = () => {
	const [settings, setSettings] = useContext(SettingsContext)

	return (
		<View style={[styles.container, styles.container.padded]}>
			<Headline style={styles.headline}>{LOCALE.SETTINGS.toUpperCase()}</Headline>
			<DataTable style={styles.settings}>
				{SETTINGS.UNITS.map((u) => {
					const unitName = LOCALE.UNITS[u[0]].PLURAL

					return (
						<DataTable.Row key={u[0]}>
							<DataTable.Cell>{unitName}</DataTable.Cell>
							<DataTable.Cell>
								<RadioButton
									value={u[0]}
									status={settings.UNITS === u[0] ? 'checked' : 'unchecked'}
									onPress={() => setSettings({ UNITS: u[0] })}
								/>
							</DataTable.Cell>
						</DataTable.Row>
					)
				})}
			</DataTable>
		</View>
	)
}

export default SettingsSet