import { GENERAL_SEARCHBOX_DBLIST } from './API'

const NoRecord = [
	{
		component: 'Layout',
		children: [
			{
				component: 'SummaryLayout',
				data: {
					application: 'UNION_VIEW',
					generalSearchBox: {
						application: 'UNION_VIEW',
						breadcrumbs: ['Summary'],
						heading: 'Explore our collections',
						placeholder: 'Search By Keyword',
						databaseList: GENERAL_SEARCHBOX_DBLIST,
						helpText: {
							link: 'https://diefenbunker.ca/collections/?utm_source=minisis&utm_medium=referral&utm_campaign=online_listing',
							description:
								"Didn't find what you're looking for? Please try another search term or contact the Diefenbunker team.",
						},
					},
					sortOptions: true,
					filter: [],
					defaultView: 'list',
				},
			},
		],
	},
]
export default NoRecord
