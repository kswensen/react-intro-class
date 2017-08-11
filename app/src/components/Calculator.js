import React, { Component } from 'react';
import calculatorImg from './calculator.png';
import './Calculator.css';

class Calculator extends Component {
    constructor(){
        super();

        this.state = {
            header: "Yup, this is a calculator",
            display: "0",
            operator: null,
            tempNum: 0
        }
    }

    updateHeader(e){
        let value = e.target.value;
        this.setState({
            header: value
        })
    }

    onPressNum(num){
        var currentDisplay = this.state.display === "0" ? num : this.state.display + num;
        if(currentDisplay.length < 13){
            this.setState({
                display: parseInt(currentDisplay)
            })
        }
    }

    onPressClear(){
        this.setState({
            display: "0",
            tempNum: 0,
            operator: null
        })
    }

    onPressPlus(){
        this.setState({
            tempNum: this.state.display,
            display: "0",
            operator: "+"
        })
    }

    onPressMinus(){
        this.setState({
            tempNum: this.state.display,
            display: "0",
            operator: "-"
        })
    }

    onPressDivide(){
        this.setState({
            tempNum: this.state.display,
            display: "0",
            operator: "/"
        })
    }

    onPressMultiply(){
        this.setState({
            tempNum: this.state.display,
            display: "0",
            operator: "*"
        })
    }

    onPressEquals(){
        var result = 0;
        switch(this.state.operator){
            case "+":
                result = this.state.tempNum + this.state.display;
                break;
            case "-":
                result = this.state.tempNum - this.state.display;
                break;
            case "/":
                result = this.state.tempNum / this.state.display;
                break;
            case "*":
                result = this.state.tempNum * this.state.display;
                break;
        }
        this.setState({
            display: result
        })
    }
    
    render() {
        return (
            <div id="calculator-container">
                <input id="header-input" onChange={ (e)=> this.updateHeader(e)}/>
                <h1 id="header"> { this.state.header } </h1>
                <img className="remove-highlight" src={calculatorImg} alt="calculator" />
                <div id="calculator-mask" className="remove-highlight">
                    <div className="output">
                        <span className="total">
                            { this.state.display }
                        </span>
                    </div>

                    <div className="btn clear" onClick={(e)=> this.onPressClear()}></div>

                    <div className="btn zero" onClick={(e)=> this.onPressNum("0")}></div>
                    <div className="btn one" onClick={(e)=> this.onPressNum("1")}></div>
                    <div className="btn two" onClick={(e)=> this.onPressNum("2")}></div>
                    <div className="btn three" onClick={(e)=> this.onPressNum("3")}></div>
                    <div className="btn four" onClick={(e)=> this.onPressNum("4")}></div>
                    <div className="btn five" onClick={(e)=> this.onPressNum("5")}></div>
                    <div className="btn six" onClick={(e)=> this.onPressNum("6")}></div>
                    <div className="btn seven" onClick={(e)=> this.onPressNum("7")}></div>
                    <div className="btn eight" onClick={(e)=> this.onPressNum("8")}></div>
                    <div className="btn nine" onClick={(e)=> this.onPressNum("9")}></div>

                    <div className="btn equal" onClick={(e)=> this.onPressEquals()}></div>
                    <div className="btn multiply" onClick={(e)=> this.onPressMultiply()}></div>
                    <div className="btn divide" onClick={(e)=> this.onPressDivide()}></div>
                    <div className="btn subtract" onClick={(e)=> this.onPressMinus()}></div>
                    <div className="btn add" onClick={(e)=> this.onPressPlus()}></div>
                </div>
            </div>
        )
    }
}

export default Calculator;