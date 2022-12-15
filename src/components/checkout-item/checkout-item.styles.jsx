import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 23%) 16% 15%;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 23%) 8%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  padding-right: 15px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Name = styled.span`
  width: 100%;
`;

export const Price = styled.span`
  width: 100%;
`;

export const Quantity = styled.span`
  width: 100%;
  display: flex;
`;
export const Arrow = styled.div`
  cursor: pointer;
`;
export const Value = styled.span`
  margin: 0 10px;
`;
export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
