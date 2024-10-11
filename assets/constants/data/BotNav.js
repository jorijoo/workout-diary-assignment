import { BottomNavigation } from 'react-native-paper'
import LOCALE from '../locale/EN_DEFAULT.json'
import { Text, View } from 'react-native'
import WorkoutFormAdd from '../../components/WorkoutFormAdd'
import Styles from '../../styles/Styles'
import { useState } from 'react'
import WorkoutAdd from '../../components/WorkoutAdd'
import WorkoutsShow from '../../components/WorkoutsShow'
import SettingsSet from '../../components/SettingsSet'

const BotNav = () => {

	const [index, setIndex] = useState(0)
	const [routes] = useState(botNavRoutes)


	return (
		<BottomNavigation
			navigationState={{ index, routes }}
			onIndexChange={setIndex}
			renderScene={renderScene}
		/>
	)
}

const AddWorkoutRoute = () => {
	<View style={Styles.container}>
		<Text>{LOCALE.INIT} {LOCALE.LANG}</Text>
		<WorkoutFormAdd />
	</View>
}

const botNavRoutes = [
	{
		key: 'addWorkout',
		title: LOCALE.BOTTOM_NAV.ADD_WORKOUT,
		focusedIcon: 'run-fast',
		unfocusedIcon: 'exit-run'
	},
	{
		key: 'showWorkouts',
		title: LOCALE.BOTTOM_NAV.SHOW_WORKOUTS,
		focusedIcon: 'format-list-bulleted',
		unfocusedIcon: 'format-list-checkbox'
	},
	{
		key: 'setSettings',
		title: LOCALE.SETTINGS,
		focusedIcon: 'cog',
		unfocusedIcon: 'cog-outline'
	}
]

const renderScene = BottomNavigation.SceneMap({
	addWorkout: WorkoutAdd,
	showWorkouts: WorkoutsShow,
	setSettings: SettingsSet
});

export default BotNav