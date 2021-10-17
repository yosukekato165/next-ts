import { useEffect } from "react";
import { WebGLRenderer, Scene, PerspectiveCamera } from "three";

export const Three: React.FC = () => {
  const onCanvasLoaded = (canvas: HTMLCanvasElement) => {
    if (!canvas) {
      return;
    }

    const width = window.innerWidth;
    const height = window.innerHeight;

    // init scene
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    const renderer = new WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setClearColor("#1d1d1d");
    renderer.setSize(width, height);

    // resize
    window.addEventListener("resize", () => handleResize({ camera, renderer }));

    renderer.render(scene, camera);
  };

  // handle resize
  const handleResize = ({ camera, renderer }) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / width;
    camera.updateProjectionMatrix();
    renderer.setSize(width, width);
  };
  useEffect(() => {
    return () => window.removeEventListener("resize", () => handleResize);
  });

  return <canvas ref={onCanvasLoaded} />;
};
