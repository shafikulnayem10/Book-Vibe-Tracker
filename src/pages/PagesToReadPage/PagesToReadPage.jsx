import React, { useContext } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BookContext } from "../../context/BookContext";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#f97316", "#ef4444"];

const PagesToReadPage = () => {
  const { readList } = useContext(BookContext);

  const data = readList.map((book) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <p className="text-xl text-gray-500">
          No books in your read list yet!
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-8 my-10">
      <div className="bg-gray-100 rounded-2xl p-8">
        <ResponsiveContainer width="100%" height={450}>
          <AreaChart
            data={data}
            margin={{ top: 40, right: 40, left: 0, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#d1d5db" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 13, fill: "#374151" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 13, fill: "#374151" }}
              axisLine={false}
              tickLine={false}
              tickCount={6}
            />
            <Tooltip
              formatter={(value) => [`${value} pages`, "Pages"]}
              contentStyle={{ borderRadius: "8px", fontSize: "13px" }}
            />
            {data.map((entry, index) => (
              <Area
                key={entry.name}
                type="monotone"
                dataKey="pages"
                stroke={COLORS[index % COLORS.length]}
                fill={COLORS[index % COLORS.length]}
                fillOpacity={0.85}
                dot={{
                  r: 4,
                  fill: COLORS[index % COLORS.length],
                  stroke: "white",
                  strokeWidth: 2,
                }}
                label={{
                  position: "top",
                  fill: COLORS[index % COLORS.length],
                  fontSize: 13,
                  fontWeight: "bold",
                }}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PagesToReadPage;

