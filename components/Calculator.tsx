import React, { useCallback, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { ArithmeticButtons } from './ArithmeticButtons';
import { InputView } from './InputView';
import { NumbersContainer } from './NumbersContainer';

export const Calculator = () => {
	const [previous, setPrevious] = useState<string>('0');
	const [current, setCurrent] = useState<string>('0');
	const [result, setResult] = useState<string>('');
	const [arithmeticValue, setArithmeticValue] = useState<string>('');

	const handleReset = () => {
		setArithmeticValue('');
		setCurrent('0');
		setPrevious('0');
		setResult('');
	};

	const handleArithmeticPress = (value: string) => {
		if (value === '') return;
		setArithmeticValue(value);
		if (previous !== '0') {
			handleCompute();
		}
		setPrevious(current);
		setCurrent('0');
	};

	const handleCompute = useCallback(() => {
		let total = parseInt(result);
		switch (arithmeticValue) {
			case '/':
				result === ''
					? (total = parseInt(previous) / parseInt(current))
					: (total = parseInt(result) / parseInt(current));
				break;
			case '*':
				result === ''
					? (total = parseInt(previous) * parseInt(current))
					: (total = parseInt(result) * parseInt(current));
				break;
			case '-':
				result === ''
					? (total = parseInt(previous) - parseInt(current))
					: (total = parseInt(result) - parseInt(current));
				break;
			case '+':
				result === ''
					? (total = parseInt(previous) + parseInt(current))
					: (total = parseInt(result) + parseInt(current));
				break;
			default:
				return;
		}
		setResult(total.toString());
	}, [previous, current, result, setResult]);

	const handleSetNumber = useCallback(
		(number: string) => {
			if (current.length < 9) {
				if (number === '.' && current.includes('.')) return;
				if (current.toString() === '0') {
					setCurrent(number.toString());
				} else {
					setCurrent(current.toString() + number.toString());
				}
			}
		},
		[current, setCurrent],
	);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.viewContainer}>
				<InputView
					current={current}
					previous={previous}
					result={result}
					arithmeticValue={arithmeticValue}
				/>
				<View style={styles.functionsContainer}>
					<NumbersContainer
						current={current}
						previous={previous}
						result={result}
						handleSetNumber={handleSetNumber}
						handleReset={handleReset}
					/>
					<ArithmeticButtons
						arithmeticValue={arithmeticValue}
						handleCompute={handleCompute}
						handleArithmeticPress={handleArithmeticPress}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
	},
	viewContainer: {
		flex: 1,
		width: '100%',
		paddingHorizontal: 16,
	},
	functionsContainer: {
		flex: 2,
		width: '100%',
		flexDirection: 'row',
	},
});
