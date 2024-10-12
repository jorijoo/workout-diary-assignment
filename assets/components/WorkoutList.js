import { View } from "react-native"
import { List } from "react-native-paper"
import Styles from "../styles/Styles"
import { useState } from "react"

const WorkoutList = () => {

	const [expanded, setExpanded] = useState(true)

  const handlePress = () => setExpanded(!expanded)

	return (
		<View style={Styles.container_test}>
			<List.Section title="Accordions">
      <List.Accordion
        title="Uncontrolled Accordion"
        left={props => <List.Icon {...props} icon="run-fast" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Controlled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>
		</View>
	)
}

export default WorkoutList