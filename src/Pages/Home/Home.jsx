import TabCompo from "../../Components/TabCompo";
import useTitle from "../../Hooks/UseTitle";
import ExtraSection2 from "./ExtraSections/ExtraSection2";
import ExtraSections from "./ExtraSections/ExtraSections";
import Gallery from "./Gallery/Gallery";
import Header from "./Header/Header";
import NewCollection from "./NewCollection/NewCollection";
import SocialConnect from "./SocialConnect/SocialConnect";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Header />
      <div className="max-w-[1240px] mx-auto">
        <Gallery />
        <TabCompo />
        <div className="max-w-[1100px] mx-auto">
          <NewCollection />
        </div>
        <ExtraSections/>
        <ExtraSection2/>
        <SocialConnect />
      </div>
    </div>
  );
};

export default Home;
