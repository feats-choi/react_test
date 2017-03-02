var REACT = REACT || {};
		REACT.CHECKBOX = {
			init: function(){

				// this.RadioButton = React.createClass({
				// 	getInitialState:function(){
				// 		return {selection:'first'};
				// 	},
				// 	handleChange:function(e){
				// 		console.log(e.target.value);
				// 		this.setState({selection:e.target.value});
				// 	},
				// 	render: function(){
				// 		return (
				// 			<div>どれか１つを選んでください:
				// 			<div>
				// 				<input
				// 					type = "radio"
				// 					name = "三択"
				// 					value = "first"
				// 					checked = {this.state.selection === 'first'}
				// 					onChange = {this.handleChange}
				// 				/>最初の選択
				// 			</div>
				// 			<div>
				// 				<input
				// 					type = "radio"
				// 					name = "三択"
				// 					value = "second"
				// 					checked = {this.state.selection === 'second'}
				// 					onChange = {this.handleChange}
				// 				/>次の選択
				// 			</div>
				// 			<div>
				// 				<input
				// 					type = "radio"
				// 					name = "三択"
				// 					value = "third"
				// 					checked = {this.state.selection === 'third'}
				// 					onChange = {this.handleChange}
				// 				/>最後の選択
				// 			</div>
				// 		</div>);
				// 	}
				// });
				this.CheckBox = React.createClass({
					getInitialState: function() {
						return {selection:['first']};
					},
					handleChange: function(e) {
						var selection = this.state.selection
						var position = selection.indexOf(e.target.value);
						if (e.target.checked) {
							selection.push(e.target.value);
						} else {
							selection.splice(position,1);
						}
						this.setState({selection:selection});
						console.log(this.state.selection);
					},
					render: function() {
						return (
							<div>いくつでも選んでください:
							<div>
								<input
									type = "checkbox"
									value = "first"
									checked = {this.state.selection.indexOf('first') !== -1}
									onChange = {this.handleChange}
								/>最初の選択
							</div>
							<div>
								<input
									type = "checkbox"
									value = "second"
									checked = {this.state.selection.indexOf('second') !== -1}
									onChange = {this.handleChange}
								/>次の選択
							</div>
							<div>
								<input
									type = "checkbox"
									value = "third"
									checked = {this.state.selection.indexOf('third') !== -1}
									onChange = {this.handleChange}
								/>最後の選択
							</div>
						</div>);
					}
				});

			this.rendering();
			},
			rendering: function(){
				ReactDOM.render(
					<this.CheckBox/>,
					document.getElementById('content')
				);
			}
		};
(function() {
	REACT.CHECKBOX.init();
}());
