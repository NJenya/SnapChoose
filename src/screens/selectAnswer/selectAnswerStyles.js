import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		minHeight: '100%',
		padding: 36,
	},
	meImageWrapper: {
		width: '100%',
		height: 180,
	},
	meImage: {
		width: '100%',
		height: '100%',
	},
	meBlock: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
		paddingVertical: 40,
		borderWidth: 1,
		borderStyle: 'dotted',
		borderColor: '#ccc',
		marginBottom: 25,
	},
	selectMeButton: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
		paddingVertical: 20,
		borderWidth: 1,
		borderStyle: 'dotted',
		borderColor: '#ccc',
		marginBottom: 25,
	},
	buttonCaption: {
		fontSize: 28,
		fontWeight: 'bold',
	},
	cameraIcon: {
		width: 40,
		height: 40,
	},
	folderIcon: {
		width: 40,
		height: 40,
	},
	inputWrapper: {
		borderWidth: 1,
		borderColor: '#292929',
	},
	inputStyle: {
		height: 100,
		textAlignVertical: 'top',
	},
	sendIconWrapper: {
		position: 'absolute',
		bottom: 5,
		right: 5,
		zIndex: 1,
	},
	sendIcon: {
		width: 30,
		height: 30,
	},
})
