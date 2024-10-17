import { View } from "react-native"
import { DataTable, Headline, RadioButton } from "react-native-paper"
import { useContext } from "react"
import SettingsContext from "./SettingsContext"
import SETTINGS from '../constants/data/SETTINGS.json'
import LOCALE from '../constants/locale/EN_DEFAULT.json'
import styles from "../styles/styles"

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