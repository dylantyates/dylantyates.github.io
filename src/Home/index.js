import React from 'react';
import { Card } from '../components';
import { HomeWrapper, CardContainer } from './styles';

const Home = () => (
  <HomeWrapper>
    <CardContainer>
      <Card
        image="slot-game.png"
        title="React Slot Game"
        body="A slot machine game for fun"
        link="slot-game"
      />
      <Card
        image="unity-game.png"
        title="Unity Game"
        body="A WEbGL Unity Game"
        link="unity-game"
      />
    </CardContainer>
  </HomeWrapper>
)

export default Home;
