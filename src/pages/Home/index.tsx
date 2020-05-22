import React, { useState, useEffect, useCallback } from 'react';

import * as Subtitle from 'subtitle';
import { Container, Title, SubTitleContainer, SubTitleLine } from './styles';

const Home: React.FC = () => {
  const [subtitle, setSubtitle] = useState([]);

  useEffect(() => {
    const loadSubtitle = async () => {
      const text = `3
00:00:16,149 --> 00:00:18,618
（YOU）テラスハウスは
見ず知らずの男女６人が`;

      const textParsed = Subtitle.parse(text);
      console.log(textParsed);
      setSubtitle(textParsed);
    };
    loadSubtitle();
  }, []);
  return (
    <Container>
      <Title>Subtitle</Title>
      <SubTitleContainer>
        {subtitle.map((sub) => (
          <SubTitleLine key={String(sub.start)}>
            {sub.text.replace(/(\r\n|\n|\r)/gm, '')}
          </SubTitleLine>
        ))}
      </SubTitleContainer>
    </Container>
  );
};

export default Home;
