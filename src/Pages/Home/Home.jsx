import Gallery from "./Gallery/Gallery";
import Header from "./Header/Header";
import NewCollection from "./NewCollection/NewCollection";
import SocialConnect from "./SocialConnect/SocialConnect";

const Home = () => {
  return (
    <div>
      <Header />
      <Gallery/>
      <NewCollection />
      <SocialConnect />
    </div>
  );
};

export default Home;
