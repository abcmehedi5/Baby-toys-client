import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ImageGallery from "../ImageGallery/ImageGallery";
import ToysTab from "../ToysTab/ToysTab";
import Feedback from "../Feedback/Feedback";
import AOS from "aos";
import "aos/dist/aos.css";
import useTitle from "../../../CustomHook/useTitle";
import Subscribe from "../Subscribe/Subscribe";
const Home = () => {
  useTitle('Home')
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <ToysTab></ToysTab>
      <ImageGallery></ImageGallery>
      <Feedback></Feedback>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
