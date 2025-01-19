import React from 'react';
import styled, { keyframes } from 'styled-components';

// Twinkling Stars Animation
const twinkle = keyframes`
  0% { opacity: 0.2; }
  50% { opacity: 1; }
  100% { opacity: 0.2; }
`;

// Shooting Star Animation
const shootingStar = keyframes`
  0% {
    transform: translate(100vw, 0);
    opacity: 1;
  }
  100% {
    transform: translate(-100vw, 100vh);
    opacity: 0;
  }
`;

// Background styling
const StyledPersonalPage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;

  /* Night sky gradient */
  background: radial-gradient(circle, rgba(10, 10, 30, 0.8) 10%, rgba(0, 0, 10, 1) 100%);

  /* Make all text white */
  color: white;
`;

// Stars container
const StarsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
`;

// Single twinkling star
const Star = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  opacity: 0.8;
  border-radius: 50%;
  animation: ${twinkle} 2s infinite alternate ease-in-out;
`;

// Shooting star effect
const ShootingStar = styled.div`
  position: absolute;
  top: 20%;
  left: 100%;
  width: 3px;
  height: 50px;
  background: linear-gradient(white, transparent);
  opacity: 0.8;
  transform: rotate(-45deg);
  animation: ${shootingStar} 3s linear infinite;
`;

// Content Wrapper to ensure text stays centered
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80%; /* Adjust width for responsiveness */
  max-width: 600px;
`;

const PersonalPage = () => {
  // Generate random stars
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 2 + 1}s`,
  }));

  return (
    <StyledPersonalPage>
      <StarsContainer>
        {stars.map(star => (
          <Star
            key={star.id}
            style={{ top: star.top, left: star.left, animationDuration: star.animationDuration }}
          />
        ))}
        <ShootingStar />
      </StarsContainer>

      <ContentWrapper>
        <h1>You just couldn’t resist clicking, could you?</h1>
        <h2 className="big-heading">Welcome to Fiza's Personal Page :)</h2>
        <p>
          Right now, I'm a work in progress, but soon, you'll be able to learn about all of Fiza's
          hobbies, interests, and everything that makes them tick outside of work!
        </p>
      </ContentWrapper>
    </StyledPersonalPage>
  );
};

export default PersonalPage;
