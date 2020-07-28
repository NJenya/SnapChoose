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
import styles from './selectSetActionStyles'

const options = {
	title: 'Select Avatar',
	// customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
	storageOptions: {
		skipBackup: true,
		path: 'images',
	},
}

const SelectSetAction = ({ navigation }) => {
	const [imageCameraData, onChangeImageCamerData] = useState(null)
	const [imageLibraryData, onChangeImageLibraryData] = useState(null)
	const [textData, onChangeTextData] = useState('')

	const callImageCameraPicker = () => {
		ImagePicker.launchCamera(options, (response) => {
			console.log('Response = ', response)

			if (response.didCancel) {
				console.log('User cancelled image picker')
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error)
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton)
			} else {
				navigation.navigate('SetCompare', {
					responceType: 'Me',
					typeDataOfMe: 'image',
					data: response,
				})
				// const source = {uri: response.uri};

				// You can also display the image using data:
				// const source = { uri: 'data:image/jpeg;base64,' + response.data };

				onChangeImageCamerData(response)
			}
		})
	}
	const callImageLibraryPicker = () => {
		ImagePicker.launchImageLibrary(options, (response) => {
			console.log('Response = ', response)

			if (response.didCancel) {
				console.log('User cancelled image picker')
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error)
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton)
			} else {
				navigation.navigate('SetCompare', {
					responceType: 'Me',
					typeDataOfMe: 'image',
					data: response,
				})
				// const source = {uri: response.uri};

				// You can also display the image using data:
				// const source = { uri: 'data:image/jpeg;base64,' + response.data };

				onChangeImageLibraryData(response)
			}
		})
	}

	return (
		<ScrollView contentContainerStyle={styles.container}>
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
						onPress={() =>
							navigation.navigate('SetCompare', {
								responceType: 'Me',
								typeDataOfMe: 'text',
								data: textData,
							})
						}
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
						placeholder="Text about you..."
						multiline
					/>
				</View>
			</View>
		</ScrollView>
	)
}

export default SelectSetAction
