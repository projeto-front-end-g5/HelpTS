import Lottie from 'react-lottie';
import { useState } from 'react';
import image from '../../assets/116822-transfer-files.json';
import { Container } from './style';

const EmptyList = () => {
  const [animate] = useState({ isStopped: false, isPaused: false });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: image,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <Lottie
        options={defaultOptions}
        isStopped={animate.isStopped}
        isPaused={animate.isPaused}
      />
    </Container>
  );
};

export default EmptyList;
