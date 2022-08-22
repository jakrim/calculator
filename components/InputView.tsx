import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { numberWithCommas } from '../utils/helperFunctions';

type Props = {
	current: string;
	previous: string;
	result: string;
	arithmeticValue: string;
};
export const InputView = ({
	current,
	previous,
	result,
	arithmeticValue,
}: Props) => {
	return (
		<View style={styles.resultsContainer}>
			<Text
				numberOfLines={1}
				style={[
					styles.resultsText,
					{
						fontSize:
							current.length < 6 && previous.length < 6 && result.length < 6
								? 92
								: current.length < 8 && previous.length < 8 && result.length < 8
								? 68
								: 52,
					},
				]}
			>
				{result !== '' && current !== '0'
					? numberWithCommas(result)
					: previous === '0' || arithmeticValue !== ''
					? numberWithCommas(current)
					: numberWithCommas(previous)}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	resultsContainer: {
		flex: 1,
		width: '100%',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	},
	resultsText: {
		color: '#FEFEFF',
		fontWeight: '200',
		marginRight: 32,
	},
});
