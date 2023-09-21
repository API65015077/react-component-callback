    import React from 'react';
    import { Component } from 'react';
    import './App.css';
    
    class App extends Component {
        state = {
            vote: 0,
        }
    
        handleCallback = (childData) => {
            this.setState({vote: childData})
        }      
        
        handleCallback2 = (childData) => {
            this.setState({vote: childData})
        }    
    
        handleVote = () => {
            // document.getElementById("resultVote").innerHTML = this.state.vote;
            if (this.state.vote < 11) {
                console.log(this.state.vote)
                this.setState({
                    vote: this.state.vote += 1
                })
                
                if (this.state.vote === 10) {
                    this.setState({
                        vote: "Max"
                    })
                }
            } else if (this.state.vote === "Max") {
                alert("can't vote more than 10")
            } else if ( this.state.vote === "Min") {
                this.setState({
                    vote: 1
                })
            }
        }
    
        handleUnvote = () => {
            // document.getElementById("resultVote").innerHTML = this.state.vote;
            if (this.state.vote === 0) {
                this.setState({
                    vote: "Min"
                })
            } else if (this.state.vote < 10) {
                this.setState({
                    vote: this.state.vote - 1
                })
            } else if (this.state.vote === "Min") {
                alert("can't unvote less than 0")
            } else if ( this.state.vote === "Max") {
                this.setState({
                    vote: 9
                })
            }
        }
    
        
        render() {
            const { vote } = this.state;
            const {menutype, menuname, img} = this.props;
            return (
                <div className="box">
                    <div className="minibox">
                        <div className='menu'>
                            <h2 id='menuType'> { menutype} </h2>
                            <h3 id='menuName'> { menuname } </h3>
                        </div>
                        <p> 
                            lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
                            lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
                            lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
                            lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
                            lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <img src={img} width={"200vw"}></img>
                    </div>
                    <ClickVote 
                        parentCallback={this.handleVote}
                        parentCallback2={this.handleUnvote} 
                        vote={vote}
                    />
                </div>
    
                
            )
        }
    }
    
    class ClickVote extends Component {
    
        callhandleVote = () => {
            this.props.parentCallback(1)
        };
    
        callhandleunVote = () => {
            this.props.parentCallback2(1)
        }
    
        render() {
            const { vote } = this.props;
            return (
                <div className='toclick'>
                    <button id='clickvote' onClick={this.callhandleVote}>click to Vote</button>
                    <div className="result">
                        <h1 id='resultVote'>
                            {vote}
                        </h1>
                    </div>
                    <button id='clickunvote' onClick={this.callhandleunVote}>click to Unvote</button>
                </div>
            )
        }
    }

export default App;
