import React from "react";

import BlogCarousel from "./BlogCarousel/BlogCarousel";
import Trending from "./Trending/Trending";
import ContactForm from './ContactForm/ContactForm';
import FeaturedNews from "./FeaturedNews/FeaturedNews";

const Blogs = () => {
  return (
    <>
      <BlogCarousel/>
      <Trending />
      <ContactForm />
      <FeaturedNews />
    </>
  );
};

export default Blogs;
