import React from 'react';
import PieChart from './Piechart';
import BarChart from './Barchart';
import LineChart from './Linechart';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      <div style={{ width: '45%', margin: '10px' }}>
        <PieChart />
      </div>
      <div style={{ width: '45%', margin: '10px' }}>
        <BarChart />
      </div>
      <div style={{ width: '45%', margin: '10px' }}>
        <LineChart />
      </div>
    </div>
  );
};

export default Dashboard;
