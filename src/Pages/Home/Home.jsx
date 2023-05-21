import TabCompo from "../../Components/TabCompo";
import useTitle from "../../Hooks/UseTitle";
import Gallery from "./Gallery/Gallery";
import Header from "./Header/Header";
import NewCollection from "./NewCollection/NewCollection";
import SocialConnect from "./SocialConnect/SocialConnect";

const Home = () => {
  useTitle("Home")
  return (
    <div>
      <Header />
      <Gallery />
      <TabCompo />
      <NewCollection />
      <SocialConnect />
    </div>
  );
};

export default Home;
