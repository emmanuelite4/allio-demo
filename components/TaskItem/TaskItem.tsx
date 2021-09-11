import { FC, useState } from "react";
import { TaskProps } from "../../util/types";
import { TextSm, TextXs } from "../Text/Text";
import styled from "@emotion/styled";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/task.thunk";
import TimeForm from "../TimeForm";
import Moment from "react-moment";

const TaskItem: FC<TaskProps> = (props) => {
  const { id, title, from, to } = props;
  const [showTimeForm, setShowTimeForm] = useState<boolean>(false);
  const toggleShowTimeForm = () => {
    setShowTimeForm((prev) => !prev);
  };
  const dispatch = useDispatch();
  const delItem = () => {
    dispatch(deleteTask(id));
  };
  return (
    <Holder>
      <MainSection>
        <TextSection>
          <TextSm data-testid={"title"}>{title}</TextSm>
          <TimeSection>
            <TextXs>
              {from ? (
                <>
                  <Moment format="HH:mm" date={new Date(from)} /> -{" "}
                  <Moment format="HH:mm" date={new Date(to)} />
                </>
              ) : (
                "No time assigned"
              )}
            </TextXs>
            <TimeButton onClick={toggleShowTimeForm} id={"time-button-update"}>
              {!from ? "Assign time" : "Modify time"}
            </TimeButton>
          </TimeSection>
        </TextSection>
        <Button data-testid={"deleteButton"} onClick={delItem}>
          X
        </Button>
      </MainSection>
      {showTimeForm && (
        <TimeForm id={id} from={from} to={to} onClose={toggleShowTimeForm} />
      )}
    </Holder>
  );
};

export default TaskItem;

const Holder = styled("div")`
  box-shadow: 0 2px 30px 0 rgba(67, 63, 145, 0.09);
  border-radius: 20px;
  margin: 10px 0;
  width: 100%;
`;

const MainSection = styled("div")`
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
`;

const TextSection = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TimeSection = styled("div")`
  display: flex;
  align-items: center;
`;

const TimeButton = styled("button")`
  height: 20px;
  border-radius: 10px;
  outline: none;
  border: 1px solid var(--color-primary);
  //background-color: transparent;
  font-size: 10px;
  cursor: pointer;
  margin-left: 10px;
`;
