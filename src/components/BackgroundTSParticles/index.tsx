import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

const BackgroundTSParticles = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const options = {
    background: {
      color: { value: '#D6D6C6' },
      position: '50% 50%',
      repeat: 'no-repeat',
      size: 'cover',
      opacity: 1,
    },
    fullScreen: { enable: true, zIndex: -1 },
    detectRetina: true,
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: 'push' },
        onHover: {
          enable: true,
          mode: 'bubble',
          parallax: { enable: false, force: 60, smooth: 10 },
        },
        resize: true,
      },
      modes: {
        slow: { factor: 3, radius: 200 },
        attract: {
          distance: 200,
          duration: 0.4,
          easing: 'ease-out-quad',
          factor: 1,
          maxSpeed: 50,
          speed: 1,
        },
        bounce: { distance: 200 },
        bubble: {
          distance: 400,
          duration: 2,
          mix: false,
          opacity: 0.8,
          size: 40,
          divs: { distance: 200, duration: 0.4, mix: false },
        },
        connect: { distance: 80, links: { opacity: 0.5 }, radius: 60 },
        grab: {
          distance: 400,
          links: { blink: false, consent: false, opacity: 1 },
        },
        push: { default: true, quantity: 4 },
        remove: { quantity: 2 },
        repulse: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: 'ease-out-quad',
          divs: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: 'ease-out-quad',
          },
        },
        trail: { delay: 1, pauseOnStop: false, quantity: 1 },
      },
    },
    motion: { disable: false, reduce: { factor: 4, value: true } },
    particles: {
      bounce: {
        horizontal: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
        vertical: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
      },
      color: {
        animation: {
          h: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            decay: 0,
            sync: true,
          },
          s: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            decay: 0,
            sync: true,
          },
          l: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            decay: 0,
            sync: true,
          },
        },
      },
      destroy: {
        split: {
          count: 1,
          factor: { random: { enable: false, minimumValue: 0 }, value: 3 },
          rate: {
            random: { enable: false, minimumValue: 0 },
            value: { min: 4, max: 9 },
          },
          sizeOffset: true,
        },
      },
      move: {
        angle: { offset: 0, value: 90 },
        attract: { distance: 200, enable: false, rotate: { x: 600, y: 1200 } },
        center: { x: 50, y: 50, radius: 0 },
        decay: 0,
        drift: 0,
        enable: true,
        gravity: {
          acceleration: 9.81,
          enable: false,
          inverse: false,
          maxSpeed: 50,
        },
        path: {
          clamp: true,
          delay: { random: { enable: false, minimumValue: 0 }, value: 0 },
          enable: false,
        },
        speed: 2,
        spin: { acceleration: 0, enable: false },
        straight: false,
        vibrate: false,
        warp: false,
      },
      number: {
        density: { enable: true, area: 800, factor: 1000 },
        limit: 0,
        value: 80,
      },
      opacity: {
        random: { enable: true, minimumValue: 0.1 },
        value: { min: 0.1, max: 1 },
        animation: {
          count: 0,
          enable: true,
          speed: 1,
          decay: 0,
          sync: false,
          minimumValue: 0.2,
        },
      },
      rotate: {
        random: { enable: true, minimumValue: 0 },
        value: 0,
        animation: { enable: true, speed: 5, decay: 0, sync: false },
        path: false,
      },
      shape: {
        options: {
          character: {
            fill: false,
            font: 'Verdana',
            style: '',
            value: '*',
            weight: '400',
          },
          char: {
            fill: false,
            font: 'Verdana',
            style: '',
            value: '*',
            weight: '400',
          },
          polygon: { sides: 5 },
          star: { sides: 5 },
          image: [
            {
              src: 'https://www.svgrepo.com/show/303600/typescript-logo.svg',
              width: 32,
              height: 32,
            },
            {
              src: 'https://cdn-icons-png.flaticon.com/512/919/919832.png',
              width: 32,
              height: 32,
            },
          ],
        },
        type: 'image',
      },
      size: {
        random: { enable: false, minimumValue: 1 },
        value: 16,
        animation: {
          count: 0,
          enable: false,
          speed: 40,
          decay: 0,
          sync: false,
          minimumValue: 0.1,
        },
      },
      zIndex: {
        random: { enable: false, minimumValue: 0 },
        value: 0,
        opacityRate: 1,
        sizeRate: 1,
        velocityRate: 1,
      },
      life: {
        count: 0,
        delay: {
          random: { enable: false, minimumValue: 0 },
          value: 0,
          sync: false,
        },
        duration: {
          random: { enable: false, minimumValue: 0.0001 },
          value: 0,
          sync: false,
        },
      },
      roll: {
        darken: { enable: false, value: 0 },
        enable: false,
        enlighten: { enable: false, value: 0 },
        mode: 'vertical',
        speed: 25,
      },
      tilt: {
        random: { enable: false, minimumValue: 0 },
        value: 0,
        animation: { enable: false, speed: 0, decay: 0, sync: false },
        direction: 'clockwise',
        enable: false,
      },
      twinkle: {
        lines: { enable: false, frequency: 0.05, opacity: 1 },
        particles: { enable: false, frequency: 0.05, opacity: 1 },
      },
      repulse: {
        random: { enable: false, minimumValue: 0 },
        value: 0,
        enabled: false,
        distance: 1,
        duration: 1,
        factor: 1,
        speed: 1,
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    zLayers: 100,
  };

  return <Particles id='tsparticles' init={particlesInit} options={options} />;
};

export default BackgroundTSParticles;
