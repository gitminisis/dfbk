import HomeTemplate from './Home'
import ArchivesSearchTemplate from './ArchiveSearch'
import ArtifactSearchTemplate from './ArtifactSearch'
import NotFoundPageTemplate from './404'
import FAQ from './FAQ'
import Summary from './Summary'
import SummaryArchives from './SummaryArchives'
import SummaryArtifact from './SummaryArtifact'
import Detail from './Detail'
import SummaryBookmark from './SummaryBookmark'
import NoSession from './NoSession'
import NoRecord from './NoRecord'
import SummaryNoRecord from './SummaryNoRecord'
import NoBookmark from './NoBookmark'
import SummaryOnlineExhibition from './SummaryOnlineExhibition'
import Admin from './Admin'

const Routes = [
	{
		path: '',
		template: HomeTemplate,
	},

	{
		path: 'archives',
		template: ArchivesSearchTemplate,
	},
	{
		path: 'artifact',
		template: ArtifactSearchTemplate,
	},
	{
		path: 'FAQ',
		template: FAQ,
	},
	{
		path: 'summary',
		template: Summary,
	},
	{
		path: 'summary-onlineExhibitions',
		template: SummaryOnlineExhibition,
	},
	{
		path: 'summary-artifact',
		template: SummaryArtifact,
	},
	{
		path: 'summary-archives',
		template: SummaryArchives,
	},
	{
		path: 'summary-bookmark',
		template: SummaryBookmark,
	},
	{
		path: 'detail',
		template: Detail,
	},
	{
		path: 'no-session',
		template: NoSession,
	},
	{
		path: 'no-record',
		template: SummaryNoRecord,
	},
	{
		path: 'no-bookmark',
		template: NoBookmark,
	},
	{
		path: 'admin',
		template: Admin,
	},
	{
		path: '404',
		template: NotFoundPageTemplate,
	},
]

export default Routes
