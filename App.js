import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './assets/styles/default';

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Initialization!</Text>
			<StatusBar style="auto" />
		</View>
	);
}