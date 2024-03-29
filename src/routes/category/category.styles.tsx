import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  column-gap: 20px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;

  @media screen and (min-width: 1024px) {
    text-align: center;
  }
`;
