export interface ActivityData {
    name: string;
    totalActivity: TotalActivity[];
    dayWiseActivity: DayWiseActivity[];
    activeDays: ActiveDays;
  }
  
  export interface TotalActivity {
    name: string;
    value: string;
  }
  
  export interface DayWiseActivity {
    date: string;
    items: ActivityItemGroup;
  }
  
  export interface ActivityItemGroup {
    children: ActivityItem[];
  }
  
  export interface ActivityItem {
    count: string;
    label: string;
    fillColor: string;
  }
  
  export interface ActiveDays {
    days: number;
    isBurnOut: boolean;
    insight: string[];
  }
  