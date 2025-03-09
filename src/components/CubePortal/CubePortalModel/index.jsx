import { memo, useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Instances, Instance, Float, useGLTF } from '@react-three/drei';
import PortalCubeGLTF from '@/assets/3D/portal_cube.glb'
import { useCubeConfigs } from "@/hooks/useCubeConfigs";

const ModelCube = () => {
    const { nodes, materials } = useGLTF(PortalCubeGLTF, true);
    const cubeConfigs = useCubeConfigs();

    const instanceConfigs = [
        { geometry: nodes.Object_7.geometry, material: materials.materialsmodelspropsmetal_box },
    ];

    const cubeRefs = useRef([]);

    useFrame((_state, delta) => {
        cubeRefs.current.forEach(ref => {
            if (ref) {
                ref.rotation.y += delta * 0.4;
                ref.rotation.x += delta * 0.4;
            }
        });
    });

    const cubes = useMemo(() => (
        cubeConfigs.map((config, idx) => (
            <Float key={idx}
                   autoInvalidate
                   speed={config.float.speed}
                   floatIntensity={config.float.intensity}
                   floatingRange={config.float.range}>
                <Instance ref={el => cubeRefs.current[idx] = el}
                          position={config.position}
                          scale={config.scale}
                          rotation={config.rotation}
                />
            </Float>
        ))
    ), [cubeConfigs]);

    return (
        <>
            {instanceConfigs.map((instance, index) => (
                <Instances key={index}
                           limit={cubeConfigs.length}
                           geometry={instance.geometry}
                           material={instance.material}
                >
                    {cubes}
                </Instances>
            ))}
        </>
    );
};

export default memo(ModelCube);