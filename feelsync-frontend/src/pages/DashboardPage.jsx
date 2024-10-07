import React from 'react';
import MoodEntryForm from '../components/MoodEntryForm';
import MoodHistoryGraph from '../components/MoodHistoryGraph';

function DashboardPage() {
  return (
    <div className="dashboard">
      <h2>Welcome to your FeelSync Dashboard</h2>
      <MoodEntryForm />
      <MoodHistoryGraph />
    </div>
  );
}

export default DashboardPage;
