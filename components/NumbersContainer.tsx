import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	Dimensions,
	FlatList,
	Alert,
	ListRenderItem,
	GestureResponderEvent,
} from 'react-native';
import { Button } from './Button';

type Props = {
	current: string;
	previous: string;
	result: string;
	handleSetNumber: (value: string) => void;
	handleReset: (event: GestureResponderEvent) => void;
};

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

export const NumbersContainer = ({
	current,
	previous,
	result,
	handleSetNumber,
	handleReset,
}: Props) => {
	const handleToDoPress = () => {
		Alert.alert('Future functionality');
	};

	const keyExtractor = (item: Number): string => item.value.toString();

	const renderItem: ListRenderItem<Number> = ({ item: { value } }) => {
		const handleNumberPress = () => {
			handleSetNumber(value);
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
		<View style={styles.numbersContainer}>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginRight: 12,
				}}
			>
				<Button onPress={handleReset} style={styles.topGrayButtonContainer}>
					<Text style={styles.topGrayButtonsText}>
						{current === '0' && previous === '0' && result === '' ? 'AC' : 'C'}
					</Text>
				</Button>
				<Button style={styles.topGrayButtonContainer} onPress={handleToDoPress}>
					<Text style={styles.topGrayButtonsText}>±</Text>
				</Button>
				<Button style={styles.topGrayButtonContainer} onPress={handleToDoPress}>
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
	);
};

const styles = StyleSheet.create({
	functionsContainer: {
		flex: 2,
		width: '100%',
		flexDirection: 'row',
	},
	numbersContainer: {
		flex: 3,
	},
	topGrayButtonContainer: {
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
	numberButton: {
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
