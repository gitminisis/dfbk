import { Container, Box, AppBar, Link } from '@mui/material'
import { styled } from '@mui/material/styles'

export const AppbarRoot = styled(AppBar)(({ scroll, theme }) => ({
	backgroundColor: 'white',
	boxShadow: 'none',
	width: '100vw',
	transition: 'all 300ms ease-out',
	height: '85px',
	justifyContent: 'center',
	opacity: scroll === 0 ? 1 : 0.95,
	left: 0,
	right: 0,
}))
export const AppbarContainer = styled(Container)(() => ({
	display: 'flex',
	width: '100%',
	justifyContent: 'space-between',
	height: '60px',
}))

export const AppbarLogoBox = styled(Link)((_) => ({
	display: 'flex',
	alignItems: 'center',
	cursor: 'pointer',
}))

export const AppbarLogo = styled(Box)(() => ({
	width: '16rem',
	maxWidth: '280px',
	marginRight: '10px',
}))

export const AppbarLinkBox = styled(Box)(() => ({
	justifyContent: 'end',
	width: '50%',
	alignItems: 'center',
	cursor: 'pointer',
}))

export const AppbarLink = styled(Link)(({ theme }) => ({
	fontWeight: 'bold',
	color: 'black',
	marginLeft: '10px',
	marginRight: '10px',
	textDecoration: 'none',
	'&:hover': {
		color: theme.palette.primary.main,
	},
}))
