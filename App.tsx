import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Chart from './components/Chart';
import mockData from './mock_data';
import { ActivityData } from './types/types';
import './styles/index.css';
import 'react-tabs/style/react-tabs.css';

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
      <Tabs>
        <TabList>
          <Tab>PR Metrics</Tab>
          <Tab>Commit Metrics</Tab>
          <Tab>Review Metrics</Tab>
          <Tab>Incident Metrics</Tab>
        </TabList>

        <TabPanel>
          <div className="Charts-container">
            {activityData.map((data, index) => (
              <div className="Chart-container" key={index}>
                <h2>{data.name}</h2>
                <Chart activityData={data} type="PR" />
              </div>
            ))}
          </div>
        </TabPanel>
        
        <TabPanel>
          <div className="Charts-container">
            {activityData.map((data, index) => (
              <div className="Chart-container" key={index}>
                <h2>{data.name}</h2>
                <Chart activityData={data} type="Commit" />
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="Charts-container">
            {activityData.map((data, index) => (
              <div className="Chart-container" key={index}>
                <h2>{data.name}</h2>
                <Chart activityData={data} type="Review" />
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="Charts-container">
            {activityData.map((data, index) => (
              <div className="Chart-container" key={index}>
                <h2>{data.name}</h2>
                <Chart activityData={data} type="Incident" />
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default App;
