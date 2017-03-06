console.log('Loaded main.js into index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Footer from './Footer';
import MyTable from './MyTable';
import DashboardCard from './DashboardCard';
import DashboardBarGraph from './DashboardBarGraph';
import NavButton from './NavButton';
import ReportsPanel from './ReportsPanel';
import ExceptionModalButton from './ExceptionModalButton';
import ExceptionDetailsModal from './ExceptionDetailsModal';
require('bootstrap');

console.log("Inside main");
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Footer),
    document.getElementById('mount')

  );

  ReactDOM.render(
    React.createElement(NavButton, {name: "Dashboard"}),
    document.getElementById('dashboardA')
  );

  ReactDOM.render(
    React.createElement(NavButton, {name: "Rules"}),
    document.getElementById('rulesA')
  );

  ReactDOM.render(
    React.createElement(NavButton, {name: "Reports"}),
    document.getElementById('reportsA')
  );

  ReactDOM.render(
    React.createElement(DashboardBarGraph),
    document.getElementById('graphContainer')
  );

  ReactDOM.render(
    React.createElement(ReportsPanel,  {image1: "./images/report1.png", image2: "./images/report2.png", image3: "./images/report3.png"}),
    document.getElementById('reportPanelContainer')
  );

   ReactDOM.render(
    React.createElement(ReportsPanel,  {image1: "./images/report1.png", image2: "./images/report2.png", image3: "./images/report3.png"}),
    document.getElementById('resultPanelContainer')
  );

  ReactDOM.render(
    React.createElement(MyTable),
    document.getElementById('tableContainer')
  );

  ReactDOM.render(
    React.createElement(DashboardCard, {SourceOfImage: './images/people.png', OptionName: 'FIRST REVIEWS NEEDED' , NumberOf: '270'}),
    document.getElementById('card1')
  );

  ReactDOM.render(
    React.createElement(DashboardCard, {SourceOfImage: './images/loc.png', OptionName: 'SECOND REVIEWS NEEDED' , NumberOf: '82'}),
    document.getElementById('card2')
  );

   ReactDOM.render(
    React.createElement(DashboardCard, {SourceOfImage: './images/time.png', OptionName: 'PROSPECTUSES RECEIVED' , NumberOf: '0'}),
    document.getElementById('card3')
  );

  ReactDOM.render(
    React.createElement(DashboardCard, {SourceOfImage: './images/loc.png', OptionName: 'NEW FUNDS' , NumberOf: '1'}),
    document.getElementById('card4')
  );

  ReactDOM.render(
    React.createElement(DashboardCard, {SourceOfImage: './images/loc.png', OptionName: 'REPORTS NEEDED' , NumberOf: '4'}),
    document.getElementById('card5')
  );

  ReactDOM.render(
    React.createElement(DashboardCard, {SourceOfImage: './images/loc.png', OptionName: 'ASSIGNED TASKS' , NumberOf: '12'}),
    document.getElementById('card6')
  );
  
  ReactDOM.render(
    React.createElement(ExceptionModalButton),
    document.getElementById('modalbutt')
  );
});