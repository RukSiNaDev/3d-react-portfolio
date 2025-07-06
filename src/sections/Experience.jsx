import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';
import ProgrammerShrimp from '../components/ProgrammerShrimp.jsx';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';

const Experience = () => {

  const [animationName, setAnimationName] = useState('idle');
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const saveFile = () => {
    fetch("/pdf/ruksina_resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL =
          window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "ruksina_resume.pdf";
        alink.click();
      });
    });
  }


  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <Suspense fallback={<CanvasLoader />}>
                {/* <Leva /> */}
                <ProgrammerShrimp scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0, -0.3, 0]} />
                <OrbitControls enableZoom={false} enablePan={false} />
                <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />
              </Suspense>

            </Canvas>

          </div>

          <div className="work-content ">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full rounded-md" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="flex m-5 items-center gap-2 cursor-pointer text-white-600 float-right"
              onClick={saveFile}>
               <img src="./assets/download.png" alt="arrow" className="w-5 h-5" />
              <p>Download My Resume</p>
          
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience