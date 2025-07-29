
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import ShoeCard from "../components/ShoeCard";
import { useState, useEffect } from "react";
import { Animation } from "../components/Animation";
import Counter from "../components/Counter";
import { motion } from "framer-motion";


const FadeIn = ({ children, duration = 2, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span
      style={{
        opacity: isVisible ? 1 : 0,
        transition: `opacity ${duration}s ease-in`
      }}
    >
      {children}
    </span>
  );
};

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <Animation delay={0.4}>
      <section
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container z-10"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p className="text-xl font-montserrat text-coral-red pt-2">
            Our Summer Collection
          </p>
          <h1 className="mt-6 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="xl:bg-white/70 dark:xl:bg-dark-primary/70 xl:whitespace-nowrap relative z-10 pr-10">
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red mt-2 inline-block">
              Nike
            </span>
            Shoes
          </h1>
          <p className="font-montserrat text-slate-gray dark:text-light-gray text-lg max-sm:text-[16px] leading-8 my-6 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <Button label="Shop now" iconURL={arrowRight} />
          <div className="flex justify-start items-start flex-wrap mt-8 w-full gap-16 max-sm:gap-6">
            {statistics.map((stat, index) => (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold">
                  {stat.value === "1k+" ? (
                    <FadeIn delay={index * 0.3} duration={4}>
                      {stat.value}
                    </FadeIn>
                  ) : (
                    <Counter
                      end={parseInt(stat.value)} // 500, 250
                      suffix={stat.value.includes("k+") ? "k+" : "+"}
                      delay={index * 0.3} // 0, 0.3, 0.6
                      duration={4}
                    />
                  )}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray dark:text-light-gray">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-hero dark:bg-hero-dark bg-cover bg-center">
          <motion.img
            key={bigShoeImg}
            src={bigShoeImg}
            alt="shoe collection"
            width={500}
            height={610}
            className="object-contain relative z-10"
            initial={{ scale: 1 }}
            animate={{ scale: [1.2, 1] }}
            transition={{ duration: 1, times: [0, 0.5, 1], ease: "easeOut" }}
          />
          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe) => (
              <div key={shoe.bigShoe}>
                <ShoeCard
                  imgURL={shoe}
                  changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Animation>
  );
};

export default Hero;