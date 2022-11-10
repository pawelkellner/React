import { Switch, Route } from "react-router-dom";
import React from "react"

import Intro from "../Home/Intro";

import "./App.css";
import QuestionsRouter from "../QuestionsRouter/QuestionsRouter";
import Outro from "../Outro/Outro";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            questionAndAnswers: []
        }
    }

    onLast = (newQuestionAndAnswers) =>{
        this.setState({
            questionAndAnswers: newQuestionAndAnswers
        })
    }


    render(){
        return(
            <>
                <Switch>
                    <Route path="/vraag/:number">
                        <QuestionsRouter onLast={this.onLast} />
                    </Route>
                    <Route path="/outro">
                        <Outro questionAndAnswers={this.state.questionAndAnswers} />
                    </Route>
                    <Route path="/" component={Intro}></Route>
                </Switch>
            </>
        )
    }
}

export default App;