import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera , Html} from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';
import MiniRobot from '../components/MiniRobot.jsx';
import downArrow from '../../public/assets/down_arrow.png';
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
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <group>
              {/* <Target position={sizes.targetPosition} /> */}
              {/* <ReactLogo position={sizes.reactLogoPosition} /> */}\
              {/* <RobotPlayground position={sizes.robotPlaygroundPosition} /> */}
              {/* <Rings position={sizes.ringPosition} /> */}
              <Cube position={sizes.cubePosition} />
              <MiniRobot position={sizes.miniRobotPosition}/>
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
