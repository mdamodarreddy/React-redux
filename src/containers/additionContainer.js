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
	componentDidUpdate(){
		 
		if(this.state.isSummary){
			let count = this.state.count;
			this.refs.answer.value = this.props.addition[count].answer;
		}
	}
	saveUserAnswer(){
		console.log('saveUserAnswer', this.refs.answer.value);
		if(this.refs.answer.value != "" && !this.state.isSummary){
			let count = this.state.count;
			this.props.addition[count].answer = this.refs.answer.value;
			this.refs.answer.value = "";
			if(count < 9){
				this.setState({count: count + 1});
			}else{
				this.setState({count: 0});
				this.setState({isSummary: true});
			}
		}else{
			return false;
		}
	}

	displaySummaryPage(index){
		this.refs.answer.value = this.props.addition[index].answer
		this.setState({count: index});
	}

	questionPage(count, isSummary){
		let styles = {
			height: '50px',
			width: '50px',
			backgroundColor: "rgba(55, 174, 55, 0.33)",
			fontSize: '36px',
			textAlign: 'center'
		}
		return(
			<div className="row" style={{border: '2px solid black'}}>
				<div className="col-sm-8 col-sm-offset-2">
					<h2> Addition </h2>
				</div>
				<div className="col-sm-2 text-right col-sm-offset-4">
					<h1>{this.props.addition[count].firstValue}</h1>
				</div>
				<div className="clearfix"></div>
				<div className="col-sm-2 text-right col-sm-push-4">
					<h1> + {this.props.addition[count].secondValue}</h1>
				</div>
				<div className="clearfix"></div>
				<div className="col-sm-2 text-right col-sm-offset-4">
					<input style={styles} type="text" ref='answer' maxLength="2"
					autoFocus/>				
					<div>{this.refs.answer ? this.refs.answer.value : ''}</div>
				</div><br/>
				<div className="clearfix"></div>
				<div className="col-sm-3 text-center col-sm-offset-4">
					<button className="btn btn-primary" disable={isSummary}
					onClick={this.saveUserAnswer.bind(this)}>Submit</button>
				</div>
			</div>
		)
	}

	summaryPage(count){

		return(
			<div className="row">
				<div className="col-sm-8">
				{
					this.questionPage(count)
				}
				</div>
				<div className="col-sm-4">
					<ul className="list-group">
					{
						this.props.addition.map((data, index) => {
							return <li className="list-group-item" key={index}
									onClick={this.displaySummaryPage.bind(this, index)}>Question {index + 1}</li>
						})
					}
					</ul>
				</div>	
			
			</div>
		)
	}

	render(){
		console.log('this.props.addition', this.props.addition, this.state.count)
		let count = this.state.count;
		let {isSummary} = this.state;
		return (
			<div>
			{
				isSummary ? this.summaryPage(count) : this.questionPage(count, isSummary)
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