import "./CharacterBarChart.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const CharacterBarChart = ({ data }) => {
  const comicOccurrences = {};
  data?.comics?.items.forEach((comic) => {
    const name = comic.name.replace(/[^a-zA-Z ]/g, "");
    comicOccurrences[name] = (comicOccurrences[name] || 0) + 1;
  });

  const topComics = Object.entries(comicOccurrences)
    .filter(([name]) => name !== "")
    .map(([name, appearances]) => ({ name, appearances }))
    .sort((a, b) => b.appearances - a.appearances)
    .slice(0, 10);

  console.log(topComics);

  return (
    <div>
      <h2>Top 10 Comics Featuring {(data?.name || data?.title) ?? "..."}</h2>
      <BarChart
        width={1075}
        height={600}
        data={topComics}
        margin={{ top: 5, bottom: 300 }}
        style={{ overflow: "visible" }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          angle={-45}
          textAnchor="middle"
          tick={{ textAnchor: "end" }}
        />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" />
        <Bar dataKey="appearances" fill="#e01a38" barSize={75} />
      </BarChart>
    </div>
  );
};