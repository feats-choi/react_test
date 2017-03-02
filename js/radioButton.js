var REACT = REACT || {};
		REACT.RADIOBUTTOM = {
			init: function(){
				this.RadioButton = React.createClass({
					getInitialState:function(){
						return {selection:'first'};
					},
					handleChange:function(e){
						console.log(e.target.value);
						this.setState({selection:e.target.value});
					},
					render: function(){
						return (
							<div>どれか１つを選んでください:
							<div>
								<input
									type = "radio"
									name = "三択"
									value = "first"
									checked = {this.state.selection === 'first'}
									onChange = {this.handleChange}
								/>最初の選択
							</div>
							<div>
								<input
									type = "radio"
									name = "三択"
									value = "second"
									checked = {this.state.selection === 'second'}
									onChange = {this.handleChange}
								/>次の選択
							</div>
							<div>
								<input
									type = "radio"
									name = "三択"
									value = "third"
									checked = {this.state.selection === 'third'}
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
					<this.RadioButton/>,
					document.getElementById('content')
				);
			}
		};
(function() {
	REACT.RADIOBUTTOM.init();
}());
