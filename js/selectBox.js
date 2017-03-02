var REACT = REACT || {};
		REACT.RADIOBUTTOM = {
			init: function(){
				this.SingleSelection = React.createClass({
					getInitialState:function(){
						return {selection:this.props.selection};
					},
					handleChange:function(e){
						console.log(e.target.value);
						this.setState({selection:e.target.value});
					},
					render: function(){
						return (
							<div>どれか１つを選んでください:
								<select
									onChange = {this.handleChange}
									multiple = {false}
									value = {this.state.selection}>
									<option value = "first">最初の選択</option>
									<option value = "second">次の選択</option>
									<option value = "third">最後の選択</option>
								</select>
							</div>);
					}
				});
			this.rendering();
			},
			rendering: function(){
				ReactDOM.render(
					<this.SingleSelection selection={'first'}/>,
					document.getElementById('content')
				);
			}
		};
(function() {
	REACT.RADIOBUTTOM.init();
}());
