class NavFormComponents extends React.Component{

	render(){
		return(
			<form>
				<label>
					Name:
					<input type="text" name="name" />
				</label>
				<input type="submit" value="Submit" />
			</form>
		)
	} 

}

export default NavFormComponents;