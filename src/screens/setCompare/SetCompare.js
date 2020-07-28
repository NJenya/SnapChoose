import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import styles from './setCompareStyles'

const SetCompare = ({ navigation, route }) => {
	const [typeOfMeData, setTypeOfMeData] = useState(null)
	const [meData, setMeData] = useState(null)
	const [questionData, setQuestionData] = useState(null)
	const [firstAnswerData, setFirstAnswerData] = useState(null)
	const [typeOfAnswer, setTypeOfAnswer] = useState(null)
	const [secondAnswerData, setSecondAnswerData] = useState(null)
	console.log('firstAnswerData', firstAnswerData)
	console.log('secondAnswerData', secondAnswerData)
	console.log('route', route)

	const updateData = (params) => {
		if (params.responceType === 'Me') {
			console.log('me case')
			setTypeOfMeData(params.typeDataOfMe)
			setMeData(params.data)
		} else if (params.responceType === 'question') {
			console.log('question case')
			setQuestionData(params.questionData)
		} else if (params.responceType === 'first') {
			console.log('first case')
			setFirstAnswerData(params.answerData)
			setTypeOfAnswer(params.answerType)
		} else if (params.responceType === 'second') {
			console.log('second case')
			setSecondAnswerData(params.answerData)
			setTypeOfAnswer(params.answerType)
		}
	}

	useEffect(() => {
		if (route.params) {
			updateData(route.params)
		}
	})

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.container}>
				<View>
					{/* me button */}
					{meData && typeOfMeData === 'image' ? (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('SetAction', {
									typeOfSelect: 'ME',
								})
							}
							style={styles.meImageWrapper}
						>
							<Image
								style={styles.meImage}
								source={{ uri: meData.uri }}
								resizeMode="cover"
							/>
						</TouchableOpacity>
					) : typeOfMeData === 'text' ? (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('SetAction', {
									typeOfSelect: 'ME',
								})
							}
							style={styles.selectMeButton}
						>
							<Text style={styles.buttonCaption}>{meData}</Text>
						</TouchableOpacity>
					) : (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('SetAction', {
									typeOfSelect: 'ME',
								})
							}
							// onPress={this.callImagePicker}
							style={styles.meBlock}
						>
							<Text style={styles.buttonCaption}>Me</Text>
						</TouchableOpacity>
					)}
					{/* set question button */}
					{questionData ? (
						<TouchableOpacity
							onPress={() => navigation.navigate('SetQuestion')}
							style={styles.selectMeButton}
						>
							<Text style={styles.buttonCaption}>{questionData}</Text>
						</TouchableOpacity>
					) : (
						<TouchableOpacity
							onPress={() => navigation.navigate('SetQuestion')}
							style={styles.selectMeButton}
						>
							<Text style={styles.buttonCaption}>Choose</Text>
						</TouchableOpacity>
					)}
				</View>

				<View style={styles.compareButtonsWrapper}>
					{/* first answer button */}
					{firstAnswerData && typeOfAnswer === 'image' ? (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('SelectAnswer', {
									answerNumber: 'first',
								})
							}
							style={styles.answerImageWrapper}
						>
							<Image
								style={styles.meImage}
								source={{ uri: firstAnswerData.uri ? firstAnswerData.uri : '' }}
								resizeMode="cover"
							/>
						</TouchableOpacity>
					) : firstAnswerData && typeOfAnswer === 'text' ? (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('SelectAnswer', {
									answerNumber: 'first',
								})
							}
							style={styles.selectMeButton}
						>
							<Text style={styles.buttonCaption}>{firstAnswerData}</Text>
						</TouchableOpacity>
					) : (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('SelectAnswer', {
									answerNumber: 'first',
								})
							}
							// onPress={this.callImagePicker}
							style={styles.answerBlock}
						>
							<Text style={styles.buttonCaption}>First Answer</Text>
						</TouchableOpacity>
					)}

					{/* second answer button */}
					{secondAnswerData && typeOfAnswer === 'image' ? (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('SelectAnswer', {
									answerNumber: 'second',
								})
							}
							style={styles.answerImageWrapper}
						>
							<Image
								style={styles.meImage}
								source={{
									uri: secondAnswerData.uri ? secondAnswerData.uri : '',
								}}
								resizeMode="cover"
							/>
						</TouchableOpacity>
					) : secondAnswerData && typeOfAnswer === 'text' ? (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('SelectAnswer', {
									answerNumber: 'second',
								})
							}
							style={styles.selectMeButton}
						>
							<Text style={styles.buttonCaption}>{secondAnswerData}</Text>
						</TouchableOpacity>
					) : (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('SelectAnswer', {
									answerNumber: 'second',
								})
							}
							// onPress={this.callImagePicker}
							style={styles.answerBlock}
						>
							<Text style={styles.buttonCaption}>Second Answer</Text>
						</TouchableOpacity>
					)}
				</View>
			</View>
		</ScrollView>
	)
}

export default SetCompare
