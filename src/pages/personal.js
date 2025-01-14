import React from 'react';
import styled from 'styled-components';

const StyledPersonalPage = styled.section`
  display: flex; /* Directly replacing the mixin */
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
  padding: 20px;

  h1 {
    color: var(--green);
    margin-bottom: 20px;
  }

  p {
    color: var(--slate);
    max-width: 600px;
    font-size: var(--fz-lg);
  }
`;

const PersonalPage = () => (
  <StyledPersonalPage>
    <h2>You just couldn’t resist clicking, could you?</h2>
    <h1>Welcome to Fiza's Personal Page :)</h1>
    <p>
      Right now, I'm a work in progress, but soon, you'll be able to learn about all of Fiza's
      hobbies, interests, and everything that makes them tick outside of work!
    </p>
  </StyledPersonalPage>
);

export default PersonalPage;
