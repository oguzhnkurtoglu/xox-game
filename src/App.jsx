import { useState } from 'react'
import GameBoard from './components/GameBoard'
import Player from './components/Player'
import Log from './components/Log'

function App() {
	const [isActive, setActive] = useState('X')
	const [log, setLog] = useState([])

	let addLog = (msg) => setLog((prev) => [...prev, msg])
	let currentPlayer = () => setActive((prev) => (prev === 'X' ? 'O' : 'X'))
	return (
		<main>
			<div id='game-container'>
				<ol
					id='players'
					className='highlight-player'
				>
					<Player
						isActive={isActive === 'X'}
						name='Player-1'
						symbol='X'
					/>
					<Player
						isActive={isActive === 'O'}
						name='Player-2'
						symbol='O'
					/>
				</ol>
				<GameBoard
					addLog={addLog}
					activePlayer={isActive}
					currentPlayer={currentPlayer}
				/>
			</div>
			<Log log={log} />
		</main>
	)
}

export default App
