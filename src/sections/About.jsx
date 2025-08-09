import { useState } from 'react';
import Globe from 'react-globe.gl';
import { aboutMe } from '../constants/index.js';
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { lang, toggleLang } = useLanguage();
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('ruksia.prom97@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      {
        aboutMe.map((box, index) => (
          <div key={index} className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
              <div className="grid-container">
                <div className='pl-5 pr-5 sm:pl-6 sm:pr-6'>
                  <img src="./assets/grid1.png" alt="grid-1" className="rounded-md w-full sm:h-[276px] h-fit" />
                </div>
                {
                  box.box1.map((box1, index1) => (
                    <div key={index1}>
                      <p className="grid-headtext">{lang === 'th' ? box1.titleTh : box1.titleEn}</p>
                      <p className="grid-subtext">
                        {lang === 'th' ? box1.descTh : box1.descEn}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            <div className="col-span-1 xl:row-span-3">
              <div className="grid-container">
                <img src="./assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
                {
                  box.box2.map((box2, index2) => (
                    <div key={index2}>
                      <p className="grid-headtext">{lang === 'th' ? box2.titleTh : box2.titleEn}</p>
                      <p className="grid-subtext">
                        {lang === 'th' ? box2.descTh : box2.descEn}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            <div className="col-span-1 xl:row-span-4">
              <div className="grid-container">
                <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                  <Globe
                    height={326}
                    width={326}
                    backgroundColor="rgba(0, 0, 0, 0)"
                    backgroundImageOpacity={0.5}
                    showAtmosphere
                    showGraticules
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
                  />
                </div>
                {
                  box.box3.map((box3, index3) => (
                    <div key={index3}>
                      <p className="grid-headtext">{lang === 'th' ? box3.headerTh : box3.headerEn}</p>
                      <p className="grid-subtext">{lang === 'th' ? box3.descTh : box3.descEn}</p>
                    </div>
                  ))}
              </div>
            </div>

            <div className="xl:col-span-2 xl:row-span-3">
              <div className="grid-container">
                <img src="./assets/grid3.png" alt="grid-3" className="rounded-md w-full sm:h-[266px] h-fit object-contain bg-black" />
                {
                  box.box4.map((box4, index4) => (
                    <div key={index4}>
                      <p className="grid-headtext">{lang === 'th' ? box4.titleTh : box4.titleEn}</p>
                      <p className="grid-subtext">
                        {lang === 'th' ? box4.descTh : box4.descEn}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            <div className="xl:col-span-1 xl:row-span-2">
              <div className="grid-container">
                <img
                  src="./assets/grid4.png"
                  alt="grid-4"
                  className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                />

                <div className="space-y-2">
                  {
                    box.box5.map((box5, index5) => (
                      <p key={index5} className="grid-headtext text-center">{lang === 'th' ? box5.headerTh : box5.headerEn}</p>
                    ))}
                  <div className="copy-container" onClick={handleCopy}>
                    <img src={hasCopied ? './assets/tick.svg' : './assets/copy.svg'} alt="copy" />
                    <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-black">ruksina.prom97@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default About;
