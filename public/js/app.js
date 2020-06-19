


class App extends React.Component {
    state = {
        commissions: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/project-jojo")
        .then(response => response.json())
        .then(data => this.setState({commissions: data}))
    }

    render(){
        return (
            <div className="container">
                <h1>hello</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));