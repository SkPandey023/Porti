import React from "react";
import Link from "next/link";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, NavLink } from "./HeroStyles";
// import { NavLink } from "./Styles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, <br />
          I'm Ankit
        </SectionTitle>
        <SectionText>
          A Software Engineer with hands on experience in Data Structure
          Alogorithm using C++. I also possess skills required for front-end and
          back-end development.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
        <Link href="#tech">
          <NavLink>Learn More</NavLink>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
