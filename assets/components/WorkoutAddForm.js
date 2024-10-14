import { Text, View } from "react-native"
import { useContext, useState } from "react"
import { Button, SegmentedButtons, Snackbar, TextInput } from "react-native-paper"
import Sports from "../constants/data/Sports"
import LOCALE from "../constants/locale/EN_DEFAULT.json"
import WorkoutContext from "./WorkoutContext"
import styles from "../styles/styles"

const WorkoutAddForm = () => {

	// Sports variables
	const [sport, setSport] = useState({sport: 'RUN'})
	const [distance, setDistance] = useState(5)
	const [duration, setDuration] = useState(5)
	const [date, setDate] = useState(new Date())

	// Context
	const [workouts, setWorkouts] = useContext(WorkoutContext)

	// Snackbar
	const [visible, setVisible] = useState(false)
	const onToggleSnackBar = () => setVisible(!visible)
	const onDismissSnackbar = () => setVisible(false)

	const snackbarOutput = () => {
		const lastWorkout = workouts.at(-1)?.sport
		const lastWorkoutActivity = Sports.find((sports) => sports.sport === lastWorkout)?.label.toLowerCase()

		return `${LOCALE.ADD.PAST} ${lastWorkoutActivity} at ${outputVelocity()}`
	}

	// Event handlers
	const handleNumericInput = (input, setInput) => setInput(input.replace(/[^0-9]/g, ''))
	const checkRequired = () => (sport?.sport && distance && duration) ? true : false

	const handleAddSport = () => {
		const workoutAdded = checkRequired() && [...workouts, { sport: sport?.sport, distance, duration, date }]

		if (checkRequired()) {
			onToggleSnackBar()
			setDate(new Date())
			setWorkouts(workoutAdded)
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
				sports={Sports} />
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
				value={sport?.sport}
				// Workaround to segmented buttons onValueChange refusing to assign object otherwise
				onValueChange={sport => setSport(sports.find(i => i.sport === sport))}
				buttons={sports}
				density='regular'
			/>
		</View>
	)
}

export default WorkoutAddForm