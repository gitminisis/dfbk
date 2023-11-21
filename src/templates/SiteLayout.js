import siteLayout from "./json/site-layout/data.json";
const SiteLayout = {
  ...siteLayout[0],
  baseURL: "/",
  headerURL:"https://diefenbunker.ca/?utm_source=minisis&utm_medium=referral&utm_campaign=online_listing",
  virtualIncludePaths: "SURREY_OPAC",
  imageVirtualPath: "/SAMOA_IMAGES/",
  imageVirtualDir: "[SAMOA_IMAGES]",
  application: "UNION_VIEW",
};

export default SiteLayout;
