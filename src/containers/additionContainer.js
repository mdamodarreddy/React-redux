import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveAnswer } from '../actions/index';

class AdditionContainer extends Component {
	constructor(){
		super();
		this.state = {
			count: 0,
			isSummary: false
		}
	}
	saveUserAnswer(){
		console.log('saveUserAnswer', this.refs.answer.value);
		let count = this.state.count;
		this.props.addition[count].answer = this.refs.answer.value;
		if(count < 9){
			this.setState({count: count + 1});
		}else{
			this.setState({isSummary: true});
		}
	}

	questionPage(count){
		return(
			<div>
				<h1>{this.props.addition[count].firstValue}</h1>
				<h1>{this.props.addition[count].secondValue}</h1>
				<input style={{height: '50px', width: '50px'}}
				type="text" pattern="[0-9]*" inputMode="numeric" 
				placeholder="enter addition value"
				ref='answer'/>
				<div>{this.refs.answer ? this.refs.answer.value : ''}</div>
				<button onClick={this.saveUserAnswer.bind(this)}>Submit</button>
			</div>
		)
	}

	summaryPage(){
			return(
					<ul>
					{
						this.props.addition.map((data, index) => {
							return <li key={index}>{data.firstValue} + {data.secondValue} = {data.answer}</li>
						})
					}
					</ul>
			)
	}

	render(){
		console.log('this.props.addition', this.props.addition, this.state.count)
		let count = this.state.count;
		let {isSummary} = this.state;
		return (
			<div>
			{
				isSummary ? this.summaryPage() : this.questionPage(count)
			}
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		addition: state.addition
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({saveAnswer: saveAnswer}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AdditionContainer);