import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media (min-width: 1024px) {
    width: 55%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: grid;
  grid-template-columns: repeat(3, 23%) 16% 15%;
  border-bottom: 1px solid darkgrey;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 23%) 8%;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
