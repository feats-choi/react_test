var SAMPLE_JS = SAMPLE_JS || {};

SAMPLE_JS.GAME = class Main {
	constructor(){
		this.setParameter();
	}
	setParameter(){
		this.chara = [];

		this.chara.push(new Monster({
			name:'ドンキーコング',
			HP:'1000',
			attack:'30'
		}));

		this.chara.push(new Boss({
			name:'田原',
			HP:'10000',
			attack:'300'
		}));
	}
};

//モンスタークラス
class Monster {
	constructor(args){
		this.array = [args.name,args.HP,args.attack];
		this.name = args.name;
		this.HP = args.HP;
		this.attack = args.attack;
		this.setParameter();
	}
	setParameter(){
		for (var i = 0; i < this.array.length; i++) {
			console.log(this.array[i]);
		}
	}
	bindEvent(){

	}
};

//ボスクラス
class Boss extends Monster{
	constructor(args){
		super(args);
	}
};

(function(){
	new SAMPLE_JS.GAME;
}());
