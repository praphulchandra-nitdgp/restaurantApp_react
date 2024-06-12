
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomCarousel from '../components/Carousel';
import "./Home.css"

const Home = () => {
  const Navigate = useNavigate();

  const handleButtonClick = () => {
    Navigate('/about'); 
  };

  return (
    <>
      <section className='custom-carousel'>
        <CustomCarousel />
      </section>
      <section className='text-container'>

          <p>
  Fork Frenzy is your ultimate dining companion, bringing the best restaurants in town right to your fingertips. Discover a wide variety of cuisines, read reviews from fellow food enthusiasts, and make reservations effortlessly. Whether you're craving a cozy dinner for two or planning a group outing, Fork Frenzy ensures an exceptional dining experience every time. Bon appétit!</p>
          <button onClick={handleButtonClick} className='about-btn'>
            <span>Learn More</span>
          </button>

      </section>
    </>
  );
};
export default Home;