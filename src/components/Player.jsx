import { useState } from 'react'

const Player = ({ name, symbol, isActive }) => {
	const [edit, setEdit] = useState(false)
	const [defaultName, setDefaultName] = useState(name)

	const handleClick = () => {
		setEdit((prev) => !prev)
	}

	return (
		<li className={isActive ? 'active' : null}>
			<span className='player'>
				{edit ? (
					<input
						type='text'
						value={defaultName}
						onChange={(e) => setDefaultName(e.target.value)}
					/>
				) : (
					<span className='player-name'>{defaultName}</span>
				)}
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button
				onClick={handleClick}
				className='edit-button'
			>
				{edit ? 'Save' : 'Edit'}
			</button>
		</li>
	)
}

export default Player
