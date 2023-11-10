import { styled } from "styled-components";
import { spaceSchema } from "../../utils/common/spaces";
import { Layers } from "../1-layers-pattern/SubscribeForms";
import { Grid } from "../4-grid-pattern/cards";
import { InlineBundle } from "../5-inline-bundle-pattern/BundledMenu";
import { Bottom, Card, Description, Name, Price, Top } from "./component";

export const Pad = styled.div`
  padding: ${(props) => {
    return []
      .concat(props.padding)
      .map((pKey) => spaceSchema[pKey])
      .join(" ");
  }};
`;

export const Button = styled(Pad).attrs(() => ({
  as: "button",
  padding: ["s", "l"],
}))`
  background-color: crimson;
  color: white;
  border: none;
  border-radius: 4px;
`;

const GiftCard = () => {
  return (
    <Card>
      <Pad padding={"lg"}>
        <Top>
          <Name>Gift Card</Name>
          <Description>This is one of our gift cards you can buy.</Description>
          <Price>$25.99</Price>
          <InlineBundle gutter="none" justify="center">
            <Pad as={Button} padding={["sm", "lg"]}>
              Buy
            </Pad>
          </InlineBundle>
        </Top>
      </Pad>

      <Pad padding={"lg"}>
        <Bottom>
          <Layers gutter="m">
            <span>Includes:</span>
            <ul>
              <li>This is inclusion number 1</li>
              <li>
                This is inclusion number 2 which comes after inclusion number1
              </li>
              <li>This is inclusion number 3</li>
            </ul>
          </Layers>
        </Bottom>
      </Pad>
    </Card>
  );
};

const GiftCardList = () => {
  return (
    <Grid gutter="xl" minItemWidth="16rem">
      <GiftCard />
      <GiftCard />
      <GiftCard />
      <GiftCard />
    </Grid>
  );
};

export default GiftCardList;
