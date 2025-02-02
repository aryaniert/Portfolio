import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, useGLTF } from '@react-three/drei';

const MiniRobot = (props) => {
  const ref = useRef();
  const { nodes, materials } = useGLTF('/models/mini-robot.glb');
  return (
      <Float  dispose={null} floatIntensity={6}>
        <group  ref={ref} {...props} rotation={[0, -5, 0]} scale={0.003}>
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