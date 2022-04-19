import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}

export default function Button(props: ButtonProps) {
  return <StyledButton {...props} />;
}

const StyledButton = styled.button`
  display: block;
  background: ${(props) => props.theme.colors.accentPrimary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin: 1rem 0.5rem 1rem 0;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.button.boxShadow};
  width: 300px;

  &:hover {
    background: ${(props) => darken(0.05, props.theme.colors.accentPrimary)};
  }

  ${(props) => props.theme.global.setFocus(props.theme.colors.accentPrimary)}

  @media (max-width: 800px) {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1.25rem;
  }
`;
