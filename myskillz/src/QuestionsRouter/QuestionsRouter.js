import React from "react";
import {withRouter} from "react-router-dom"

import questions from "../data/questions";

import Question from "../Question/Question";

class QuestionsRouter extends React.Component{
    constructor(props){
        super(props);
        this.myNumber = this.props.match.params.number;
        this.state = {
            questions: []
        }
    }

    componentDidMount(){
        this.setState({questions: questions});
    }

    onRate = (rating, number) =>{
        let oldState = this.state.questions;
        let newState = oldState.map(question =>{
            if(question.number === number){
                question.rating = rating;
                return question;
            }else{
                return question;
            }
        })

        this.setState({questions: newState})
    }

    render(){
        this.myNumber = this.props.match.params.number;
        let questionToBeRendered = this.state.questions.map(questionObject =>{
            if(questionObject.number == this.myNumber){
                return <Question onLast={() => this.props.onLast(this.state.questions)} last={questionObject.last} onRate={this.onRate} previous={questionObject.previous} next={questionObject.next} key={questionObject.number} number={questionObject.number} question={questionObject.question} rating={questionObject.rating}/>;
            }
        })
        return(
            <>
                {questionToBeRendered}
            </>
           
        );
    }
}

export default withRouter(QuestionsRouter);