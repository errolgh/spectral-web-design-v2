import React from 'react'

// import DeepEarthD from '../images/desktop/image-deep-earth.jpg'
// import DeepEarthM from '../images/mobile/image-deep-earth.jpg'

// import DeepEarthD from '../images/desktop/image-deep-earth.jpg'
// import DeepEarthM from '../images/mobile/image-deep-earth.jpg'

// import DeepEarthD from '../images/desktop/image-deep-earth.jpg'
// import DeepEarthM from '../images/mobile/image-deep-earth.jpg'

// import DeepEarthD from '../images/desktop/image-deep-earth.jpg'
// import DeepEarthM from '../images/mobile/image-deep-earth.jpg'

// not in use
export default function GalleryTall() {
  return (
    <section id="creations">
      {/*  Creations Container  */}
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        {/*  Creations Header  */}
        <div className="flex justify-center mb-20 md:justify-between md">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
            Our Creations
          </h2>
          <button className="hidden btn md:block">See All</button>
        </div>
        {/*  Items Container 1 */}
        <div className="item-container">
          {/*  Item 1  */}
          <div className="group item">
            {/*  Desktop Image  */}
            <img
              src="images/desktop/image-deep-earth.jpg"
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/*  Mobile Image  */}
            <img
              src="images/mobile/image-deep-earth.jpg"
              alt=""
              className="w-full md:hidden"
            />
            {/*  Item Gradient  */}
            <div className="item-gradient group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
            {/*  Item Text  */}
            <h5>Deep Earth</h5>
          </div>

          {/*  Item 2  */}
          <div className="group item">
            {/*  Desktop Image  */}
            <img
              src="images/desktop/image-night-arcade.jpg"
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/*  Mobile Image  */}
            <img
              src="images/mobile/image-night-arcade.jpg"
              alt=""
              className="w-full md:hidden"
            />
            {/*  Item Gradient  */}
            <div className="item-gradient group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
            {/*  Item Text  */}
            <h5>Night Arcade</h5>
          </div>
          {/*  Item 3  */}
          <div className="group item">
            {/*  Desktop Image  */}
            <img
              src="images/desktop/image-soccer-team.jpg"
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/*  Mobile Image  */}
            <img
              src="images/mobile/image-soccer-team.jpg"
              alt=""
              className="w-full md:hidden"
            />
            {/*  Item Gradient  */}
            <div className="item-gradient group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
            {/*  Item Text  */}
            <h5>Soccer Team VR</h5>
          </div>
          {/*  Item 4  */}
          <div className="group item">
            {/*  Desktop Image  */}
            <img
              src="images/desktop/image-grid.jpg"
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/*  Mobile Image  */}
            <img
              src="images/mobile/image-grid.jpg"
              alt=""
              className="w-full md:hidden"
            />
            {/*  Item Gradient  */}
            <div className="item-gradient group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
            {/*  Item Text  */}
            <h5>The Grid</h5>
          </div>
        </div>

        {/*  Bottom Button Container  */}
        <div className="flex justify-center mt-10 md:hidden">
          <button className="btn w-full md:hidden">See All</button>
        </div>
      </div>
    </section>
  )
}
