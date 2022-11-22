import React, { useEffect } from 'react'
import Title from "./components/Title"
import Content from "./components/Content"
import "./App.css"

function App() {
    useEffect((): void => {
        document.title = "Git Stare - Snoop On GitHub Users"
    }, [])
	
	
	return (
		<>
			<Title />
			<Content />
		</>
	)
}

export default App
