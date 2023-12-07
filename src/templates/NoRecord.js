const NoRecord = [
  {
    component: "Layout",
    children: [
      {
        component: "SimpleSearchBanner",
        data: {
          searchURL:
            "/scripts/mwimain.dll?UNIONSEARCH&SIMPLE_EXP=Y&KEEP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&language=144&REPORT=WEB_UNION_SUM",

          heading: "No results have been found",
          description: "Sorry, we couldn't find any records for your search",
          bannerCarousel: [
            "/assets/images/artifact.jpg"
          ],
        },
      },
    ],
  },
];
export default NoRecord;
