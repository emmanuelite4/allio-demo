import styled from "@emotion/styled";
import { CSS_BUTTON } from "../styles/shared";
import { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../redux/task.thunk";
import moment from "moment";
import { TextXs } from "./Text/Text";
import { TimeProps } from "../util/types";

interface Props extends TimeProps {
  id: string;
  onClose: () => void;
}

const TimeForm: FC<Props> = (props) => {
  const { id, from, to, onClose } = props;
  const defaultTimeFrom = moment(from || new Date()).format("HH:mm");
  const defaultTimeTo = moment(to || new Date()).format("HH:mm");
  const [value, setValue] = useState<TimeProps>({
    from: defaultTimeFrom,
    to: defaultTimeTo,
  });
  const dispatch = useDispatch();

  const handleChange = (e: { target: HTMLInputElement }) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let today = new Date();
    let from = `${today.getFullYear()}, ${today.getMonth()}, ${today.getDate()}, ${
      value.from
    }`;
    let to = `${today.getFullYear()}, ${today.getMonth()}, ${today.getDate()}, ${
      value.to
    }`;
    dispatch(updateTask({ id, from, to }));
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputSection>
        <div>
          <TextXs>From</TextXs>
          <TimeInput
            type="time"
            min="00:00"
            max="23:59"
            name={"from"}
            value={value.from}
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <TextXs>To</TextXs>
          <TimeInput
            type="time"
            min={value.from}
            max="23:59"
            name={"to"}
            value={value.to}
            required
            onChange={handleChange}
          />
        </div>
      </InputSection>
      <TimeAddButton>Add</TimeAddButton>
    </Form>
  );
};

export default TimeForm;

const Form = styled("form")`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  border-top: 1px solid var(--color-primary);
`;

const TimeInput = styled("input")`
  height: 36px;
  border: 2px solid var(--color-primary);
  outline: none;
  border-radius: 10px;
  padding: 0 5px;
  width: 100%;
`;

const TimeAddButton = styled("button")`
  ${CSS_BUTTON};
  height: 36px;
`;

const InputSection = styled("div")`
  display: flex;
  gap: 10px;

  & > div {
    width: 100%;
    text-align: left;
  }
`;
