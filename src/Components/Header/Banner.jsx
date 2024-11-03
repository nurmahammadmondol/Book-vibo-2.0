import React from 'react';
import BannerImage from '../../assets/photo/books.jpg';

const Banner = () => {
  return (
    <div className="hero bg-base-200 my-8 py-10">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <img
          src={BannerImage}
          className="w-[400px] h-[300px] rounded-lg shadow-2xl"
        />
        <div>
          <div className="w-9/12">
            <h1 className="text-5xl font-bold ">
              Books to freshen up your bookshelf !
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-accent text-white font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
