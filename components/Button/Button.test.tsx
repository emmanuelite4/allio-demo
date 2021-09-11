import Button from "./Button";
import renderer from "react-test-renderer";

describe("Button", () => {
  it("matches snapshot", () => {
    const buttonEl = renderer.create(<Button>hi</Button>).toJSON();
    expect(buttonEl).toMatchSnapshot();
  });
});
