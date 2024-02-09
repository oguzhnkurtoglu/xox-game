import { useState } from 'react'
import orjGameMap from '../GameMap'

const GameBoard = ({ currentPlayer, activePlayer, addLog }) => {
	const [GameMap, setGameMap] = useState(orjGameMap)
	const copiedGameMap = GameMap.map((innerArray) => [...innerArray])

	const play = (rowIdx, cellIdx, activePlayer) => {
		copiedGameMap[rowIdx][cellIdx] = activePlayer
		setGameMap(() => copiedGameMap)
		currentPlayer()
		const log = `${activePlayer} Played to ${rowIdx} ${cellIdx}`
		addLog(log)
	}
	return (
		<ol id='game-board'>
			{GameMap.map((row, rowIdx) => (
				<li key={rowIdx}>
					<ol>
						{row.map((playerSymbol, cellIdx) => (
							<li key={cellIdx}>
								<button onClick={() => play(rowIdx, cellIdx, activePlayer)}>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	)
}

export default GameBoard
