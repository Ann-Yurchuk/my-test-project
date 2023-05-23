import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

function BackBtnToTop() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {backToTop && (
        <button
          style={{
            position: 'fixed',
            bottom: '45px',
            right: '33px',
            height: '50px',
            width: '50px',
            fontSize: '27px',
            borderRadius: '50%',
            backgroundColor: '#0b0583',
            color: '#ebd8ff',
            alignContent: 'center',
            cursor: 'pointer',
          }}
          onClick={scrollUp}
        >
          <FiArrowUp />
        </button>
      )}
    </div>
  );
}

export default BackBtnToTop;
