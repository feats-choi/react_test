var REACT = REACT || {};
		REACT.TEXTAREA = {
			init: function(){
				this.TextArea = React.createClass({
					getInitialState:function(){
						return {dispText: this.props.dispText};
					},
					handleInput:function(e){
						this.setState({dispText:e.target.value});
						console.log(e.target.value);
					},
					render: function(){
						return (
							<div>何か入力してください:
								<textarea
									value = {this.state.dispText}
									onChange = {this.handleInput}
									rows = "3"
								/>
							</div>);
					}
				});
			this.rendering();
			},
			rendering: function(){
				ReactDOM.render(
					<this.TextArea dispText/>,
					document.getElementById('content')
				);
			}
		};
(function() {
	REACT.TEXTAREA.init();
}());
