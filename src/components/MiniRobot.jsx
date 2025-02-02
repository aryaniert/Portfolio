import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, useGLTF } from '@react-three/drei';

const MiniRobot = (props) => {
  const ref = useRef();
  const { nodes, materials } = useGLTF('/models/mini-robot.glb');
  const [mousePosition, setMousePosition] = useState({ x: 2, y: 0 });

  // Update mouse position on pointer move
  const handlePointerMove = (event) => {
    const { clientX, clientY } = event;
    const x = (clientX / window.innerWidth) * 4 - 1; // Normalize to [-1, 1]
    const y = -(clientY / window.innerHeight)* 4 + 1; // Normalize to [-1, 1]
    setMousePosition({ x, y });
  };

  // Smoothly interpolate rotation towards mouse position
  useFrame(() => {
    if (ref.current) {
      // Map mouse position to rotation angles
      const targetRotationY = mousePosition.x * Math.PI * 0.3; // Adjust sensitivity (Y-axis rotation)
      const targetRotationX = mousePosition.y * Math.PI * 0.0001; // Adjust sensitivity (X-axis rotation)

      // Smoothly interpolate rotation
      ref.current.rotation.x += (targetRotationX - ref.current.rotation.x) * 0.16;
      ref.current.rotation.y += (targetRotationY - ref.current.rotation.y) * 0.16;
    }
  });

  return (
      <Float onPointerMove={handlePointerMove} dispose={null} floatIntensity={20}>
        <group  ref={ref} {...props}  scale={0.007}>
          <group position={[-195.6908, -57.8547, -83.6315]} rotation={[-1.8648, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.Cylinder007_Name_Orange_0.geometry}
              material={materials.Name_Orange}
            />
            <mesh geometry={nodes.Cylinder007_Lights_2_0.geometry} material={materials.Lights_2} />
          </group>
          <group position={[-195.6907, -61.8019, -96.6698]} rotation={[-1.8648, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube003_Base_Black_0.geometry} material={materials.Base_Black} />
            <mesh geometry={nodes.Cube003_Lights_0.geometry} material={materials.Lights} />
          </group>
          <group position={[0, -106.6169, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Base002_Footer_White_0.geometry} material={materials.Footer_White} />
            <mesh geometry={nodes.Base002_Base_Black_0.geometry} material={materials.Base_Black} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.Dyblikat_Yshi_Base_Black_0.geometry}
              material={materials.Base_Black}
            />
            <mesh geometry={nodes.Dyblikat_Yshi_Lights_2_0.geometry} material={materials.Lights_2} />
          </group>
          <mesh
            geometry={nodes.Base_Base_Black_0.geometry}
            material={materials.Base_Black}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder002_Footer_White_0.geometry}
            material={materials.Footer_White}
            position={[-140.4952, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder003_Footer_White_0.geometry}
            material={materials.Footer_White}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder004_Base_Black_0.geometry}
            material={materials.Base_Black}
            position={[0, 0.083, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cube001_Footer_White_0.geometry}
            material={materials.Footer_White}
            position={[-195.3212, 1.9096, -0.553]}
            rotation={[-1.8648, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder005_Base_Black_0.geometry}
            material={materials.Base_Black}
            position={[-195.718, -23.4608, 7.1275]}
            rotation={[-1.8648, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cube002_Footer_White_0.geometry}
            material={materials.Footer_White}
            position={[-195.5664, -39.8591, 12.0919]}
            rotation={[-1.8648, 0, 0]}
            scale={[118.3269, 100, 100]}
          />
          <mesh
            geometry={nodes.Cylinder006_Base_Black_0.geometry}
            material={materials.Base_Black}
            position={[-195.6908, -35.7153, -10.4998]}
            rotation={[-1.8648, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder009_Footer_White_0.geometry}
            material={materials.Footer_White}
            position={[-195.6914, -51.0804, -126.7292]}
            rotation={[-1.2282, 0, 0]}
            scale={[73.7335, 66.9726, 73.7335]}
          />
          <mesh
            geometry={nodes.Dyblikat_Footer_White_0.geometry}
            material={materials.Footer_White}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Base001_Footer_White_0.geometry}
            material={materials.Footer_White}
            position={[0, -28.8773, -141.1582]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cube004_Lights_0.geometry}
            material={materials.Lights}
            position={[0, 61.5857, -122.0001]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={42.9594}
          />
          <mesh
            geometry={nodes.Dyblikat_Yshi_001_Name_Orange_0.geometry}
            material={materials.Name_Orange}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Dyblikat_Yshi_002_Name_Orange_0.geometry}
            material={materials.Name_Orange}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </Float>
  );
};

useGLTF.preload('/models/mini_robot.glb');

export default MiniRobot;