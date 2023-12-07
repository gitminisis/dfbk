import {

  DESCRIPTION_OVERVIEW_DETAIL_FIELD,
  COLLECTIONS_OVERVIEW_DETAIL_FIELD,
  COLLECTIONS_CHENHALL_DETAIL_FIELD,
  GENERAL_SEARCHBOX_DBLIST,
} from "./API";

import detailJson from "../templates/json/detail-fields/data.json";
import { jsonToFields } from "../utils/functions";
let displayFields = jsonToFields(detailJson);
const Detail = [
  {
    component: "Layout",
    children: [
      {
        component: "DetailLayout",
        data: {
          generalSearchBox: {
            application: "UNION_VIEW",
            breadcrumbs: ["Summary", "Detail"],
            heading: "Explore our collections",
            placeholder: "Search By Keyword",
            databaseList: GENERAL_SEARCHBOX_DBLIST,
            helpText: {
              link: "https://diefenbunker.ca/collections/?utm_source=minisis&utm_medium=referral&utm_campaign=online_listing",
              description:
                "Didn't find what you're looking for? Please try another search term or contact the Diefenbunker team.",
            },
          },
          generalSection: {
            displayFields: [...displayFields],
            children: [
              {
                component: "DescriptionTree",
                data: {
                  title: "Full Collection List",
                  displayDatabase: ["DESCRIPTION"],
                },
              },
              {
                component: "ContactUsModalForm",
                data: {
                  displayDatabase: ["DESCRIPTION", "COLLECTIONS_WEB"],
                  description:
                    "We're always looking to improve our records. If you have information about a record or think we've made a mistake, contact us. You can also order a copy of the record by clicking the button below.",
                },
              },
            ],
          },
          detailSection: {
            displayFields: [
              {
                database: "COLLECTIONS_WEB",
                section: [
                  {
                    title: "Overview",
                    fields: COLLECTIONS_OVERVIEW_DETAIL_FIELD,
                  },
                  {
                    title: "Chenhall",
                    fields: COLLECTIONS_CHENHALL_DETAIL_FIELD,
                  },
                ],
              },
              {
                database: "DESCRIPTION",
                section: [
                  {
                    title: "Overview",
                    fields: DESCRIPTION_OVERVIEW_DETAIL_FIELD,
                  },
                ],
              },
            ],
          },
        },
      },
    ],
  },
];

export default Detail;
