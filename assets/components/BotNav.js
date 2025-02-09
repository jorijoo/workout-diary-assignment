import { useState } from 'react'
import { BottomNavigation } from 'react-native-paper'
import WorkoutAdd from './WorkoutAdd'
import WorkoutsShow from './WorkoutsShow'
import SettingsSet from './SettingsSet'
import LOCALE from '../constants/locale/EN_DEFAULT.json'

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