import { StyleSheet } from "react-native"
import CONSTANTS from 'expo-constants'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "grey",
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