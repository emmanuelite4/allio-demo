import { mount } from "../../util/test-utils";
import TaskItem from "./TaskItem";
import { TextSm, TextXs } from "../Text/Text";
import moment from "moment";

describe("Task Item", () => {
  let wrapper: any;
  beforeAll(() => {
    wrapper = mount(<TaskItem id={"1"} title={"Task one"} from={""} to={""} />);
  });

  it("renders with one TextSm title", () => {
    let titleEl = wrapper.find(TextSm);
    expect(titleEl).toHaveLength(1);
  });
  it("renders task item title correctly", () => {
    let titleEl = wrapper.find(TextSm);
    expect(titleEl.text()).toBe("Task one");
  });
  it("renders with no time when created", () => {
    let timeEl = wrapper.find(TextXs);
    expect(timeEl.at(0).text()).toBe("No time assigned");
  });
  it("renders button with no time", () => {
    let buttonEl = wrapper.find("#time-button-update").at(0);

    expect(buttonEl.text()).toBe("Assign time");
  });
  it("renders time correctly", () => {
    let from = new Date();
    let to = new Date();

    wrapper = mount(
      <TaskItem
        id={"1"}
        title={"Task one"}
        from={from.toString()}
        to={to.toString()}
      />
    );

    let timeEl = wrapper.find(TextXs);
    let displayedTime = `${moment(from).format("HH:mm")} - ${moment(to).format(
      "HH:mm"
    )}`;
    expect(timeEl.at(0).text()).toBe(displayedTime);
  });
  it("renders button with time", () => {
    let buttonEl = wrapper.find("#time-button-update").at(0);

    expect(buttonEl.text()).toBe("Modify time");
  });
});
