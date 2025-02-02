import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera , OrbitControls } from '@react-three/drei';

import Rings from '../components/Rings.jsx';
import { calculateSizes } from '../constants/index.js';
import MiniRobot from '../components/MiniRobot.jsx';
import RobotPlayground from '../components/RobotPlayground.jsx';



const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Aryan <span className="waving-hand">👋</span>
        </p>
        {/* <p className="hero_tag text-gray_gradient">Building Products & Brands</p> */}
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={null}>
            <RobotPlayground position={[0, -1, 2]}/>
            <group>
              <Rings position={sizes.ringPosition} />
              <MiniRobot position={[5, 1.5, 0]}/>
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-0 right-0 w-full" 
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <a href="#about" className="relative w-fit">
          <img src='assets/down_arrow.png' alt='down_arrow' className='w-10 h-10'/>
        </a>
      </div>
    </section>
  );
};

export default Hero;
