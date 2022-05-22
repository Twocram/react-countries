import styled from "styled-components";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { Container } from "./Container";
import { useEffect, useState } from "react";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled.a.attrs({
  href: "/",
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  text-decoration: none;
`;

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  font-weight: var(--fw-bold);
  text-transform: capitalize;
`;

const Header = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world ?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            <IoMoon /> Light Theme
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
