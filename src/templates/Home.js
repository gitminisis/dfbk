import homeJSON from "./json/union-home/data.json";
// let data = jsonToTemplate(homeJSON);
const Home = [
  {
    component: "Layout",
    data: {
      active: "COLLECTIONS",
    },
    children: [...homeJSON],
  },
];
export default Home;
