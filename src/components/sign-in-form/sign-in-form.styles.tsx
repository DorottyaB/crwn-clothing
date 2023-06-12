import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    margin: 10px 0;
  }

  @media screen and (min-width: 1024px) {
    width: 380px;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;
