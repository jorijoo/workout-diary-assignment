import { Alert, View } from "react-native"
import { useContext, useState, useCallback } from "react"
import { Button, SegmentedButtons, Snackbar, Text, TextInput, Title } from "react-native-paper"
import SPORTS from "../constants/data/SPORTS"
import LOCALE from "../constants/locale/EN_DEFAULT.json"
import SETTINGS from '../constants/data/SETTINGS.json'
import WorkoutContext from "./WorkoutContext"
import styles from "../styles/styles"
import SettingsContext from "./SettingsContext"
import { DatePickerModal } from "react-native-paper-dates"
import { enGB, registerTranslation } from 'react-native-paper-dates'
import DATE_FORMAT from "../constants/data/DATE_FORMAT"


const WorkoutAddForm = () => {

	// Sports variables
	const [sport, setSport] = useState({ value: 'RUN', label: 'Running' })
	const [distance, setDistance] = useState(5)
	const [duration, setDuration] = useState(5)

	// Context
	const [workouts, setWorkouts] = useContext(WorkoutContext)
	const [settings] = useContext(SettingsContext)
	const miles = (settings.UNITS === 'mi') ? true : false

	// Date picker
	const now = new Date()
	const [dateText, setDateText] = useState(now)
	const [date, setDate] = useState(undefined);
	const [open, setOpen] = useState(false);

	registerTranslation('en', enGB)

	const onDismissSingle = useCallback(() => {
		setOpen(false)
	}, [setOpen]);

	const onConfirmSingle = useCallback(
		(params) => {
			setOpen(false)
			setDate(params.date)
			setDateText(params.date)
		},
		[setOpen, setDate]
	);

	// Snackbar
	const [visible, setVisible] = useState(false)
	const onToggleSnackBar = () => setVisible(!visible)
	const onDismissSnackbar = () => setVisible(false)

	const snackbarOutput = () => {
		const lastWorkout = workouts.at(-1).value
		const lastWorkoutActivity = SPORTS.find((sports) => sports.value === lastWorkout)?.label.toLowerCase()

		return `${LOCALE.ADD.PAST} ${lastWorkoutActivity} at ${outputVelocity()}`
	}

	// Event handlers
	const handleNumericInput = (input, setInput) => setInput(input.replace(/[^0-9]/g, ''))
	const checkRequired = () => (sport?.value && distance && duration) ? true : false

	// Check input before adding to workouts
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
				// Add to workouts
				const modDistance = (miles) ? Math.round(+distance * SETTINGS.UNITS[1][1] * 100) / 100 : +distance
				const workoutAdded = [...workouts, { value: sport?.value, distance: +modDistance, duration: +duration, date }]
				// sports.find(i => i.value === sport))
				onToggleSnackBar()
				setDate(new Date())
				setWorkouts(workoutAdded)
			}
		}
	}

	// Speed output function
	const outputVelocity = () => {
		const velocity = +distance / +duration * 60
		const outV = `${Math.round(velocity * 100) / 100} ${(miles) ? SETTINGS.UNITS[1][2] : SETTINGS.UNITS[0][2]}`

		return outV
	}

	return (
		<View>
			<Title>{LOCALE.BOTTOM_NAV.ADD_WORKOUT.toUpperCase()}</Title>
			<WorkoutType
				sport={sport}
				setSport={(sport) => setSport(sport)}
				sports={SPORTS} />
			<TextInput
				keyboardType="numeric"
				label={`${LOCALE.DISTANCE} (${settings.UNITS})`}
				value={distance}
				onChangeText={i => handleNumericInput(i, setDistance)} />
			<TextInput
				keyboardType="numeric"
				label={`${LOCALE.DURATION} (min)`}
				value={duration}
				onChangeText={i => handleNumericInput(i, setDuration)} />
			<Text>{`${DATE_FORMAT?.format(dateText)}`}</Text>
			<Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
				Pick single date
			</Button>

			<DatePickerModal
				locale="en"
				mode="single"
				visible={open}
				startWeekOnMonday={LOCALE.START_WEEK_ON_MONDAY}
				validRange={{ endDate: now }}
				onDismiss={onDismissSingle}
				onConfirm={onConfirmSingle}
			/>

			<Button
				mode="contained"
				style={styles.button}
				label={dateText}
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