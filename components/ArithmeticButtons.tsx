import React from 'react';
import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	GestureResponderEvent,
} from 'react-native';
import { Button } from './Button';

type Props = {
	arithmeticValue: string;
	handleCompute: (event: GestureResponderEvent) => void;
	handleArithmeticPress: (value: string) => void;
};

export const ArithmeticButtons = ({
	arithmeticValue,
	handleCompute,
	handleArithmeticPress,
}: Props) => {
	return (
		<View style={styles.arithmeticContainer}>
			<Button
				onPress={() => handleArithmeticPress('/')}
				style={[
					styles.arithmeticButton,
					{
						backgroundColor: arithmeticValue === '/' ? 'white' : '#FE9F05',
					},
				]}
			>
				<Text
					style={[
						styles.arithmeticText,
						{
							color: arithmeticValue === '/' ? '#FE9F05' : 'white',
						},
					]}
				>
					÷
				</Text>
			</Button>
			<Button
				onPress={() => handleArithmeticPress('*')}
				style={[
					styles.arithmeticButton,
					{
						backgroundColor: arithmeticValue === '*' ? 'white' : '#FE9F05',
					},
				]}
			>
				<Text
					style={[
						styles.arithmeticText,
						{
							color: arithmeticValue === '*' ? '#FE9F05' : 'white',
						},
					]}
				>
					×
				</Text>
			</Button>
			<Button
				onPress={() => handleArithmeticPress('-')}
				style={[
					styles.arithmeticButton,
					{
						backgroundColor: arithmeticValue === '-' ? 'white' : '#FE9F05',
					},
				]}
			>
				<Text
					style={[
						styles.arithmeticText,
						{
							color: arithmeticValue === '-' ? '#FE9F05' : 'white',
						},
					]}
				>
					–
				</Text>
			</Button>
			<Button
				onPress={() => handleArithmeticPress('+')}
				style={[
					styles.arithmeticButton,
					{
						backgroundColor: arithmeticValue === '+' ? 'white' : '#FE9F05',
					},
				]}
			>
				<Text
					style={[
						styles.arithmeticText,
						{
							color: arithmeticValue === '+' ? '#FE9F05' : 'white',
						},
					]}
				>
					+
				</Text>
			</Button>
			<Button onPress={handleCompute} style={styles.arithmeticButton}>
				<Text style={styles.arithmeticText}>=</Text>
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	arithmeticContainer: {
		flex: 1,
	},
	arithmeticButton: {
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
});
