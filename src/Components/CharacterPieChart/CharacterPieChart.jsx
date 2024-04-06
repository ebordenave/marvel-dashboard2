
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

export const CharacterPieChart = () => (
  <PieChart width={800} height={400}>
    <Pie
      dataKey="value"
      isAnimationActive={false}
      data={data}
      // cx={200}
      // cy={200}
      outerRadius={100}
      fill="#e01a38"
      label
    />
    <Tooltip />
    <Legend />
  </PieChart>
);