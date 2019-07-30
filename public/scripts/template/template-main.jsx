import React from 'react';
import DashboardComponents from '../template/template-dashboard.jsx';
import TableManagementComponents from '../template/template-table.jsx';
import ReportComponents from '../template/template-report.jsx';
import style from '../../css/main.css'; 

class MainTemplate extends React.Component {
    constructor(){
      super()
      this.state = {
        selected : 'dashboard'
      }
    }

    setFilter(filter){
      console.log("filter", filter)
      this.setState({selected  : filter})
      // this.props.onChangeFilter(filter);
    }

    isActive(value){
      let classIcon;
      switch(value){
        case 'dashboard' :
          classIcon = 'fa fa-dashboard';
          break;
        case 'table-management':
          classIcon = 'fa fa-table';
          break;
        case 'reports':
          classIcon = 'dropdown fa fa-history';
          break;

      }
      return classIcon + '' +((value===this.state.selected) ?' active':' default');
    }


    render(){
        return (
          <div>
          <nav className="navbar navbar-default">
              <li className="nav navbar-nav">
                <a className={this.isActive('dashboard')}  onClick={this.setFilter.bind(this, 'dashboard')} >
                  <p>Dashboard</p>
                </a>  
              </li>
              <li className="nav navbar-nav">
                <a className={this.isActive('table-management')}  onClick={this.setFilter.bind(this, 'table-management')} >
                  <p>Table Management</p>
                </a>  
              </li>
              <li className="dropdown">
                <a className={this.isActive('reports')}  onClick={this.setFilter.bind(this, 'reports')} >
                  <p>Reports
                    <span className="fa-angle-down" style={{'marginLeft': '5px'}} ></span>
                  </p>
                </a>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </li>                                                                 
          </nav>
            {(this.state.selected === 'dashboard') ? <DashboardComponents></DashboardComponents> : null}
            {(this.state.selected === 'table-management') ? <TableManagementComponents></TableManagementComponents> : null}
            {(this.state.selected === 'reports') ? <ReportComponents></ReportComponents> : null}
          </div>
        )
    }
}


export default MainTemplate;


