var REACT = REACT || {};
		REACT.FROM = {
			init: function(){
				this.From = React.createClass({
					getInitialState:function(){
						return {selection: this.props.selection};
					},
					handleChange:function(e){
						var selection = this.state.selection;
						var position = selection.indexOf(e.target.value);

						if (e.target.checked) {
							selection.push(e.target.value);
						} else {
							selection.splice(position,1);
						}
						this.setState({selection:selection});
					},
					handleSubmit:function(e){
						e.preventDefault();
						if (this.state.selection.length < 2) {
							return;
						}
						this.setState({selection:[]});
					},
					render: function(){
						return (
							<form onSubmit ={this.handleSubmit}>
								2つ以上選んでください。
								<div>
									<input
										type="checkbox"
										value="first"
										checked={this.state.selection.indexOf('first') !== -1}
										onChange={this.handleChange}
									/>最初の選択肢
								</div>
								<div>
									<input
										type="checkbox"
										value="second"
										checked={this.state.selection.indexOf('second') !== -1}
										onChange={this.handleChange}
									/>次の選択肢
								</div>
								<div>
									<input
										type="checkbox"
										value="third"
										checked={this.state.selection.indexOf('third') !== -1}
										onChange={this.handleChange}
									/>最後の選択肢
								</div>
								<input type="submit" value="決定"/>
							</form>
						);
					}
				});
			this.rendering();
			},
			rendering: function(){
				ReactDOM.render(
					<this.From selection={[]}/>,
					document.getElementById('content')
				);
			}
		};
(function() {
	REACT.FROM.init();
}());
