'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SAMPLE_JS = SAMPLE_JS || {};

SAMPLE_JS.GAME = function () {
	function Main() {
		_classCallCheck(this, Main);

		this.setParameter();
	}

	_createClass(Main, [{
		key: 'setParameter',
		value: function setParameter() {
			this.chara = [];

			this.chara.push(new Monster({
				name: 'ドンキーコング',
				HP: '1000',
				attack: '30'
			}));

			this.chara.push(new Boss({
				name: '田原',
				HP: '10000',
				attack: '300'
			}));
		}
	}]);

	return Main;
}();

//モンスタークラス

var Monster = function () {
	function Monster(args) {
		_classCallCheck(this, Monster);

		this.array = [args.name, args.HP, args.attack];
		this.name = args.name;
		this.HP = args.HP;
		this.attack = args.attack;
		this.setParameter();
	}

	_createClass(Monster, [{
		key: 'setParameter',
		value: function setParameter() {
			for (var i = 0; i < this.array.length; i++) {
				console.log(this.array[i]);
			}
		}
	}, {
		key: 'bindEvent',
		value: function bindEvent() {}
	}]);

	return Monster;
}();

;

//ボスクラス

var Boss = function (_Monster) {
	_inherits(Boss, _Monster);

	function Boss(args) {
		_classCallCheck(this, Boss);

		return _possibleConstructorReturn(this, (Boss.__proto__ || Object.getPrototypeOf(Boss)).call(this, args));
	}

	return Boss;
}(Monster);

;

(function () {
	new SAMPLE_JS.GAME();
})();