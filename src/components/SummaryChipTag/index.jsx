import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

export default function index() {
	const handleClick = () => {
		console.info('You clicked the Chip.')
	}

	return (
		<Stack direction="row" spacing={1}>
			<Chip label="Clickable" variant="outlined" onClick={handleClick} />
		</Stack>
	)
}
