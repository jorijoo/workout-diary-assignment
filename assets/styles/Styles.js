import { StyleSheet } from "react-native"
import CONSTANTS from 'expo-constants'
import { MD3LightTheme as DefaultTheme } from "react-native-paper"


export const lightTheme = {
	...DefaultTheme,
	roundness: 2,
	fontSize: 50,
	colors: {
		...DefaultTheme.colors,
		primary: '#3498db'
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
	},
	container_reverse: {
		flex: 1,
		backgroundColor: "orange",
		flexDirection: "column-reverse",
		justifyContent: "flex-start"
	},
	container_test: {
		flex: 1,
		backgroundColor: "lime",
		paddingVertical: 10
	},
	sports: {
		flex: 1,
		alignItems: 'center'
	},
	header: {
		fontSize: 50
	},
	button: {
		paddingVertical: 20
	},
	surface: {
		container: {
			flexDirection: 'row',
			justifyContent: 'space-evenly',
			padding: 5
		},
		title: {
			flexDirection: 'row',
			padding: 5
		},
		distance: {
			fontSize: 20
		},
		padding: 8,
		paddingHorizontal: 20,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 4,
		borderRadius: 10,
		backgroundColor: lightTheme.colors.primaryContainer,
	}
})

export const appContainer = StyleSheet.create({
	...styles.container,
	...lightTheme,
	marginTop: CONSTANTS.statusBarHeight
})

export const accessibility = StyleSheet.create({
	icon: {
		alignItems: 'center',
		justifyContent: 'center',
		alignContent: 'space-between',
		width: 80
	}
})


export default styles