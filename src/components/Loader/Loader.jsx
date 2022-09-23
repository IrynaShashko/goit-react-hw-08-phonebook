import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      wrapperStyle={{ justifyContent: 'center' }}
      height="100"
      width="100"
      color="#1976d2"
    />
  );
};

export default Loader;
