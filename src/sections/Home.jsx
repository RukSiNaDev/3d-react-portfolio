import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Computer } from "../components/Computer.jsx";
import CanvasLoader from "../components/Loading.jsx";
import { Suspense } from "react";
import { Leva } from "leva";
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';
import { Target } from "../components/Target.jsx";
import { ReactLogo } from "../components/ReactLogo.jsx";
import { JSLogo } from "../components/JSLogo.jsx";
import HomeCamera from "../components/HomeCamera.jsx";


const Home = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-black text-center font-generalsans">
          Hi, I am Ruksina <span className="waving-hand">🍅</span><span className="waving-hand">🥑</span><span className="waving-hand">🍆</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
      </div>

      <div className="w-full h-full absolute inset-0 pt-40 sm:pt-30">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <HomeCamera isMobile={isMobile}>
              <Computer scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0, -0.3, 0]} />
            </HomeCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <JSLogo position={sizes.jsPosition} />
            </group>
            <OrbitControls enableZoom={false} enablePan={false} />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>


        </Canvas>
      </div>
    </section>
  );
};

export default Home;
