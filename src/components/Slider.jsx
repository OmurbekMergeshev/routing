import React from 'react';

import Slider from 'react-slick';



const SliderPage = () => {
  const images = [
    {
      id: 1,
      url: 'https://picsum.photos/800/400?random=1',
      alt: 'Random Image 1',
      title: 'Title 1',
    },
    {
      id: 2,
      url: 'https://picsum.photos/800/400?random=2',
      alt: 'Random Image 2',
      title: 'Title 2',
    },
    {
      id: 3,
      url: 'https://picsum.photos/800/400?random=3',
      alt: 'Random Image 3',
      title: 'Title 3',
    },
    {
      id: 4,
      url: 'https://picsum.photos/800/400?random=4',
      alt: 'Random Image 4',
      title: 'Title 4',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image.id}>
          <div className="image-container">
            <img src={image.url} alt={image.alt} />
            <h2>{image.title}</h2>
          </div>
        </div>
      ))}
    </Slider>
  );
};



export default SliderPage;
