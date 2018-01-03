import React from 'react';

import DashboardHeader from '../DashboardHeader';
import Card from '../Card';

const Dashboard = (props) => {
  const {
    data,
    dates,
    onDateClick,
    selectedDate,
    toggle,
    onToggle
  } = props;

  //console.log(props)

  return (
    <div className="dashboard">
      <DashboardHeader
        dates={dates}
        onClick={onDateClick}
        selectedDate={selectedDate}
        toggle={toggle}
        onToggle={onToggle}
      />
      <div className="dashboard-cards">
        <Card
          card_id="customer_satisfaction"
          title="Customer Satisfaction"
          info={data.customer_satisfaction}
        />
        <Card
          card_id="cust_satisfaction_target"
          title="Cust Satisfaction Target"
          info={data.cust_satisfaction_target}
        />
        <Card
          card_id="banana_taste"
          title="Banana Taste"
          info={data.banana_taste}
        />
        <Card
          card_id="banana_deliveries"
          title="Banana Deliveries"
          info={data.banana_deliveries}
        />
        <Card
          card_id="target_banana_deliveries"
          title="Target Banana Deliveries"
          info={data.target_banana_deliveries}
        />
        <Card
          card_id="data_quality"
          title="Data Quality"
          info={data.data_quality}
        />
        <Card
          card_id="data_quality_target"
          title="Data Quality Target"
          info={data.data_quality_target}
        />
      </div>
    </div>
  )
}

export default Dashboard;
