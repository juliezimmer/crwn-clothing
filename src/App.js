import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";

import Directory from "./components/directory/directory.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};
// array of objects //
const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "Womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    title: "Mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

const App = () => {
  return (
    <Directory categories={categories} />

    // <Routes>
    //   <Route path="/" element={<Navigation />}>
    //     <Route path="home" element={<Home />} />
    //     <Route path="shop" element={<Shop />} />
    //   </Route>
    // </Routes>
  );
};

export default App;
