import React, { useState } from 'react'
import {
	ScrollView,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	KeyboardAvoidingView,
} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import styles from './selectAnswerStyles'

const options = {
	title: 'Select Avatar',
	// customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
	storageOptions: {
		skipBackup: true,
		path: 'images',
	},
}

const SelectAnswer = ({ navigation, route }) => {
	const [imageCameraData, onChangeImageCamerData] = useState(null)
	const [imageLibraryData, onChangeImageLibraryData] = useState(null)
	const [textData, onChangeTextData] = useState('')

	const callImageCameraPicker = () => {
		ImagePicker.launchCamera(options, (response) => {
			if (response.didCancel) {
				console.log('User cancelled image picker')
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error)
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton)
			} else if ((route.params.answerNumber = 'first')) {
				console.log('response', response)
				navigation.navigate('SetCompare', {
					responceType: 'first',
					answerNumber: 'first',
					answerType: 'image',
					answerData: response,
				})

				onChangeImageCamerData(response)
			} else if ((route.params.answerNumber = 'second')) {
				navigation.navigate('SetCompare', {
					responceType: 'second',
					answerNumber: 'second',
					answerType: 'image',
					answerData: response,
				})
			}
		})
	}
	const callImageLibraryPicker = () => {
		console.log('image handler')
		ImagePicker.launchImageLibrary(options, (response) => {
			if (response.didCancel) {
				console.log('User cancelled image picker')
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error)
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton)
			} else if (route.params.answerNumber === 'first') {
				console.log('first responce', response)
				navigation.navigate('SetCompare', {
					responceType: 'first',
					answerType: 'image',
					answerData: response,
				})
			} else if (route.params.answerNumber === 'second') {
				navigation.navigate('SetCompare', {
					responceType: 'second',
					answerType: 'image',
					answerData: response,
				})
				onChangeImageLibraryData(response)
			}
		})
	}

	const textHandler = () => {
		if (route.params.answerNumber === 'first') {
			navigation.navigate('SetCompare', {
				responceType: 'first',
				answerType: 'text',
				answerData: textData,
			})
		} else if (route.params.answerNumber === 'second') {
			navigation.navigate('SetCompare', {
				responceType: 'second',
				answerType: 'text',
				answerData: textData,
			})
		}
	}

	return (
		<ScrollView
			contentContainerStyle={styles.container}
			keyboardShouldPersistTaps="always"
		>
			<View style={styles.container}>
				{imageCameraData ? (
					<View style={styles.meImageWrapper}>
						<Image
							style={styles.meImage}
							source={{ uri: imageCameraData.uri }}
							resizeMode="cover"
						/>
					</View>
				) : (
					<TouchableOpacity
						onPress={callImageCameraPicker}
						style={styles.meBlock}
					>
						<Text style={styles.buttonCaption}>SNAP</Text>
						<Image
							style={styles.cameraIcon}
							source={require('../../assets/icons/camera.png')}
						/>
					</TouchableOpacity>
				)}
				{imageLibraryData ? (
					<View style={styles.meImageWrapper}>
						<Image
							style={styles.meImage}
							source={{ uri: imageLibraryData.uri }}
							resizeMode="cover"
						/>
					</View>
				) : (
					<TouchableOpacity
						onPress={callImageLibraryPicker}
						style={styles.meBlock}
					>
						<Text style={styles.buttonCaption}>SELECT</Text>
						<Image
							style={styles.folderIcon}
							source={require('../../assets/icons/folder.png')}
						/>
					</TouchableOpacity>
				)}
				<View style={styles.inputWrapper}>
					<TouchableOpacity
						onPress={textHandler}
						style={styles.sendIconWrapper}
					>
						<Image
							style={styles.sendIcon}
							source={require('../../assets/icons/send.png')}
						/>
					</TouchableOpacity>
					<TextInput
						style={styles.inputStyle}
						value={textData}
						onChangeText={onChangeTextData}
						placeholder="Enter your answer..."
						multiline
					/>
				</View>
			</View>
		</ScrollView>
	)
}

export default SelectAnswer
