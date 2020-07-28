import React from 'react'
import { StatusBar } from 'react-native'
import { AppContainer } from './routes'

const App = () => {
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<AppContainer />
		</>
	)
}

export default App
