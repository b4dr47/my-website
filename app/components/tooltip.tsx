'use client'
import React from 'react';
import styled from 'styled-components';
import { FaSchool, FaCode, FaGamepad } from 'react-icons/fa6';

const Tooltip = () => {
  return (
    <StyledWrapper>
      <ul className="example-1">
        <li className="icon-content">
          <FaSchool style={{ fontSize: "30px", color: "" }} />
          <div className="tooltip">CKHS</div>
        </li>
        <li className="icon-content">
          <FaCode style={{ fontSize: "30px", color: "" }} />
          <div className="tooltip">Dev</div>
        </li>
        <li className="icon-content">
          <FaGamepad style={{ fontSize: "30px", color: "" }} />
          <div className="tooltip">Gamer</div>
        </li>
      </ul>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  ul {
    list-style: none;
  }

  .example-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder; /* Made bolder */
    background-color: transparent; /* Black background */
    border-radius: 30px; /* Added border-radius to make the container rounded */
    padding: 20px; /* Added padding for better appearance */
    height: 70px;
    width: 300px;
  }

  .example-1 .icon-content {
    margin: 0 10px;
    position: relative;
    font-weight: bolder; /* Made bolder */
  }

  .example-1 .icon-content .tooltip {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: transparent; /* White background */
    padding: 6px 10px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    font-size: 14px;
    transition: all 0.3s ease;
    font-weight: bolder; /* Made bolder */
  }

  .example-1 .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: -50px;
  }

  .example-1 .icon-content .link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #fff; /* White icons */
    background-color: #000; /* Black background */
    transition: all 0.3s ease-in-out;
    font-weight: bolder; /* Made bolder */
  }
  }`;

export default Tooltip;

