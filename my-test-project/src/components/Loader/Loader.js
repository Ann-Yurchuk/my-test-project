import { Circles } from 'react-loader-spinner';

const MyLoader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        zIndex: '10',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '50%',
      }}
    >
      <Circles
        height="80"
        width="80"
        color="#2a1d60"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
export default MyLoader;
