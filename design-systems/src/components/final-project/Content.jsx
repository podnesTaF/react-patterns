import styled from "styled-components";
import { Layers } from "../1-layers-pattern/start";
import { Split } from "../2-split-pattern/start";
import { Pad } from "../7-pad-pattern/start";
import { Center } from "../8-center-pattern/start";

const ContentArea = styled(Pad).attrs(() => ({
  padding: "xl",
}))`
  background-image: linear-gradient(
    to bottom,
    #0f1623 14rem,
    rgb(242, 242, 242) 14rem
  );
`;

const SettingsHeader = styled.header`
  color: white;
`;

const SettingsPane = styled(Split).attrs(() => ({
  gutter: "none",
  fraction: "1/4",
}))`
  background: white;
  border-radius: 0.5rem;
`;

const Content = () => {
  return (
    <ContentArea>
      <Center as={Layers} gutter="l" maxWidth="90rem">
        <SettingsHeader>
          <h1>Profile Settings</h1>
        </SettingsHeader>
        <SettingsPane>
          <nav>
            <ul>
              <li>Profile</li>
              <li>Settings</li>
              <li>Authentication</li>
              <li>Email</li>
              <li>Plans</li>
              <li>APIs</li>
            </ul>
          </nav>
          <div>right-hand side goes here.</div>
        </SettingsPane>
      </Center>
    </ContentArea>
  );
};

export default Content;
