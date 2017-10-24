import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
var firebase=require('firebase');
var uuid=require('uuid');
var config = {
    apiKey: "AIzaSyCks21AVQkEp3tmIfU76_c3Oh1txiu6CUs",
    authDomain: "authsurvey-62fec.firebaseapp.com",
    databaseURL: "https://authsurvey-62fec.firebaseio.com",
    projectId: "authsurvey-62fec",
    storageBucket: "authsurvey-62fec.appspot.com",
    messagingSenderId: "163641948196"
  };
  firebase.initializeApp(config);

class Github extends Component {
  qwestionSubmit(event){
    firebase.database().ref('survey/'+this.state.uid).set({
      studentName:this.state.studentName,
      answers:this.state.answers
    })
    this.setState({isSubmitted:true});
  }
  answerSelected(event){
    var answers=this.state.answers;
    if(event.target.name=== 'answer1'){
      answers.answer1=event.target.value;
    }else if (event.target.name==='answer2') {

      answers.answer2=event.target.value;
    }else if (event.target.name==='answer3') {

      answers.answer3=event.target.value;
    }else if (event.target.name==='answer4') {

      answers.answer4=event.target.value;
    }else if (event.target.name==='answer5') {

      answers.answer5=event.target.value;
    }
    this.setState({answers:answers})

  }
  nameSubmit(event){
    var studentName=this.refs.name.value;
    this.setState({studentName:studentName})

  }
  constructor(props){
    super(props);

    this.state = {
      uid:uuid.v1(),
      studentName:'',
      answers:{
        answer1:'',
        answer2:'',
        answer3:'',
        answer4:'',
        answer5:''
      },
      isSubmitted:false

    };
    this.answerSelected=this.answerSelected.bind(this);
  }

  render(){
    var studentName;
    var qwestions;
    if(this.state.studentName===''&&this.state.isSubmitted===false){
      studentName=<div>
        <h1>Hey, let me know your names</h1>
        <form onSubmit={this.nameSubmit.bind(this)}>
          <input type="text" className="namy" placeholder="enter your name" ref="name"/>
        </form>
      </div>
      qwestions=''
    }else if(this.state.studentName != '' && this.state.isSubmitted===false){
      studentName=<h1>welcome, {this.state.studentName} to our survey form</h1>
      qwestions=<div>
        <h2>here are some qwestions you need to answer {this.state.studentName}</h2>
        <form onSubmit={this.qwestionSubmit.bind(this)}>
          <div className="card">
            <label>did you like the product</label><br/>
            <input type="radio" value="yes" name="answer1" onChange={this.answerSelected}/>yes
            <input type="radio" value="yes" name="answer1" onChange={this.answerSelected}/>no
            <input type="radio" value="yes" name="answer1" onChange={this.answerSelected}/>somewhat
          </div>
          <div className="card">
            <label>what game do you like </label><br/>
            <input type="radio" name="answer2" value="cricket" onChange={this.answerSelected}/>Cricket
            <input type="radio" name="answer2" value="football" onChange={this.answerSelected}/>football
            <input type="radio" name="answer2" value="hockey" onChange={this.answerSelected}/>hockey
            <input type="radio" name="answer2" value="tennis" onChange={this.answerSelected}/>tennis
          </div>
          <div className="card">
            <label>what kind of  movie do you like to watch </label><br/>
            <input type="radio" name="answer3" value="horror" onChange={this.answerSelected}/>horror
            <input type="radio" name="answer3" value="comedy" onChange={this.answerSelected}/>comedy
            <input type="radio" name="answer3" value="thriller" onChange={this.answerSelected}/>thriller
            <input type="radio" name="answer3" value="romantic" onChange={this.answerSelected}/>romantic
          </div>
          <div className="card">
            <label>what skills do you have</label><br/>
            <input type="radio" name="answer4" value="programming" onChange={this.answerSelected}/>programming
            <input type="radio" name="answer4" value="designing" onChange={this.answerSelected}/>designing
            <input type="radio" name="answer4" value="gaming" onChange={this.answerSelected}/>gaming
            <input type="radio" name="answer4" value="others" onChange={this.answerSelected}/>others
          </div>
          <div className="card">
            <label>which course did yoou like the most</label><br/>
            <input type="radio" name="answer5" value="react js" onChange={this.answerSelected}/>react js
            <input type="radio" name="answer5" value="php" onChange={this.answerSelected}/>php
            <input type="radio" name="answer5" value="java" onChange={this.answerSelected}/>java
            <input type="radio" name="answer5" value="c++" onChange={this.answerSelected}/>c++
          </div>
          <input type="submit" value="submit" />

        </form>
      </div>

    }else if (this.state.isSubmitted === true) {
      studentName=<h1> thanks,{this.state.studentName}</h1>

    }
    return(
      <div>
        {studentName}
        ---------------------------
        {qwestions}
      </div>
    );
  }
}
export default Github;
