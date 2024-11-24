export const useCubeConfigs = () => {
    let baseConfigs = [
        { scale: [0.007, 0.007, 0.007], position: [0.5, 1, 1], rotation: [0.4, 4.3, 1.02], float: { speed: 2, intensity: 0.2, range: [0, 0] } },
        { scale: [0.006, 0.006, 0.006], position: [-1.2, -0.5, 1], float: { speed: 2, intensity: 1, range: [0, 0] } },
        { scale: [0.007, 0.007, 0.007], position: [0.7, -1, 1], rotation: [0.4, 4.3, 1.02], float: { speed: 1, intensity: 2, range: [0, 0.1] } },
        { scale: [0.005, 0.005, 0.005], position: [0, 0, 1], float: { speed: 1, intensity: 1, range: [0, 0] } },
        { scale: [0.004, 0.004, 0.004], position: [-0.9, -1.5, 1], rotation: [0.5, 2.3, 1.5], float: { speed: 1, intensity: 1, range: [0, 0] } },
        { scale: [0.006, 0.006, 0.006], position: [0.3, -1.8, 1], rotation: [0.6, 2.8, 1.5], float: { speed: 1, intensity: 1, range: [0, 0] } },
    ];
  
    if (window.innerWidth < 1920) {
      baseConfigs = [
        { scale: [0.007, 0.007, 0.007], position: [0.5, 1, 1], rotation: [0.4, 4.3, 1.02], float: { speed: 2, intensity: 0.2, range: [0, 0] } },
        { scale: [0.006, 0.006, 0.006], position: [-1.2, -0.5, 1], float: { speed: 2, intensity: 1, range: [0, 0] } },
        { scale: [0.007, 0.007, 0.007], position: [0.7, -1, 1], rotation: [0.4, 4.3, 1.02], float: { speed: 1, intensity: 2, range: [0, 0.1] } },
      ];
    }
  
    return baseConfigs;
  };
