import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  background: rgba(0, 0, 0, 0.3) none repeat scroll 0% 0%;
  opacity: 1;
  top: 0;
  left: 0;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: 1s ease-out fadeIn 1;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const MenuFooter = styled.div`
  width: 100%;
  margin-top: auto;
`;

export const MenuWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  background: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[0]};
  overflow-y: scroll;
  box-shadow: 4px 8px 30px 0px rgba(0, 0, 0, 0.2);
`;

export const LogosContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const QuarrychainLogoContainer = styled.div`
  width: 50%;
`;

export const QuarrychainLogo = styled.img`
  width: 100%;
`;

export const QuarrychainTextLogoContainer = styled.div`
  width: 100%;
`;

export const SocialItemsContainer = styled.div``;

export const InvisibleDiv = styled.div`
  width: 40%;
`;
