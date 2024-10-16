import { View } from "react-native"
import { accessibility } from "../styles/styles2"
import { List, Text } from "react-native-paper"

const IconAccessible = ({icon, label}) => {
	return (
		<View style={accessibility.icon}>
			<List.Icon icon={icon} />
			<Text>{label}</Text>
		</View>
	)
}

export default IconAccessible