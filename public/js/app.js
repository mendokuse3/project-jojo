
class Emotes extends React.Component {
    state = {

    }

    render(){
        return (
            <div className='emote-container'>
                {this.props.emotes.length > 0 && this.props.emotes.map((commission, index) => {
                    if(commission.commissionType === "Emote"){

                        return (
                        <div className="emotes">
                            <h3>{commission.name}</h3>
                            <img src={commission.imgPath} className='lrg-img'/>
                            <img src={commission.imgPath} className='sml-img'/>
                            {/* <button onClick={() => this.props.deleteCommission(commission._id, index)}>Delete</button> */}
                        </div>
                    )
                }
                })}
            </div>
        )
    }
}

class Icons extends React.Component {
    state = {

    }


    render(){
        return (
            <div className='icon-container'>
                {this.props.icons.length > 0 && this.props.icons.map((commission, index) => {
                    if(commission.commissionType === "Doodle"){

                        return (
                        <div className="icons">
                            <h3>{commission.name}</h3>
                            <img src={commission.imgPath} className='lrg-img'/>
                            <img src={commission.imgPath} className='sml-img'/>
                            {/* <button onClick={() => this.props.deleteCommission(commission._id, index)}>Delete</button> */}
                        </div>
                    )
                }
                })}
            </div>
        )
    }
}



class App extends React.Component {
    state = {
        commissions: []
    }

    componentDidMount() {
        fetch("/jojo")
        .then(response => response.json())
        .then(data => this.setState({commissions: data}))
    }

    deleteCommission = (id, indexOfItemInArray) => {
        fetch(`/jojo/${id}`, {method: "DELETE"})
            .then(()=>{
                this.setState({
                    commissions:[
                        ...this.state.commissions.slice(0,indexOfItemInArray), ...this.state.commissions.slice(indexOfItemInArray +1)
                    ]
                })
            })
    }


    render(){
        return (
            <div className="container">
                <h1>hiya, welcome!!</h1>

                <img className="main-icon" src="../img/main.png" />

                <div className='links'>
                    <a href="mailto:onesixtyarts@gmail.com"><i class="far fa-envelope"></i></a>
                    <a href="https://twitter.com/daijojobu"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/160arts/?hl=en"><i class="fab fa-instagram"></i></a>
                </div>


                <div className="payment">
                <a className='terms' href="https://docs.google.com/document/d/1pZ8b3f5ruFMQgP4gZeteZLkqB3A7VCbuMCrli0NwjPU/edit?usp=sharing">TOS</a>
                    <h3>Payment options</h3>
                    <p><img src="../img/venmo-icon.svg" style={{width: '15px'}}/> Venmo | <i class="fab fa-cc-paypal"></i> Paypal</p>
                </div>

                <p>scroll down for more info!!!</p>

                <h2>Commission Types</h2>

                <h3>emotes<sup>*</sup></h3>

                <p>$25 per emote</p>
                <p>$65 for 3 emotes</p>
                <p>$120 for 5 emotes</p>
                <p><sup>*</sup>cost may vary depending on what is asked</p>

                <Emotes emotes={this.state.commissions} deleteCommission={this.deleteCommission}/>

                <h3>icons<sup>*</sup></h3>
                
                <p>$10 - doodles</p>

                <Icons icons={this.state.commissions} deleteCommission={this.deleteCommission} />

                <p>$25 - transparent head</p>
                <p> +$5 for bust</p>

                <img className="main-icon" src="../img/main.png" />

                <p>all icons will be 500x500</p>
                <p><sup>*</sup>price may vary depending on what’s being asked/extra details</p>


                <h2>have you read the terms of service?</h2>

                <p><strong>if not</strong>, please scroll up to the first page and click the “tos” link next to my socials or click <a href="https://docs.google.com/document/d/1pZ8b3f5ruFMQgP4gZeteZLkqB3A7VCbuMCrli0NwjPU/edit?usp=sharing">here</a>!!</p>
                <p><strong>if you have</strong> and agree to these terms of service, please proceed to the following link and submit a form! i will be contacting you as soon as i can.</p>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));