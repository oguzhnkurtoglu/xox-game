import { useState } from 'react'
import orjGameMap from '../GameMap'

const GameBoard = () => {
	const [GameMap, setGameMap] = useState(orjGameMap)

	const play = (row, cell) => {
		setGameMap((prev) => {
			const newGameMap = prev.map((item) => [...item])
			newGameMap[row][cell] = 'X'
			return newGameMap
		})
	}

	return (
		<ol id='game-board'>
			{GameMap.map((row, rowIdx) => (
				<li key={rowIdx}>
					<ol>
						{row.map((playerSymbol, cellIdx) => (
							<li key={cellIdx}>
								<button onClick={() => play(rowIdx, cellIdx)}>
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
