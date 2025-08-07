import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="package">
        <div className="package2"><p className="text">Nitro Style</p></div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .package {
    width: 200px;
    height: 254px;
    background-image: linear-gradient(163deg, #ff00ff 0%, #3700ff 100%);
    border-radius: 20px;
    text-align: center;
    transition: all 0.25s cubic-bezier(0, 0, 0, 1);
  }

  .package:hover {
    box-shadow: 0px 0px 30px 1px rgba(204, 0, 255, 0.3);
  }

  .package2 {
    width: 200px;
    height: 254px;
    background-color: #1d1724;
    border-radius: 10px;
    transition: all 0.25s cubic-bezier(0, 0, 0, 1);
    padding: 15px;
    cursor: pointer;
  }

  .package2:hover {
    transform: scale(0.98);
    border-radius: 18px;
  }

  .text {
    color: white;
    font-size: 17px;
  }`;

export default Card;
