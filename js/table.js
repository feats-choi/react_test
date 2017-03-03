var tableDate = [
	{id:1,name:'山田太郎',area:'東京都',number:'00000000'},
	{id:2,name:'鈴木次郎',area:'神奈川県',number:'11111111'},
	{id:3,name:'斉藤花子',area:'千葉県',number:'22222222'},
];

var REACT = REACT || {};
		REACT.TABLE = {
			init: function(){
				this.DisplayTable = React.createClass({
					render:function(){
						this.tableBody = this.props.data.map(function(person){
							return (
								<tr key ={person.id}>
									<td>{person.name}</td>
									<td>{person.area}</td>
									<td>{person.number}</td>
								</tr>
							);
						});
						return (
							<table className ="regularTable">
								<thead>
									<tr>
										<th>名前</th>
										<th>地域</th>
										<th>番号</th>
									</tr>
								</thead>
								<tbody>
									{this.tableBody}
								</tbody>
							</table>
						);
					}
				});
				this.rendering();
			},
			rendering: function(){
				ReactDOM.render(
					<this.DisplayTable data={tableDate}/>,
					document.getElementById('content')
				);
			}
		};
(function() {
	REACT.TABLE.init();
}());
