var tableColumns = ['名前','地域','番号'];

var tableData = [
	{id:1,name:'山田太郎',area:'東京都',number:'00000000'},
	{id:2,name:'鈴木次郎',area:'神奈川県',number:'11111111'},
	{id:3,name:'斉藤花子',area:'千葉県',number:'22222222'},
];

var REACT = REACT || {};
REACT.TABLE_RENDER = {
	init:function(){
		this.setComponent();
		this.combineComponent();
		this.rendering();
	},
	setComponent:function(){
		var _self = this;
		//子コンポーネント
		this.TableHeader = React.createClass({
		  render: function() {
		    var tableTitles = this.props.title.map(function(cName, i) {
		      return (
						<th key={i}>
		        {cName}
		      	</th>
					);
		    });

			    return (
						<thead>
			      <tr>
			        {tableTitles}
			      </tr>
			    </thead>
				);
		  }
		});
		//子コンポーネント
		this.TableBody = React.createClass({
		  render: function() {
		    var tableRows = this.props.data.map(function(person) {
		      return (
						<tr key={person.id}>
			        <td>{person.name}</td>
			        <td>{person.area}</td>
			        <td>{person.number}</td>
		      	</tr>
					);
		    });
				
			    return (
						<tbody>
			      	{tableRows}
			    	</tbody>
				);
		  }
		});

	},
	combineComponent:function(){
		var _self = this;
		//親コンポーネント
		this.DispTable = React.createClass({
		  render: function() {
		    return (
					<table className="regularTable">
			      <_self.TableHeader title={this.props.title}/>
			      <_self.TableBody data={this.props.data}/>
		    	</table>
				);
		  }
		});
	},
	rendering:function(){
		var _self = this;
		ReactDOM.render(
		  <this.DispTable title={tableColumns} data={tableData}/>,
		  document.getElementById('content')
		);
	},
};

(function() {
	REACT.TABLE_RENDER.init();
}());
