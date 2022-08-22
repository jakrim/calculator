import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Calculator } from './components/Calculator';

export default function App() {
	return (
		<>
			<Calculator />
			<StatusBar style='light' />
		</>
	);
}
