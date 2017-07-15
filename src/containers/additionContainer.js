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
		if(this.refs.answer.value != ""){
			let count = this.state.count;
			this.props.addition[count].answer = this.refs.answer.value;
			this.refs.answer.value = "";
			if(count < 9){
				this.setState({count: count + 1});
			}else{
				this.setState({isSummary: true});
			}
		}else{
			return false;
		}
	}

	questionPage(count){
		let styles = {
			height: '50px',
			width: '50px',
			backgroundColor: "rgba(55, 174, 55, 0.33)",
			fontSize: '36px',
			textAlign: 'center'
		}
		return(
			<div className="container">
				<div className="row text-center">
					<h1>{this.props.addition[count].firstValue}</h1>
					<h1> + {this.props.addition[count].secondValue}</h1>
					<input style={styles} type="text" ref='answer' maxLength="2"
					autoFocus/>
					<div>{this.refs.answer ? this.refs.answer.value : ''}</div>
					<br/>
					<button className="btn btn-primary" onClick={this.saveUserAnswer.bind(this)}>Submit</button>
				</div>
			</div>
		)
	}

	summaryPage(){

		return(
			<div className="table-responsive">
				
			<table className="table table-striped table-bordered">
			    <thead>
			      <tr>
			        <th>FirsValue</th>
			        <th>SecondValue</th>
			        <th>Answer</th>
			      </tr>
			    </thead>
			    <tbody>
			    {
					this.props.addition.map((data, index) => {
						return (
								<tr key={index}>
							        <td>{data.firstValue}</td>
							        <td> + {data.secondValue}</td>
							        <td> = {data.answer}</td>
							    </tr>
							)
					})
				}
			      
			      
			    </tbody>
			  </table>
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