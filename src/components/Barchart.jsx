import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, BarElement, Title, CategoryScale, LinearScale } from 'chart.js';

// Registrar las escalas y componentes necesarios
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title);

const Barchart = () => {
  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
    datasets: [{
      label: 'Ejemplo de datos',
      data: [10, 20, 30, 40],
      backgroundColor: ['red', 'blue', 'yellow', 'green'],
    }],
  };

  return (
    <div style={{ width: '600px', height: '400px' }}>
      <Bar data={data} />
    </div>
  );
};

export default Barchart;
