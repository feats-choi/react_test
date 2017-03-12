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
		this.renderingDom();
	},
	setComponent:function(){
		var _self = this;
		var starttime = Date.now();

		//Mixin
		this.MonitorLifeCycleMixin = {
			componentDidMount:function(){
				console.log('componentDidMount:',this.constructor.displayName);
			},
			componentWillReceiveProps:function(nextProps){
				console.log('componentWillReactiveProps:',nextProps);
			},
			showElapsed:function(constructorName){
				console.log(constructorName,Date.now() - starttime);
			}
		};

		//親コンポーネント
		this.ContactTable = React.createClass({
			mixins:[_self.MonitorLifeCycleMixin],
			render:function(){
				_self.MonitorLifeCycleMixin.showElapsed(this.constructor.displayName);
				return (
					<table>
						{this.props.children}
					</table>
				);
			}
		});

		//子コンポーネント
		this.ContactTable.Header = React.createClass({
			mixins:[_self.MonitorLifeCycleMixin],
		  render: function() {
		    var tableTitles = this.props.title.map(function(cName, i) {
		      return (
						<th key={i}>
		        {cName}
		      	</th>
					);
		    });
				_self.MonitorLifeCycleMixin.showElapsed(this.constructor.displayName);
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
		this.ContactTable.Body = React.createClass({
			mixins:[_self.MonitorLifeCycleMixin],
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
				_self.MonitorLifeCycleMixin.showElapsed(this.constructor.displayName);
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

		this.DispTable = React.createClass({
			mixins:[_self.MonitorLifeCycleMixin],
		  render: function() {
				_self.MonitorLifeCycleMixin.showElapsed(this.constructor.displayName);
		    return (
					<_self.ContactTable className="regularTable">
			      <_self.ContactTable.Header title={this.props.title}/>
			      <_self.ContactTable.Body data={this.props.data}/>
		    	</_self.ContactTable>
				);
		  }
		});
	},
	renderingDom:function(){
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
