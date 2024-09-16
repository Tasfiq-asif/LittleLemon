

import Banner from "../../components/Banner/Banner";
import Reviews from "../../components/Reviews/Reviews";

import Weekspecial from "../../components/WeekSpecial/Weekspecial";


const Home = () => {
    return (
      <div className="space-y-10">
        <Banner />
        <Weekspecial />
        <Reviews />

      </div>
    );
};

export default Home;