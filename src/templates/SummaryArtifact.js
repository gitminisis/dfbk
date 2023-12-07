import {
	COLLECTIONS_SUMMARY_FIELD,
	MEDIA_THUMBNAIL_FIELD,
	GENERAL_SEARCHBOX_DBLIST,
} from './API'

const Summary = [
	{
		component: 'Layout',
		data: {
			active: 'Artifacts',
		},
		children: [
			{
				component: 'SummaryLayout',
				data: {
					application: 'COLLECTIONS_WEB',
					generalSearchBox: {
						application: 'COLLECTIONS_WEB',
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
					thumbnailData: MEDIA_THUMBNAIL_FIELD,
					displayField: [
						{
							database: 'COLLECTIONS_WEB',
							fields: COLLECTIONS_SUMMARY_FIELD,
						},
					],
					defaultView: 'list',
				},
			},
		],
	},
]

export default Summary
