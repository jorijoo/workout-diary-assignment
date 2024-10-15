import { Alert, Text, View } from "react-native"
import { useContext, useEffect, useState } from "react"
import { Button, SegmentedButtons, Snackbar, TextInput } from "react-native-paper"
import SPORTS from "../constants/data/SPORTS"
import LOCALE from "../constants/locale/EN_DEFAULT.json"
import WorkoutContext from "./WorkoutContext"
import styles from "../styles/styles"

const WorkoutAddForm = () => {

	// Sports variables
	const [sport, setSport] = useState({ value: 'RUN' })
	const [distance, setDistance] = useState(0)
	const [duration, setDuration] = useState(0)
	const [date, setDate] = useState(new Date())

	// Context
	const [workouts, setWorkouts] = useContext(WorkoutContext)

	// Snackbar
	const [visible, setVisible] = useState(false)
	const onToggleSnackBar = () => setVisible(!visible)
	const onDismissSnackbar = () => setVisible(false)

	const snackbarOutput = () => {
		const lastWorkout = workouts.at(-1)?.value
		const lastWorkoutActivity = SPORTS.find((sports) => sports.value === lastWorkout)?.label.toLowerCase()

		return `${LOCALE.ADD.PAST} ${lastWorkoutActivity} at ${outputVelocity()}`
	}

	// Event handlers
	const handleNumericInput = (input, setInput) => setInput(input.replace(/[^0-9]/g, ''))
	const checkRequired = () => (sport?.value && distance && duration) ? true : false

	const handleAddSport = () => {

		if (checkRequired()) {
			const alertMsg = (distance > 0 && duration > 0) ? false
				: `${LOCALE.DISTANCE} ${LOCALE.AND} ${LOCALE.DURATION.toLowerCase()} ${LOCALE.ALERT.ZERO}`

			if (alertMsg) {
				Alert.alert(
					LOCALE.ALERT.DD_MESSAGE,
					alertMsg,
					[{
						text: LOCALE.ALERT.RETRY,
						style: 'cancel'
					}],
					{ cancelable: true }
				)
			} else {
				const workoutAdded = [...workouts, { sport: sport?.value, distance, duration, date }]

				onToggleSnackBar()
				setDate(new Date())
				setWorkouts(workoutAdded)
			}
		}
	}

	// Speed output function
	const outputVelocity = () => {
		const velocity = +distance / +duration
		const outV = `${velocity.toFixed(2)} m/s`

		return outV
	}

	return (
		<View>
			<Text style={styles.header}>Valittu {sport?.label?.toLowerCase()}</Text>
			<WorkoutType
				sport={sport}
				setSport={(sport) => setSport(sport)}
				sports={SPORTS} />
			<TextInput
				keyboardType="numeric"
				label={LOCALE.DISTANCE}
				value={distance}
				onChangeText={i => handleNumericInput(i, setDistance)} />
			<TextInput
				keyboardType="numeric"
				label={LOCALE.DURATION}
				value={duration}
				onChangeText={i => handleNumericInput(i, setDuration)} />
			<Button
				mode="contained"
				style={styles.button}
				onPress={handleAddSport}
				disabled={!checkRequired()} >
				{LOCALE.ADD.PRESENT}
			</Button>
			<Snackbar
				visible={visible}
				onDismiss={onDismissSnackbar}
				onIconPress={onDismissSnackbar}
				action={{
					label: snackbarOutput(),
					onPress: () => onDismissSnackbar,
				}}>
			</Snackbar>
		</View>
	)
}

const WorkoutType = ({ sport, setSport, sports }) => {
	return (
		<View>
			<SegmentedButtons
				value={sport?.value}
				// Workaround to segmented buttons onValueChange refusing to assign object otherwise
				onValueChange={sport => setSport(sports.find(i => i.value === sport))}
				buttons={sports}
				density='regular'
			/>
		</View>
	)
}

export default WorkoutAddForm