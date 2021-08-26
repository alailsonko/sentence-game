import React from 'react';

import {
  Container,
  Title,
  Wrapper,
  Input,
  ButtonSubmit,
} from './styles';

const Home: React.FC = () => (
  <Container>
    <Title>Sentence Game</Title>
    <Wrapper>
      <Title>Who?</Title>
      <Input
        type="text"
      />
      <ButtonSubmit>Next</ButtonSubmit>
    </Wrapper>
  </Container>
);

export default Home;
