import "./App.css"
import Timer from "./timer/Timer"

function App() {
	return (
		<div className="App">
			<Timer duration={2 * 24 * 60 * 60 * 1000} />
		</div>
	)
}

export default App
