import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    CartesianGrid,
  } from "recharts";
import { BooksDay, NumberDay, Span, StatisticsHome, TextStats } from "./Statistics.styled";
const data = [
    {
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      uv: 2000,
      pv: 6800,
      amt: 2290
    },
    {
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];
const Statistics = () => {
    return (
      <>       
        <StatisticsHome>
        <BooksDay>
          <TextStats>Кількість сторінок</TextStats>
          <Span> / </Span>
          <TextStats> день </TextStats>
          <NumberDay>0</NumberDay>
        </BooksDay>
        <LineChart
        width={810}
        height={245}
        data={data}
        >
      <CartesianGrid  vertical horizontal={false}/>
      <XAxis 
        dataKey="name"
        label={{ value: "Time", position: "insideBottomRight", offset: 0 }}
        stroke="#B1B5C2" 
        tickLine={false}
      />
        <Tooltip />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#091E3F"
        strokeWidth={2}
        activeDot={{ r: 5 }}
      />
      <Line type="monotone"
        dataKey="uv"
        stroke="#FF6B08"
        strokeWidth={2}
       />
    </LineChart>
    </StatisticsHome>
        </>
    );
};

export default Statistics;





