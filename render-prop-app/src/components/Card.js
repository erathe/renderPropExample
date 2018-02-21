import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const Card = styled.div`
  padding: 2em;
  background: #f0f0f0;
  border: 1px solid slateblue;
  width: 50%;
  text-align: left;
  margin-bottom: 10px;
`;

export const SpinCard = Card.extend`
  &:hover {
    animation: ${rotate360} 2s linear infinite;
  }
`;
