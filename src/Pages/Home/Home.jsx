import About from "./About";
import Banner from "./Banner";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-5/6 mx-auto">
        <About></About>
        <FAQ></FAQ>
      </div>
    </div>
  );
};

export default Home;
