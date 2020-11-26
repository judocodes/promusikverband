import React from "react";
import styled from "styled-components";

import Section from "../containers/Section";
import PrimaryButton from "./ButtonPrimary";
import Input from "../components/Input";
import DoubleInput from "../components/DoubleInput";

const Wrapper = styled.section.attrs({
  className:
    "mx-auto max-w-4xl bg-gray-500 rounded-xl px-24 py-12 text-center shadow-md",
})``;

const Heading = styled.h2.attrs({
  className: "section-heading text-white",
})``;

const SubHeading = styled.p.attrs({
  className: "section-subheading text-white mt-1 max-w-lg",
})``;

const Form = styled.form.attrs({
  className: "flex mt-4 font-light",
})``;

const Label = styled.label.attrs({
  className: "w-1/2 text-left mx-4 ",
})``;

const LabelText = styled.span.attrs({
  className: "text-white font-light text-sm",
})``;

interface Props {}

const Newsletter = (props: Props) => {
  return (
    <Section>
      <Wrapper>
        <Heading>Bleib auf dem neuesten Stand.</Heading>
        <SubHeading>
          Trage dich in unseren Newsletter ein, bis wir den Verein für
          Mitgliedschaften öffnen.
        </SubHeading>
        <Form>
          <Label>
            <LabelText>Dein Name</LabelText>
            <DoubleInput
              placeholderFirst="Vorname"
              placeholderSecond="Nachname"
            />
          </Label>
          <Label>
            <LabelText>Deine E-Mail</LabelText>
            <Input placeholder="E-Mail" />
          </Label>
        </Form>
        <PrimaryButton>Newsletter abbonieren</PrimaryButton>
      </Wrapper>
    </Section>
  );
};

export default Newsletter;
