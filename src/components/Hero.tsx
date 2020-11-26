import React from "react";
import styled from "styled-components";

import Section from "../containers/Section";

const HeroWrap = styled.header.attrs({
  className: "w-full h-auto relative",
})``;

const ImageWrap = styled.fieldset.attrs({
  className: "w-2/3 inline-block shadow p-2 bg-white",
})``;

const Image = styled.img.attrs({
  className: "object-cover w-full h-full",
})``;

const Card = styled.main.attrs({
  className: "inline-block bg-white pl-12 pr-12 py-2 shadow-md max-w-xl -ml-48",
})``;

const Divider = styled.hr.attrs({
  className: "h-px w-7/8 mx-auto bg-gray-300 my-6",
})``;

const Heading = styled.h1.attrs({
  className: "inline-block text-4xl font-playfair leading-none text-black",
})``;

const Text = styled.p.attrs({
  className: "pl-3 text-xl font-light leading-normal mt-4",
})``;

const Highlight = styled.span.attrs({
  className: "font-semibold",
})``;

interface Props {}

const Hero = (props: Props) => {
  return (
    <Section additionalStyles="pt-8">
      <HeroWrap>
        <ImageWrap>
          <Image src="woman-piano-lg.jpg" />
        </ImageWrap>
        <Card>
          <Divider />
          <Heading>
            "Musiker haben halt <br /> <Highlight>keine Lobby.</Highlight>"
          </Heading>
          <Text>
            ... Stimmt. <br /> Deshalb gründen wir
            <Highlight>
              {" "}
              "PRO MUSIK" - den Verband freier Musikschaffender.
            </Highlight>
          </Text>
          <Text>
            Wir geben der freien Musikszene eine solidarische Stimme -
            Genreunabhängig und Deutschlandweit.
          </Text>
          <Divider />
        </Card>
      </HeroWrap>
    </Section>
  );
};

export default Hero;
