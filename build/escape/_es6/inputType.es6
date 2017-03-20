// var TextInput = React.createClass ({
// 	getInitialState: function(){
// 		return {dispText:'入力欄'};
// 	},
// 	handleInput: function(e){
// 		this.setState({dispText: e.target.value});
// 		console.log(this.state.dispText);
// 	},
// 	render: function() {
// 		return (<div>JSX Input:<input type="text" value = {this.state.dispText} onChange={this.handleInput}/></div>);
// 	}
// });
//
// ReactDOM.render(
// 	<TextInput />,
// 	document.getElementById('content')
// );

var REACT = REACT || {};

		REACT.PRCTICE = {
			init:function(){
      //クラスの準備
				this.TextInput = React.createClass ({
        //イニシャライズメソッド
					getInitialState: function(){
						return {dispText:'入力欄'};
					},
        //クラスが持つ挙動
					handleInput: function(e){
						this.setState({dispText: e.target.value});
						console.log(this.state.dispText);
					},
          //ステータス設定
					render: function() {
						return (<div>JSX Input:<input
            type="text"
            value = {this.state.dispText}
            onChange={this.handleInput}/></div>);
					}
				});
      //イベントメソッド呼び出し
				this.rendering();
			},
			rendering:function(){
      //レンダリング
				ReactDOM.render(
					<this.TextInput />,
					document.getElementById('content')
				);
			}
		};
(function () {
  REACT.PRCTICE.init();
}());
