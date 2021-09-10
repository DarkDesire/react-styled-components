import styled, { css } from 'styled-components';

export default styled.button`
font-family:cursive;
font-size:1.3rem;
border:1px dashed;
border-radius:5px;
padding:8px 10px;
background-color:${props => props.theme.backgroundColor};
color:${props => props.theme.fontColor};
border: 2px solid ${props => props.theme.borderColor};
cursor: pointer;
&:hover{
  background-color:black;
  color:red;
  transition:all 0.2s;
}
`