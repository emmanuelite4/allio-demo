import { Pie } from "react-chartjs-2";
import { FC } from "react";
import "chartjs-adapter-moment";
import { useSelector } from "react-redux";
import {
  selectTaskTitle,
  selectTimeFilteredTask,
} from "../redux/task.selector";
import moment from "moment";
import randomColor from "../util/randomColor";
import styled from "@emotion/styled";

const Chart: FC = () => {
  const dates = useSelector(selectTimeFilteredTask);
  const titles = useSelector(selectTaskTitle);

  let backgroundColor = randomColor(dates.length);

  const data = {
    labels: titles,
    datasets: [
      {
        data: dates,
        backgroundColor: backgroundColor,
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        callbacks: {
          labelTextColor: (context: any) => {
            return "yellow";
          },
          label: (context: any) => {
            let from = moment(new Date(context.label.from)).format("HH:mm");
            let to = moment(new Date(context.label.to)).format("HH:mm");

            return `${from} - ${to}`;
          },
        },
      },
    },
  };
  return (
    <Holder>
      <Pie data={data} options={options} />
    </Holder>
  );
};
export default Chart;

const Holder = styled("div")`
  width: 250px;
  position: relative;
`;
