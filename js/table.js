var REACT = REACT || {};
		REACT.TABLE = {
			init: function(){
				this.Table = React.createClass({
					render: function(){
						return (
							<table className="regularTable">
								<thead>
									<tr>
										<th>名前</th>
										<th>地域</th>
										<th>番号</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>山田太郎</td>
										<td>東京都港区</td>
										<td>88888888</td>
									</tr>
									<tr>
										<td>鈴木次郎</td>
										<td>神奈川県横浜市</td>
										<td>00000000</td>
									</tr>
								</tbody>
							</table>
						);
					}
				});
			this.rendering();
			},
			rendering: function(){
				ReactDOM.render(
					<this.Table />,
					document.getElementById('content')
				);
			}
		};
(function() {
	REACT.TABLE.init();
}());
