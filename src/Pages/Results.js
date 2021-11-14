import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";


export const Results = () => {
  const data_votes = [
    { name: "List1", votes: 110 },
    { name: "List2", votes: 70 },
    { name: "List3", votes: 45 },
    { name: "Blank Votes", votes: 25 },
  ];

  const data_seats = [
    { name: "Liste 1", seats: 8},
    { name: "Liste 2", seats: 5},
    { name: "Liste 3", seats: 4},
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20vh',
            color: '#1d04ad' }}><h1>Elections Results</h1>
            </div>

      <div style={{ display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '5vh',
            color: '#1d04ad' }}><h2>List 1 Won The Elections</h2>
            </div>

      <div>
        <div style={{ display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            color: '#1d04ad' }}>
          <div><h2> Seats Repartition: </h2></div>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="seats"
            isAnimationActive={false}
            data={data_seats}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#1d04ad"
            label
          />
          <Tooltip />
        </PieChart></div>

        <div style={{ display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            color: '#1d04ad' }}>
          <div><h2> Votes Repartition: </h2></div>
        <BarChart
          width={500}
          height={300}
          data={data_votes}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="votes" fill="#1d04ad" background={{ fill: "#eee" }} />
        </BarChart></div>

      </div>
    </div>
  );
};
