import {
	Pressable,
	PressableProps,
	ViewStyle,
	StyleProp,
	StyleSheet,
} from 'react-native';

type Props = Omit<PressableProps, 'style'> & {
	style?: StyleProp<ViewStyle>;
};
export const Button = ({ onPress, style, children }: Props) => {
	const generateStyles: PressableProps['style'] = ({ pressed }) =>
		StyleSheet.compose(
			{
				opacity: pressed ? 0.4 : 1,
			},
			style,
		);

	return (
		<Pressable
			android_ripple={{
				color: 'black',
				borderless: false,
			}}
			hitSlop={{
				bottom: 10,
				left: 10,
				right: 10,
				top: 10,
			}}
			style={generateStyles}
			onPress={onPress}
		>
			{children}
		</Pressable>
	);
};
