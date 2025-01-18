import React from 'react';
import styled from 'styled-components';

const AnimatedHeart = styled.svg`
  width: 100px;
  height: 100px;
  stroke: currentColor;
  fill: none;

  /* Animate the Heart Stroke */
  .heart-path {
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
    animation: draw 2s linear forwards;
  }

  /* Animate the FS Text Stroke */
  .fs-text {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: draw 1.5s ease-out 1s forwards;
  }

  @keyframes draw {
    from {
      stroke-dashoffset: 300;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;

const IconFSHeart = () => (
  <AnimatedHeart
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-heart">
    <title>FS in Heart</title>

    {/* Heart Shape */}
    <path
      className="heart-path"
      d="M50 90 L10 50 C-10 20 30 -10 50 20 C70 -10 110 20 90 50 L50 90 Z"
    />

    {/* FS Letters Inside the Heart */}
    <text
      x="50"
      y="55"
      textAnchor="middle"
      fontSize="20"
      stroke="currentColor"
      fill="none"
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
      className="fs-text">
      FS
    </text>
  </AnimatedHeart>
);

export default IconFSHeart;
