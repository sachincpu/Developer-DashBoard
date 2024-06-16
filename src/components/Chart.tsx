import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { ActivityData } from '../types/types';
import '../styles/Chart.css';

interface Props {
  activityData: ActivityData;
}

const Chart: React.FC<Props> = ({ activityData }) => {
  const getActivityData = () => {
    return activityData.totalActivity.map(activity => ({
      name: activity.name,
      value: parseInt(activity.value),
    }));
  };

  const getColor = (activityName: string) => {
    switch (activityName) {
      case 'PR Open':
        return '#EF6B6B';
      case 'PR Merged':
        return '#61CDBB';
      case 'Commits':
        return '#FAC76E';
      case 'PR Reviewed':
        return '#C2528B';
      case 'PR Comments':
        return '#0396A6';
      case 'Incident Alerts':
        return '#5F50A9';
      case 'Incidents Resolved':
        return '#8F3519';
      default:
        return '#8884d8';
    }
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={getActivityData()}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value">
          {getActivityData().map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor(entry.name)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
