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
import { ActivityData, TotalActivity } from '../types/types';
import '../styles/Chart.css';

interface Props {
  activityData: ActivityData;
  type: 'PR' | 'Commit' | 'Review' | 'Incident';
}

const Chart: React.FC<Props> = ({ activityData, type }) => {
  const getActivityData = () => {
    let data: TotalActivity[] = [];

    switch (type) {
      case 'PR':
        data = [
          { name: 'PR Open', value: activityData.totalActivity.find(item => item.name === 'PR Open')?.value || '0' },
          { name: 'PR Merged', value: activityData.totalActivity.find(item => item.name === 'PR Merged')?.value || '0' },
          { name: 'PR Reviewed', value: activityData.totalActivity.find(item => item.name === 'PR Reviewed')?.value || '0' },
          { name: 'PR Comments', value: activityData.totalActivity.find(item => item.name === 'PR Comments')?.value || '0' },
        ];
        break;
      case 'Commit':
        data = [
          { name: 'Commits', value: activityData.totalActivity.find(item => item.name === 'Commits')?.value || '0' },
        ];
        break;
      case 'Review':
        data = [
          { name: 'PR Reviewed', value: activityData.totalActivity.find(item => item.name === 'PR Reviewed')?.value || '0' },
        ];
        break;
      case 'Incident':
        data = [
          { name: 'Incident Alerts', value: activityData.totalActivity.find(item => item.name === 'Incident Alerts')?.value || '0' },
          { name: 'Incidents Resolved', value: activityData.totalActivity.find(item => item.name === 'Incidents Resolved')?.value || '0' },
        ];
        break;
      default:
        break;
    }

    return data;
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
        margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
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
