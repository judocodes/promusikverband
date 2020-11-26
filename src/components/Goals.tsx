import React from "react";
import styled from "styled-components";

import Section from "../containers/Section";

const Wrapper = styled.section.attrs({
  className: "w-full bg-white text-center",
})``;

const BadgeHeading = styled.h6.attrs({
  className: "tracking-widest uppercase text-lg",
})``;

const Heading = styled.h2.attrs({
  className: "section-heading",
})``;

const SubHeading = styled.p.attrs({
  className: "section-subheading",
})``;

const Features = styled.dl.attrs({
  className: "mx-auto mt-8 flex justify-center",
})``;

const Feature = styled.div.attrs({
  className: "max-w-sm flex shadow py-12 px-8 mx-2",
})``;

const FeatureTextWrapper = styled.div.attrs({
  className: "ml-3 text-left",
})``;

const FeatureHeader = styled.h6.attrs({
  className: "text-xl font-semibold",
})``;

const FeatureBody = styled.p.attrs({
  className: "text-lg font-light",
})``;

const CheckMarkSVG: React.FunctionComponent = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const CheckMark = styled(CheckMarkSVG).attrs({
  className: "w-6 h-6 flex-shrink-0",
})``;

interface Props {}

const Goals = (props: Props) => {
  return (
    <Section additionalStyles="bg-white">
      <Wrapper>
        <BadgeHeading>Pro Musik</BadgeHeading>
        <Heading>Wofür wird der Verband gegründet?</Heading>
        <SubHeading>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          ratione tempora at ipsa mollitia voluptatum, in exercitationem ab
          commodi a dolorem.
        </SubHeading>
        <Features>
          <Feature>
            <CheckMark />
            <FeatureTextWrapper>
              <FeatureHeader>Lorem, ipsum dolor.</FeatureHeader>
              <FeatureBody>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
                quae?
              </FeatureBody>
            </FeatureTextWrapper>
          </Feature>
          <Feature>
            <CheckMark />
            <FeatureTextWrapper>
              <FeatureHeader>Lorem, ipsum dolor.</FeatureHeader>
              <FeatureBody>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
                quae?
              </FeatureBody>
            </FeatureTextWrapper>
          </Feature>
          <Feature>
            <CheckMark />
            <FeatureTextWrapper>
              <FeatureHeader>Lorem, ipsum dolor.</FeatureHeader>
              <FeatureBody>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
                quae?
              </FeatureBody>
            </FeatureTextWrapper>
          </Feature>
        </Features>
      </Wrapper>
    </Section>
  );
};

export default Goals;
