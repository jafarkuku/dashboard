import React, { Component } from 'react';

import './App.css';
import data from './data/data.json';

//Components
import Header from './components/Header';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dashboard: {
        data:[],
        selected_data:{},
        toggle: false,
      }
    }
  }

  componentDidMount() {
    const dashboard = Object.assign({}, this.state.dashboard, {
      data: data,
      selected_data: data.company_data[4]
    });
    this.setState({ dashboard });
  }

  filterData = (e) => {
    const selected_data = this.state.dashboard.data.company_data.filter(
      el=> el.date === e.currentTarget.dataset.id )
    const dashboard = Object.assign({}, this.state.dashboard, {
      selected_data: selected_data[0],
      toggle: !this.state.dashboard.toggle
    })
    this.setState({ dashboard });
  }

  onToggle = () => {
    const dashboard = Object.assign({}, this.state.dashboard, {
      toggle: !this.state.dashboard.toggle
    })
    this.setState({ dashboard });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Banner
          company_name={this.state.dashboard.data.company_name}
          user={this.state.dashboard.data.user}
          team={this.state.dashboard.data.team}
          selected_date={this.state.dashboard.selected_data.date}
        />
        <Dashboard
          data={this.state.dashboard.selected_data}
          dates={this.state.dashboard.data.company_data}
          onDateClick={this.filterData}
          selectedDate={this.state.dashboard.selected_data.date}
          toggle={this.state.dashboard.toggle}
          onToggle={this.onToggle}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
