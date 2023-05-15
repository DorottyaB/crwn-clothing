import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  margin: 30px auto;

  @media (min-width: 1024px) {
    width: 900px;
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;
