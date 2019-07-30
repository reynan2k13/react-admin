import styles from '../../css/css-modules/table.css';

class TableManagementComponents extends React.Component{
	constructor(){
      super()
      this.state = {
        selected : 1
      }
    }

    setFilter(filter){
      console.log("filter", filter)
      this.setState({selected  : filter})
      // this.props.onChangeFilter(filter);
    }

    isActive(value){
      return ((value===this.state.selected) ?' isActive':' isDefault');
    }



	render(){
		return(
			<div style={{'padding': '0 20px 0 20px'}}>
				<div className={styles.panelHeading}>
					<span className={'fa fa-table ' +styles.small}> 
						<span> TABLE MANAGEMENT</span>
					</span>
				</div>
				<div className={styles.panelBody}>
					<ul className="nav nav-tabs">
		              <li>
		                <a className={this.isActive(1)}  onClick={this.setFilter.bind(this, 1)} >
		                  Table Information
		                </a>  
		              </li>
		              <li>
		                <a className={this.isActive(2)}  onClick={this.setFilter.bind(this, 2)} >
		                  Table Profile
		                </a>  
		              </li>
		              <li>
		                <a className={this.isActive(3)}  onClick={this.setFilter.bind(this, 3)} >
		                  Speed Profile
		                </a>  
		              </li>		              
					</ul>
					<div className='col-md-4 col-xs-3'>
						<button className={'btn btn-warning btn-sm'} >
							<span className={'fa fa-edit ' +styles.small}> Edit</span>
						</button>
					</div>

					<div className={styles.tabContent}>
			            {(this.state.selected === 1) ? <div>eeeeee</div> : null}
			            {(this.state.selected === 2) ? <div>zzzzzz</div> : null}
			            {(this.state.selected === 3) ? <div>vvvvvvd</div> : null}
					</div>
				</div>
				
			</div>	
		)
	} 

}

export default TableManagementComponents;
