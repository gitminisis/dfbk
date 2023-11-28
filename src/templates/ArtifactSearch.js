import json from "./json/collections-home/data.json";

const ArtifactSearch = [
  {
    component: "Layout",
    data: {
      active: "COLLECTIONS_WEB",
    },
    children: [...json],
  },
];

export default ArtifactSearch;
