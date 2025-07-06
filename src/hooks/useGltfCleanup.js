import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

/**
 * Clears specific GLTF cache entries on every route change.
 * @param {string[]} paths - Array of GLTF model URLs to clear
 */
const useGltfCleanup = (paths = []) => {

  useEffect(() => {
    return () => paths.forEach((path) => useGLTF.clear(path));
  }, [paths]);
};

export default useGltfCleanup;
