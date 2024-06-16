import React, { useState, useEffect } from 'react';
import Chart from './components/Chart';
import { ActivityData } from './types/types';
import mockData from './mock_data'

const App: React.FC = () => {
  const [activityData, setActivityData] = useState<ActivityData[]>([]);

  useEffect(() => {
    setActivityData(mockData.AuthorWorklog.rows);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Developer Activity Dashboard</h1>
      </header>
      <div className="Charts-container">
        {activityData.map((data, index) => (
          <div className="Chart-container" key={index}>
            <h2>{data.name}</h2>
            <Chart activityData={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;