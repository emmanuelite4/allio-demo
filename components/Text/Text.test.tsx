import { TextSm, TextXs } from "./Text";
import renderer from "react-test-renderer";

describe("Text", () => {
  it("TextSm matches snapshot", () => {
    expect(renderer.create(<TextSm />).toJSON()).toMatchSnapshot();
  });
  it("TextSm matches snapshot", () => {
    expect(renderer.create(<TextXs />).toJSON()).toMatchSnapshot();
  });
});
