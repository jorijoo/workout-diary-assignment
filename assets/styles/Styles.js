import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "grey",
		flexDirection: "column"
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
		margin: 50,
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

export default Styles