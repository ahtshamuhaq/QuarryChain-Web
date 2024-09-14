import styled from "styled-components";

export const GradientHeading = styled.h1`
  background: linear-gradient(to right, #1FC7D4, #553499);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-size: 40px; 
  font-weight: bold;
`;

export const GradientBorderCard = styled.div`
width:100%;
height:100%;
  position: relative;
  padding: 20px;
  background: transparent;  
  border-radius: 10px;
  overflow: hidden;
  z-index: 0;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #1FC7D4, #7A11E3); 
    border-radius: 10px; 
    padding: 2px; 
    z-index: -1;
    box-sizing: border-box;
  }

  &::after {
    content: '';
    position: absolute;
    top: 2px; 
    left: 2px;
    right: 2px; 
    bottom: 2px; 
    background: white; 
    border-radius: 8px; 
    z-index: 0;
  }
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 1;
`;