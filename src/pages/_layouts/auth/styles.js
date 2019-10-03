import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 350px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      padding: 15px;
      border-radius: 4px;
      height: 44px;
      color: #fff;
      margin-bottom: 10px;
      background: rgba(0, 0, 0, 0.1);
      border: none;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      height: 44px;
      margin: 5px 0 0;
      background: #3b9eff;
      font-weight: bold;
      border-radius: 4px;
      font-size: 16px;
      border: none;
      color: #fff;
      transition: background 0.2s;

      &:hover {
        background-color: ${darken(0.03, '#3b9eff')};
      }
    }
    span {
      color: #ee0000;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    a {
      color: #fff;
      margin-top: 10px;

      &:hover {
        color: ${darken(0.2, '#fff')};
      }
    }
  }
`;
