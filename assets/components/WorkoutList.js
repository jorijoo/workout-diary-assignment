import { ScrollView } from "react-native"
import { DataTable, List } from "react-native-paper"
import styles from "../styles/styles2"
import { useContext } from "react"
import WorkoutContext from "./WorkoutContext"
import LOCALE from '../constants/locale/EN_DEFAULT.json'
import SPORTS from '../constants/data/SPORTS'
import SETTINGS from '../constants/data/SETTINGS.json'
import IconAccessible from "./IconAccessible"
import SettingsContext from "./SettingsContext"
import DATE_FORMAT from "../constants/data/DATE_FORMAT"

const WorkoutList = () => {

	const [workouts] = useContext(WorkoutContext)
	const [settings] = useContext(SettingsContext)

	const miles = (settings.UNITS === 'mi') ? true : false
	const speed = (miles) ? SETTINGS.UNITS[1][2] : SETTINGS.UNITS[0][2] 

	return (
		<ScrollView style={styles.container}>
			{workouts.sort((a, b) => Date.parse(a.date) - Date.parse(b.date)).toReversed().map((w) => {
				const wDate = new Date(w.date)
				const wData = { ...w, ...SPORTS?.find(s => s.value === w.value) }

				wData.distance = ((miles) ? Math.round(wData.distance / SETTINGS.UNITS[1][1] * 100) / 100 : wData.distance).toFixed(2)
				wData.speed = (Math.round(+wData.distance / wData.duration * 60 * 100) / 100 ).toFixed(2)

				return (
					<List.Accordion
						title={`${DATE_FORMAT?.format(wDate)}`}
						key={wData.date}
						left={() => <IconAccessible icon={wData.icon} label={wData.label} />} >
						<DataTable>
							<DataTable.Row>
								<DataTable.Cell>{`${LOCALE.DURATION}: `}</DataTable.Cell>
								<DataTable.Cell>{`${wData.duration} min`}</DataTable.Cell>
							</DataTable.Row>
							<DataTable.Row>
								<DataTable.Cell>{`${LOCALE.DISTANCE}: `}</DataTable.Cell>
								<DataTable.Cell>{`${wData.distance} ${settings.UNITS}`}</DataTable.Cell>
							</DataTable.Row>
							<DataTable.Row>
								<DataTable.Cell>{`${LOCALE.SPEED}: `}</DataTable.Cell>
								<DataTable.Cell>{`${wData.speed} ${speed}`}</DataTable.Cell>
							</DataTable.Row>
						</DataTable>
					</List.Accordion>
				)
			})}
		</ScrollView>
	)
}

export default WorkoutList