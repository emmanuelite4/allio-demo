import { FormEvent, useState } from "react";
import Button from "./Button/Button";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/task.thunk";
import styled from "@emotion/styled";

const TaskForm = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();
  const handleChange = (e: { target: HTMLInputElement }) => {
    setValue(e.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTask(value));
    setValue("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        placeholder={"Add new task"}
        value={value}
        required
      />
      <Button type={"submit"}>+</Button>
    </Form>
  );
};

export default TaskForm;

const Form = styled("form")`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const Input = styled("input")`
  flex: 1;
  height: 44px;
  margin-right: 10px;
  outline: none;
  border-radius: 10px;
  padding: 0 10px;
  border-color: var(--color-primary);
  color: var(--color-secondary);
`;
