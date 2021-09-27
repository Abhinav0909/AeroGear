/* eslint-disable react-hooks/rules-of-hooks */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: helijah (https://sketchfab.com/helijah)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/64bc0e98d56a4f88a2833dbefa2ca975
title: Grob G 115
*/
import React, { Suspense, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
    mesh_1: THREE.Mesh;
    mesh_2: THREE.Mesh;
    mesh_3: THREE.Mesh;
    mesh_4: THREE.Mesh;
    mesh_5: THREE.Mesh;
    mesh_6: THREE.Mesh;
    mesh_7: THREE.Mesh;
    mesh_8: THREE.Mesh;
    mesh_9: THREE.Mesh;
    mesh_10: THREE.Mesh;
    mesh_11: THREE.Mesh;
    mesh_12: THREE.Mesh;
    mesh_13: THREE.Mesh;
    mesh_14: THREE.Mesh;
    mesh_15: THREE.Mesh;
    mesh_16: THREE.Mesh;
    mesh_17: THREE.Mesh;
    mesh_18: THREE.Mesh;
    mesh_19: THREE.Mesh;
    mesh_20: THREE.Mesh;
    mesh_21: THREE.Mesh;
    mesh_22: THREE.Mesh;
    mesh_23: THREE.Mesh;
    mesh_24: THREE.Mesh;
    mesh_25: THREE.Mesh;
    mesh_26: THREE.Mesh;
    mesh_27: THREE.Mesh;
    mesh_28: THREE.Mesh;
    mesh_30: THREE.Mesh;
    mesh_31: THREE.Mesh;
    mesh_32: THREE.Mesh;
    mesh_33: THREE.Mesh;
    mesh_34: THREE.Mesh;
    mesh_35: THREE.Mesh;
    mesh_36: THREE.Mesh;
    mesh_37: THREE.Mesh;
    mesh_38: THREE.Mesh;
    mesh_39: THREE.Mesh;
    mesh_40: THREE.Mesh;
    mesh_41: THREE.Mesh;
    mesh_42: THREE.Mesh;
    mesh_43: THREE.Mesh;
    mesh_44: THREE.Mesh;
    mesh_45: THREE.Mesh;
    mesh_46: THREE.Mesh;
    mesh_47: THREE.Mesh;
    mesh_48: THREE.Mesh;
  };
  materials: {
    rougelampe: THREE.MeshStandardMaterial;
    transparent2: THREE.MeshStandardMaterial;
    transparent2_NONE: THREE.MeshStandardMaterial;
    ["transparent2_transpred.png"]: THREE.MeshStandardMaterial;
    ["transparent2_transpred.png.001"]: THREE.MeshStandardMaterial;
    DefaultWhite: THREE.MeshStandardMaterial;
    ["DefaultWhite_AI.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_ASI.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_Altimeter.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_BatteryGauge.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_BreakerLabels.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_DME.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_DME.png.001"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_EGT-OAT.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_ELT.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_FP-CHT.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_FuelGauge.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_GMeter.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_KI204.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_KMA26.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_KN53.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_KT76A.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_KX155A.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_MPFuel.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_MagneticCompass.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_OilGauge.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_PanelLabels.png"]: THREE.LineBasicMaterial;
    // ['DefaultWhite_PanelLabels.png']: THREE.MeshStandardMaterial
    ["DefaultWhite_RPM.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_SwitchPanel.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_Turn.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_VSI.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_WarningPanel.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_clock.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_interior.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_ka51b.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_numbers.png"]: THREE.MeshStandardMaterial;
    ["DefaultWhite_zkv500.png"]: THREE.MeshStandardMaterial;
    transparent: THREE.MeshStandardMaterial;
    transparent3: THREE.MeshStandardMaterial;
  };
};

function Model({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/grob_g_115/scene.gltf") as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.mesh_0.geometry}
          material={materials.rougelampe}
        />
        <mesh
          geometry={nodes.mesh_1.geometry}
          material={materials.transparent2}
        />
        <mesh
          geometry={nodes.mesh_2.geometry}
          material={materials.transparent2_NONE}
        />
        <mesh
          geometry={nodes.mesh_3.geometry}
          material={materials["transparent2_transpred.png"]}
        />
        <mesh
          geometry={nodes.mesh_4.geometry}
          material={materials["transparent2_transpred.png.001"]}
        />
        <mesh
          geometry={nodes.mesh_5.geometry}
          material={nodes.mesh_5.material}
        />
        <mesh
          geometry={nodes.mesh_6.geometry}
          material={nodes.mesh_6.material}
        />
        <mesh
          geometry={nodes.mesh_7.geometry}
          material={nodes.mesh_7.material}
        />
        <mesh
          geometry={nodes.mesh_8.geometry}
          material={nodes.mesh_8.material}
        />
        <mesh
          geometry={nodes.mesh_9.geometry}
          material={materials["DefaultWhite_AI.png"]}
        />
        <mesh
          geometry={nodes.mesh_10.geometry}
          material={materials["DefaultWhite_ASI.png"]}
        />
        <mesh
          geometry={nodes.mesh_11.geometry}
          material={materials["DefaultWhite_Altimeter.png"]}
        />
        <mesh
          geometry={nodes.mesh_12.geometry}
          material={materials["DefaultWhite_BatteryGauge.png"]}
        />
        <mesh
          geometry={nodes.mesh_13.geometry}
          material={materials["DefaultWhite_BreakerLabels.png"]}
        />
        <mesh
          geometry={nodes.mesh_14.geometry}
          material={materials["DefaultWhite_DME.png"]}
        />
        <mesh
          geometry={nodes.mesh_15.geometry}
          material={materials["DefaultWhite_DME.png.001"]}
        />
        <mesh
          geometry={nodes.mesh_16.geometry}
          material={materials["DefaultWhite_EGT-OAT.png"]}
        />
        <mesh
          geometry={nodes.mesh_17.geometry}
          material={materials["DefaultWhite_ELT.png"]}
        />
        <mesh
          geometry={nodes.mesh_18.geometry}
          material={materials["DefaultWhite_FP-CHT.png"]}
        />
        <mesh
          geometry={nodes.mesh_19.geometry}
          material={materials["DefaultWhite_FuelGauge.png"]}
        />
        <mesh
          geometry={nodes.mesh_20.geometry}
          material={materials["DefaultWhite_GMeter.png"]}
        />
        <mesh
          geometry={nodes.mesh_21.geometry}
          material={materials["DefaultWhite_KI204.png"]}
        />
        <mesh
          geometry={nodes.mesh_22.geometry}
          material={materials["DefaultWhite_KMA26.png"]}
        />
        <mesh
          geometry={nodes.mesh_23.geometry}
          material={materials["DefaultWhite_KN53.png"]}
        />
        <mesh
          geometry={nodes.mesh_24.geometry}
          material={materials["DefaultWhite_KT76A.png"]}
        />
        <mesh
          geometry={nodes.mesh_25.geometry}
          material={materials["DefaultWhite_KX155A.png"]}
        />
        <mesh
          geometry={nodes.mesh_26.geometry}
          material={materials["DefaultWhite_MPFuel.png"]}
        />
        <mesh
          geometry={nodes.mesh_27.geometry}
          material={materials["DefaultWhite_MagneticCompass.png"]}
        />
        <mesh
          geometry={nodes.mesh_28.geometry}
          material={materials["DefaultWhite_OilGauge.png"]}
        />
         {/* <lineSegments geometry={nodes.mesh_29.geometry} material={nodes.mesh_29.material} />  */}
        <mesh
          geometry={nodes.mesh_30.geometry}
          material={nodes.mesh_30.material}
        />
        <mesh
          geometry={nodes.mesh_31.geometry}
          material={nodes.mesh_31.material}
        />
        <mesh
          geometry={nodes.mesh_32.geometry}
          material={nodes.mesh_32.material}
        />
        <mesh
          geometry={nodes.mesh_33.geometry}
          material={nodes.mesh_33.material}
        />
        <mesh
          geometry={nodes.mesh_34.geometry}
          material={nodes.mesh_34.material}
        />
        <mesh
          geometry={nodes.mesh_35.geometry}
          material={nodes.mesh_35.material}
        />
        <mesh
          geometry={nodes.mesh_36.geometry}
          material={materials["DefaultWhite_RPM.png"]}
        />
        <mesh
          geometry={nodes.mesh_37.geometry}
          material={nodes.mesh_37.material}
        />
        <mesh
          geometry={nodes.mesh_38.geometry}
          material={nodes.mesh_38.material}
        />
        <mesh
          geometry={nodes.mesh_39.geometry}
          material={materials["DefaultWhite_Turn.png"]}
        />
        <mesh
          geometry={nodes.mesh_40.geometry}
          material={materials["DefaultWhite_VSI.png"]}
        />
        <mesh
          geometry={nodes.mesh_41.geometry}
          material={materials["DefaultWhite_WarningPanel.png"]}
        />
        <mesh
          geometry={nodes.mesh_42.geometry}
          material={materials["DefaultWhite_clock.png"]}
        />
        <mesh
          geometry={nodes.mesh_43.geometry}
          material={materials["DefaultWhite_interior.png"]}
        />
        <mesh
          geometry={nodes.mesh_44.geometry}
          material={materials["DefaultWhite_ka51b.png"]}
        />
        <mesh
          geometry={nodes.mesh_45.geometry}
          material={materials["DefaultWhite_numbers.png"]}
        />
        <mesh
          geometry={nodes.mesh_46.geometry}
          material={materials["DefaultWhite_zkv500.png"]}
        />
        <mesh
          geometry={nodes.mesh_47.geometry}
          material={materials.transparent}
        />
        <mesh
          geometry={nodes.mesh_48.geometry}
          material={materials.transparent3}
        />
      </group>
    </group>
  );
}
export default function grobG115() {
  return (
    <>
      <div className="w-full h-screen px-4 outline-none cursor-pointer md:col-span-2 lg:block">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <spotLight
            intensity={0.5}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />
          <Suspense fallback={null}>
            <Model scale={0.2} />
            <Environment preset="city" />
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -0.8, 0]}
              opacity={0.25}
              width={10}
              height={10}
              blur={1.5}
              far={0.8}
            />
          </Suspense>
          <OrbitControls autoRotate />
        </Canvas>
      </div>
    </>
  );
}
