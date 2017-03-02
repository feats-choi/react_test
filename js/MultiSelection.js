var REACT = REACT || {};
		REACT.RADIOBUTTOM = {
			init: function(){
				this.MultiSelection = React.createClass({
					getInitialState:function(){
						return {selection:this.props.selection};
					},
					handleChange:function(e){
						var selection = this.state.selection;
						var position = selection.indexOf(e.target.value);

						if (position === -1) {
							selection.push(e.target.value);
						} else {
							selection.splice(position,1);
						}
						this.setState({selection:selection});
						console.log(e.target.value);
					},
					render: function(){
						return (
							<div>いくつでも選んでください：
								<select
									onChange = {this.handleChange}
									multiple = {true}
									value = {this.state.selection}
									size = "3">
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
					<this.MultiSelection selection={['first','third']}/>,
					document.getElementById('content')
				);
			}
		};
(function() {
	REACT.RADIOBUTTOM.init();
}());
