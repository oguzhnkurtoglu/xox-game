const Log = ({ log }) => {
	return (
		<ol id='log'>
			{log.map((item, index) => (
				<li
					className='highlighted'
					key={index}
				>
					{item}
				</li>
			))}
		</ol>
	)
}

export default Log
