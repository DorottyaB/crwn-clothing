import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 100%;
  height: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
    margin-bottom: 5px;
  }
  button {
    min-width: 100%;
    margin-top: 10px;
  }

  @media (min-width: 1024px) {
    height: 350px;

    img {
      height: 95%;
    }
    button {
      min-width: 80%;
      opacity: 0.7;
      position: absolute;
      top: 255px;
      margin-top: 0;
      display: none;
    }
    &:hover {
      img {
        opacity: 0.8;
      }
      button {
        opacity: 0.85;
        display: flex;
      }
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  margin-bottom: 15px;

  @media (min-width: 1024px) {
    width: 90%;
  }
`;

export const Price = styled.span`
  @media (min-width: 1024px) {
    width: 10%;
  }
`;
