import React, { Component } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { link } from 'fs';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palegoldenrod;
`;

const Wrapper = styled.section`
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  height: 80px;
  border-color: red;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const ButtonGroup = () => (
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
)

const InputStyled = () => (
  <Wrapper>
    <Input placeholder="name" type="text" />
    <Input value="password" type="text" />
  </Wrapper>
)

const TitleStyled = () => (
  <Wrapper>
    <Title>
      Hello world, this is my first styled components!
    </Title>
  </Wrapper>
);

const Link = ({ className, children }) => {
  return (
    <a className={className}>
      {children}
    </a>
  )
}

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

const ButtonV2 = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = ButtonV2.extend`
  color: tomato;
  border-color: tomato;
`
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const ButtonV3 = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25 1em;
  border-radius: 3px;
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

Button.defaultProps = {
  theme: {
    main: 'paleviolectred'
  }
}

const theme = {
  main: 'mediumseagreen'
}

const InputV2 = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

class ComponentStyled extends Component {

  render() {
    return (
      <div>
        <TitleStyled />
        <Link>Unstyled, boring link</Link>
        <br/>
        <StyledLink>Styled, exciting Link</StyledLink>
        <Rotate>&lt; 💅 &gt;</Rotate>
        <InputStyled />
        <ButtonGroup />
        <TomatoButton>TomatoButton</TomatoButton>
        <ButtonV3>Normal</ButtonV3>
        <ThemeProvider theme={theme}>
          <ButtonV3>Themed</ButtonV3>
        </ThemeProvider>
        <InputV2
          placeholder="Hover here ........."
          innerRef={x => { this.input = x}}
          onMouseEnter={() => this.input.focus()}
        />
      </div>
    )
  }
}

export default ComponentStyled ;
