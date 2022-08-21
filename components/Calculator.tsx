import React, { useCallback, useMemo, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	FlatList,
	ListRenderItem,
	Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from './Button';
import { numberWithCommas } from '../utils/helperFunctions';

type Number = {
	value: string;
};

const numbers = [
	{ value: '7' },
	{ value: '8' },
	{ value: '9' },
	{ value: '4' },
	{ value: '5' },
	{ value: '6' },
	{ value: '1' },
	{ value: '2' },
	{ value: '3' },
	{ value: '0' },
	{ value: '.' },
];

export const Calculator = () => {
	const [result, setResult] = useState<string>('0');
	console.log(
		'🚀 ~ file: Calculator.tsx ~ line 34 ~ Calculator ~ result',
		result,
	);

	const handleReset = () => {
		setResult('0');
	};

	const handleSetResult = useCallback(
		(number: string | number) => {
			if (result.length < 9) {
				if (result.toString() === '0') {
					setResult(numberWithCommas(number.toString()));
					// setResult(numberWithCommas(result));
				} else {
					setResult(numberWithCommas(result.toString() + number.toString()));
					// setResult(numberWithCommas(result));
				}
			}
		},
		[result, setResult],
	);

	const keyExtractor = (item: Number): string => item.value.toString();

	const renderItem: ListRenderItem<Number> = ({ item: { value } }) => {
		const handleNumberPress = () => {
			handleSetResult(value);
		};

		return (
			<Button
				onPress={handleNumberPress}
				style={[
					styles.numberButton,
					{
						width:
							value === '0'
								? Dimensions.get('window').width / 2.3
								: Dimensions.get('window').width / 5,
						alignItems: value === '0' ? 'flex-start' : 'center',
						paddingLeft: value === '0' ? 24 : 0,
					},
				]}
			>
				<Text style={styles.numberText}>{value}</Text>
			</Button>
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.viewContainer}>
				<View style={styles.resultsContainer}>
					<Text style={styles.resultsText}>{numberWithCommas(result)}</Text>
				</View>
				<View style={styles.functionsContainer}>
					<View style={styles.numbersContainer}>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								marginRight: 12,
							}}
						>
							<Button
								onPress={handleReset}
								style={styles.topGrayButtonContainer}
							>
								<Text style={styles.topGrayButtonsText}>
									{result === '0' ? 'AC' : 'C'}
								</Text>
							</Button>
							<Button style={styles.topGrayButtonContainer}>
								<Text style={styles.topGrayButtonsText}>±</Text>
							</Button>
							<Button style={styles.topGrayButtonContainer}>
								<Text style={styles.topGrayButtonsText}>%</Text>
							</Button>
						</View>
						<FlatList
							keyExtractor={keyExtractor}
							renderItem={renderItem}
							data={numbers}
							numColumns={3}
							scrollEnabled={false}
						/>
					</View>
					<View style={styles.arithmeticContainer}>
						<Button style={styles.arithmeticButton}>
							<Text style={styles.arithmeticText}>÷</Text>
						</Button>
						<Button style={styles.arithmeticButton}>
							<Text style={styles.arithmeticText}>×</Text>
						</Button>
						<Button style={styles.arithmeticButton}>
							<Text style={styles.arithmeticText}>–</Text>
						</Button>
						<Button style={styles.arithmeticButton}>
							<Text style={styles.arithmeticText}>+</Text>
						</Button>
						<Button style={styles.arithmeticButton}>
							<Text style={styles.arithmeticText}>=</Text>
						</Button>
					</View>
				</View>
			</View>
			<StatusBar style='light' />
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
	resultsContainer: {
		flex: 1,
		borderColor: 'yellow',
		borderWidth: 2,
		width: '100%',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	},
	resultsText: {
		color: '#FEFEFF',
		fontSize: 92,
		fontWeight: '200',
		marginRight: 32,
		// textAlign: 'flex-start',
	},
	functionsContainer: {
		flex: 2,
		//borderColor: 'red',
		// borderWidth: 3,
		width: '100%',
		flexDirection: 'row',
	},
	numbersContainer: {
		// borderColor: 'green',
		// borderWidth: 1,
		flex: 3,
	},
	topGrayButtonContainer: {
		// borderColor: 'red',
		// borderWidth: 1,
		backgroundColor: '#A4A4A4',
		borderRadius: 100,
		width: Dimensions.get('window').width / 5,
		height: Dimensions.get('window').width / 5,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 12,
		marginTop: 16,
	},
	topGrayButtonsText: {
		color: '#010001',
		fontSize: 36,
	},
	arithmeticContainer: {
		// alignItems: 'center',
		// borderColor: 'purple',
		// borderWidth: 1,
		flex: 1,
	},
	arithmeticButton: {
		// borderColor: 'red',
		// borderWidth: 1,
		backgroundColor: '#FE9F05',
		borderRadius: 100,
		width: Dimensions.get('window').width / 5,
		height: Dimensions.get('window').width / 5,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 16,
	},
	arithmeticText: {
		color: '#FEFEFF',
		fontSize: 44,
		fontWeight: '500',
	},
	numberButton: {
		// borderColor: 'red',
		// borderWidth: 1,
		backgroundColor: '#333333',
		borderRadius: 100,
		height: Dimensions.get('window').width / 5,
		justifyContent: 'center',
		marginRight: 12,
		marginTop: 16,
	},
	numberText: {
		color: '#FEFEFF',
		fontSize: 40,
	},
});
