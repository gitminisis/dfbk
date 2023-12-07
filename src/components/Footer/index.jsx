import { Typography, Link, Box, Container, Grid, Divider } from '@mui/material'
import { PropTypes } from 'prop-types'
export const Copyright = (props) => {
	const { copyrightURL, siteName, url } = props
	return (
		<Typography
			variant="p"
			component="div"
			style={{ textAlign: 'center', color: 'white' }}>
			{'© '} {new Date().getFullYear()} {siteName}. All Right Reserved.
		</Typography>
	)
}

const Footer = (props) => {
	const { siteName, logo, logo2, baseURL, links } = props
	return (
		<Box
			component="footer"
			sx={{
				py: 3,
				px: 2,
				mt: 'auto',
				backgroundColor: (theme) => theme.palette.primary.main,
				height: 'auto',
				minHeight: '200px',
				color: 'white',
				paddingTop: '80px',

				paddingBottom: '20px',
			}}>
			<Container>
				<Grid container spacing={2}>
					{/* <Grid
            item
            xs={12}
            md={4}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Link
              href={baseURL}
              underline="none"
              sx={{
                color: "white",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              variant={"h5"}
            >
              <Box
                component="img"
                sx={{ mr: "10px" }}
                src={logo}
                alt={`${siteName} logo`}
              ></Box>
              <span> {siteName}</span>
            </Link>
          </Grid> */}

					<Grid item xs={12} md={9} container>
						{links.map((link, index) => (
							<Grid
								key={`FooterLink-${index}`}
								item
								xs={3}
								sx={{
									marginBottom: '20px',
									textAlign: 'center',
								}}>
								<Link
									style={{
										fontWeight: 'bold',
										fontSize: '1rem',
										cursor: 'pointer',
									}}
									variant={'h5'}
									underline="hover"
									href={link.url}
									color="inherit"
									index={`FooterLink-${index}`}>
									{link.title}
								</Link>
							</Grid>
						))}
					</Grid>

					<Grid item xs={12} md={3} sx={{ textAlign: 'left' }}>
						<img
							style={{ maxWidth: '280px' }}
							src={logo2}
							alt="https://diefenbunker.ca/"
						/>

						<p>Software powered by:</p>
						<img
							src={'https://www.minisisinc.com/img/logo.png'}
							width="120px"
							alt="MINISIS inc."
						/>
					</Grid>
				</Grid>
				<Divider
					flexItem
					sx={{ marginTop: '40px', marginBottom: '20px' }}
				/>
				<Typography
					variant="p"
					component="div"
					style={{ textAlign: 'center', color: 'white' }}>
					Learn more about the{' '}
					<Link
						color="inherit"
						variant="p"
						component="a"
						href={
							'https://diefenbunker.ca/?utm_source=minisis&&utm_medium=referral&&utm_campaign=online_listing'
						}>
						Diefenbunker: Canada's Cold War Museum
					</Link>
				</Typography>
				<Copyright
					url={baseURL}
					copyrightURL={baseURL}
					siteName={siteName}
				/>
			</Container>
		</Box>
	)
}

Footer.propTypes = {
	logo: PropTypes.string,
	siteName: PropTypes.string,
	baseURL: PropTypes.string,
	logo2: PropTypes.string,
}

Copyright.propTypes = {}
export default Footer
