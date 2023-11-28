import {
  DESCRIPTION_SUMMARY_FIELD,
  GENERAL_SEARCHBOX_DBLIST,
  MEDIA_THUMBNAIL_FIELD,
} from "./API";

const Summmary = [
  {
    component: "Layout",
    data: {
      active: "Archives",
    },
    children: [
      {
        component: "SummaryLayout",
        data: {
          application: "DESCRIPTION",
          generalSearchBox: {
            application: "DESCRIPTION",
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
          displayField: [
            {
              database: "DESCRIPTION",
              fields: DESCRIPTION_SUMMARY_FIELD,
            },
          ],
          defaultView: "list",
        },
      },
    ],
  },
];

export default Summmary;
