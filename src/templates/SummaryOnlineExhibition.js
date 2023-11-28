import {
  COLLECTIONS_SUMMARY_FIELD,
  DESCRIPTION_SUMMARY_FIELD,
  MEDIA_THUMBNAIL_FIELD,
  GENERAL_SEARCHBOX_DBLIST,
} from "./API";

const Summary = [
  {
    component: "Layout",
    children: [
      {
        component: "SummaryOnlineExhibitionLayout",
        data: {
          application: "UNION_VIEW",
          generalSearchBox: {
            application: "UNION_VIEW",
            breadcrumbs: ["Summary"],
            heading: "Explore our collections",
            placeholder: "Search By Keyword",
            databaseList: GENERAL_SEARCHBOX_DBLIST,
            helpText: {
              link: "https://diefenbunker.ca/collections/?utm_source=minisis&utm_medium=referral&utm_campaign=online_listing",
              description:
                "Didn’t find what you’re looking for? Please try another search term or contact the Diefenbunker team.",
            },
          },
          sortOptions: true,
          filter: [],
          thumbnailData: MEDIA_THUMBNAIL_FIELD,
          defaultView: "grid",
          displayField: [
            {
              database: "COLLECTIONS_WEB",
              fields: COLLECTIONS_SUMMARY_FIELD,
            },
            {
              database: "ONLINE_EXHIBITION_VIEW",
              fields: COLLECTIONS_SUMMARY_FIELD,
            },
            {
              database: "DESCRIPTION",
              fields: DESCRIPTION_SUMMARY_FIELD,
            },
          ],
        },
      },
    ],
  },
];

export default Summary;
