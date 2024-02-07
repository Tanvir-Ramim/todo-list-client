import { Helmet } from "react-helmet-async";
import Banner from "../../components/banner/Banner";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div >
             <Helmet>
        <title>Task | Home</title>
       
      </Helmet>
            <Banner></Banner>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;