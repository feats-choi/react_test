var REACT = REACT || {};
		REACT.CHECKBOX = {
			init: function(){
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
