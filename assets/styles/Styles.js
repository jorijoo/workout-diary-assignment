import { StyleSheet } from "react-native"
import CONSTANTS from 'expo-constants'
import theme from "./Theme"
import { Snackbar } from "react-native-paper"

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		padded: {
			padding: 5
		}
	},
	sports: {
		flex: 1,
		alignItems: 'center'
	},
	headline: {
		marginVertical: 30,
		height: 100,
		textAlign: 'center',
		textAlignVertical: 'center'
	},
	add: {
		paddingVertical: 30
	},
	button: {
		paddingVertical: 15,
		marginBottom: 20,
		segmented: {
			textAlignVertical: 'center',
		}
	},
	textInput: {
		marginBottom: 20,
		paddingVertical: 5,
		fontSize: 30
	},
	snackbar: {
		alignSelf: 'flex-end'
	},
	surface: {
		padding: 8,
		height: 100,
		width: 100,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 4,
		backgroundColor: theme.colors.secondaryContainer,
		container: {
			flexDirection: 'row',
			justifyContent: 'space-evenly',
			padding: 5,
			paddingVertical: 20
		},
		title: {
			flexDirection: 'row',
			padding: 5
		},
		distance: {
			fontSize: 20
		},
	},
	settings: {
		marginHorizontal: '20%'
	}
})

export const appContainer = StyleSheet.create({
	...styles.container,
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