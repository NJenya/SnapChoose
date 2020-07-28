import React, { useState } from 'react'
import {
	Text,
	View,
	TouchableOpacity,
	ScrollView,
	Image,
	TextInput,
} from 'react-native'
import styles from './setQuestionStyle'

export const SetQuestion = ({ navigation }) => {
	const [inputData, setInputData] = useState('')

	const questionHandler = (text) => {
		navigation.navigate('SetCompare', {
			questionData: text,
			responceType: 'question',
		})
	}

	return (
		<ScrollView
			contentContainerStyle={styles.container}
			keyboardShouldPersistTaps="always"
		>
			<View style={styles.container}>
				<TouchableOpacity
					onPress={() => {
						questionHandler('Choose')
					}}
					style={styles.meBlock}
				>
					<Text style={styles.buttonCaption}>Choose</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						questionHandler('Buy')
					}}
					style={styles.meBlock}
				>
					<Text style={styles.buttonCaption}>Buy</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						questionHandler('Vote')
					}}
					style={styles.meBlock}
				>
					<Text style={styles.buttonCaption}>Vote</Text>
				</TouchableOpacity>

				<View style={styles.inputWrapper}>
					<TouchableOpacity
						onPress={() => questionHandler(inputData)}
						style={styles.sendIconWrapper}
					>
						<Image
							style={styles.sendIcon}
							source={require('../../assets/icons/send.png')}
						/>
					</TouchableOpacity>
					<TextInput
						style={styles.inputStyle}
						value={inputData}
						onChangeText={setInputData}
						placeholder="Enter your text..."
						multiline
					/>
				</View>
			</View>
		</ScrollView>
	)
}
