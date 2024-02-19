import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32
     md:gap28 lg:py-20 xl:flex-row border-2 border-red-500">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image 
          src="/camp.svg" 
          alt="tent image" 
          height={50} 
          width={50} 
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
           We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature.
           We can help you on an adventure around the world in just one app.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image
                src="star.svg"
                key={index}
                alt="star"
                height={24}
                width={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row">
          <Button 
            type="button"
            title="Download App"
            variant="btn_green"
          />
          <Button 
            type="button"
            title="How We Work"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>

      </div>
      <div className="hero-map"></div>

      <div className="relative flex flex-1 items start border-2 border-blue-500">
        <div className="relative z-20 w-[268px] flex flex-col gap-8 bg-green-90 rounded-3xl px-7 py-8">
          <p className="text-gray-30">Location</p>
          <h1 className="text-color-white">Aguas Calientes</h1>
          <div className="flex flex-row">
            <div>
              <p className="text-gray-30">Distance</p>
              <p>Location</p>
            </div>
            <div>
              <p className="text-gray-30">Elevation</p>
              <p>2.040 km</p>
            </div>
          </div>
        </div>
      </div>

      {/* Location display box */}
      {/* Not real sure how that line is getting in there. */}
    </section>

    )
}

export default Hero