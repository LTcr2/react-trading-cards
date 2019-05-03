class Homepage extends React.Component {
	render(){
        return (<div>
        Welcome to our site!
		    <a href ="/cards">Card Page</a>
        <img src="/static/img/balloonicorn.jpg"/>
        </div>);
        
	}
}

ReactDOM.render(<Homepage />, document.getElementById('app'));