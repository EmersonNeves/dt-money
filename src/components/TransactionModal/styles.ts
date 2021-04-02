import styled from "styled-components";

import {darken, transparentize} from 'polished'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid var(--border);
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  h3 {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: center;
    justify-content: center;
  }

  .confirm-button {
    width: 100%;
    padding: 1.5rem;
    background: var(--green);
    color: var(--white);
    margin-top: 2rem;

    transition: 0.5s;

    &:hover {
      background: var(--dark-green);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  img {
    margin-top: 1rem;
    width: 25px;
    height: 20px;
  }

  span {
    margin-top: 1rem;
    display: inline-block;
    margin-left: 0.5rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'red' | 'green';
}

const colors = {
  green: '#33dd95',
  red: '#e52410',
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid var(--border);
    border-radius: 0.5;

    background: ${(props)=>props.isActive ? transparentize(0.9, colors[props.activeColor]) : 'transparent'};

    display: flex;
    flex-direction: center;
    justify-content: center;

    transition: border-color 0.5s;
    &:hover {
      border-color: ${darken(0.3, "#d7d7d7")};
      
    }


`
