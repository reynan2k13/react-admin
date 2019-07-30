import styles from '../../css/css-modules/dashboard.css'; 

class DashboardComponents extends React.Component{

	render(){
		return(
			<div style={{'padding': '0 20px 0 20px'}}>
				<div className={styles.panelBody}>
					<div className={styles.panelDefault}>
						<h1>Welcome to the OFC Pineapple Management System</h1>
						<h1>Manager</h1>
					</div>
				</div>
			</div>	
		)
	} 

}

export default DashboardComponents;
