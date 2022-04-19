import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

interface SearchFilterProps extends React.ComponentPropsWithoutRef<'input'> {}

export default function SearchFilter(props: SearchFilterProps) {
  return <Input {...props} />;
}

const Input = styled.input`
  display: block;
  font-size: calc(14px + (16 - 14) * ((100vw - 400px) / (1800 - 400)));
  padding: ${(props) => props.theme.input.padding};
  margin: 0.5rem 0;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 4px;

  @media (max-width: 630px) {
    max-width: none !important;
  }

  ${(props) => props.theme.global.setInputFocus(darken(0.1, props.theme.colors.accentPrimary))}
  }
`;
