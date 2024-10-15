import { ScrollView } from "react-native"
import { DataTable, List } from "react-native-paper"
import styles from "../styles/styles"
import { useState } from "react"
import { useContext } from "react"
import WorkoutContext from "./WorkoutContext"
import WORKOUTS from '../constants/data/WORKOUTS.json'
import LOCALE from '../constants/locale/EN_DEFAULT.json'
import SPORTS from '../constants/data/SPORTS'
import IconAccessible from "./IconAccessible"

const WorkoutList = () => {

	const woContext = useContext(WorkoutContext)

	if (!woContext) throw new Error('No access to context')

	// Use Intl.DateTimeFormat to make LOCALE in loops more efficient
	const dateOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'numeric',
		day: 'numeric'
	}
	const listDateFormat = new Intl.DateTimeFormat(LOCALE.LOCALE, dateOptions)

	return (
		<ScrollView style={styles.container}>
			{WORKOUTS.map((w) => {
				const wDate = new Date(w.date)
				const wData = { ...w, ...SPORTS?.find(s => s.value === w.value) }

				return (
					<List.Accordion
						title={`${listDateFormat?.format(wDate)}`}
						key={wData.date}
						left={() => <IconAccessible icon={wData.icon} label={wData.label} />} >
						<DataTable>
							<DataTable.Row>
								<DataTable.Cell>Duration:</DataTable.Cell>
								<DataTable.Cell>{`${wData.duration} min`}</DataTable.Cell>
							</DataTable.Row>
							<DataTable.Row>
								<DataTable.Cell>Distance:</DataTable.Cell>
								<DataTable.Cell>{`${wData.distance} km`}</DataTable.Cell>
							</DataTable.Row>
							<DataTable.Row>
								<DataTable.Cell>Speed:</DataTable.Cell>
								<DataTable.Cell>{`${wData.distance / wData.duration * 60} km/h`}</DataTable.Cell>
							</DataTable.Row>
						</DataTable>
					</List.Accordion>
				)
			})}
		</ScrollView>
	)
}

export default WorkoutList