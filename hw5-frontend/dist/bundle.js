/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	(function webpackMissingModule() { throw new Error("Cannot find module \"./dist/;\""); }());
	(function webpackMissingModule() { throw new Error("Cannot find module \"python\""); }());


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Landing = __webpack_require__(2);

	var _Landing2 = _interopRequireDefault(_Landing);

	var _Main = __webpack_require__(3);

	var _Main2 = _interopRequireDefault(_Main);

	var _Profile = __webpack_require__(4);

	var _Profile2 = _interopRequireDefault(_Profile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var location = "Landing.js";

	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      if (location == "Landing.js") {
	        return React.createElement(
	          'div',
	          null,
	          React.createElement(_Landing2.default, null)
	        );
	      } else if (location == "Main.js") {
	        return React.createElement(
	          'div',
	          null,
	          React.createElement(_Main2.default, null)
	        );
	      } else {
	        return React.createElement(
	          'div',
	          null,
	          React.createElement(_Profile2.default, null)
	        );
	      }
	    }
	  }]);

	  return App;
	}(React.Component);

	ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Landing = function (_React$Component) {
	  _inherits(Landing, _React$Component);

	  function Landing() {
	    _classCallCheck(this, Landing);

	    return _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).apply(this, arguments));
	  }

	  _createClass(Landing, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement("meta", { name: "author", content: "Simi Fagbemi" }),
	        "Create a new account",
	        React.createElement("br", null),
	        React.createElement("br", null),
	        React.createElement(
	          "form",
	          { id: "signIn", name: "submitForm", method: "GET", action: "main.html" },
	          React.createElement(
	            "table",
	            { className: "form" },
	            React.createElement(
	              "tbody",
	              null,
	              React.createElement(
	                "tr",
	                null,
	                React.createElement(
	                  "td",
	                  null,
	                  "Account Name"
	                ),
	                React.createElement(
	                  "td",
	                  null,
	                  React.createElement("input", { name: "AccountName", required: true })
	                )
	              ),
	              React.createElement(
	                "tr",
	                null,
	                React.createElement(
	                  "td",
	                  null,
	                  "Display Name (Optional)"
	                ),
	                React.createElement(
	                  "td",
	                  null,
	                  React.createElement("input", { name: "DisplayName" })
	                )
	              ),
	              React.createElement(
	                "tr",
	                null,
	                React.createElement(
	                  "td",
	                  null,
	                  "E-mail Address"
	                ),
	                React.createElement(
	                  "td",
	                  null,
	                  React.createElement("input", { name: "Email", type: "email", required: true })
	                )
	              ),
	              React.createElement(
	                "tr",
	                null,
	                React.createElement(
	                  "td",
	                  null,
	                  "Phone Number (format: 5555555555) "
	                ),
	                React.createElement(
	                  "td",
	                  null,
	                  React.createElement("input", { name: "PhoneNumber", required: true, type: "tel", pattern: "\\d{10}" })
	                )
	              ),
	              React.createElement(
	                "tr",
	                null,
	                React.createElement(
	                  "td",
	                  null,
	                  "Date of Birth (MM/DD/YYYY) "
	                ),
	                React.createElement(
	                  "td",
	                  null,
	                  React.createElement("input", { name: "DOB", required: true })
	                )
	              ),
	              React.createElement(
	                "tr",
	                null,
	                React.createElement(
	                  "td",
	                  null,
	                  "Zipcode (format: 55555) "
	                ),
	                React.createElement(
	                  "td",
	                  null,
	                  React.createElement("input", { name: "Zipcode", type: "number", pattern: "\\d{5}", required: true })
	                )
	              ),
	              React.createElement(
	                "tr",
	                null,
	                React.createElement(
	                  "td",
	                  null,
	                  "Password"
	                ),
	                React.createElement(
	                  "td",
	                  null,
	                  React.createElement("input", { name: "Password", required: true, type: "password" })
	                )
	              ),
	              React.createElement(
	                "tr",
	                null,
	                React.createElement(
	                  "td",
	                  null,
	                  "Password Confirmation"
	                ),
	                React.createElement(
	                  "td",
	                  null,
	                  React.createElement("input", { name: "PasswordConfirmation", type: "password", required: true })
	                )
	              ),
	              React.createElement(
	                "tr",
	                null,
	                React.createElement(
	                  "td",
	                  { colSpan: 2 },
	                  React.createElement("input", { type: "submit", defaultValue: "Submit form" }),
	                  React.createElement("br", null),
	                  React.createElement("input", { type: "reset", defaultValue: "Clear" })
	                )
	              )
	            )
	          ),
	          React.createElement("input", { type: "hidden", name: "timeStamp" })
	        ),
	        React.createElement("br", null),
	        React.createElement("br", null),
	        "Already a user? Login",
	        React.createElement("br", null),
	        React.createElement("br", null),
	        React.createElement(
	          "table",
	          null,
	          React.createElement(
	            "tbody",
	            null,
	            React.createElement(
	              "tr",
	              null,
	              React.createElement(
	                "td",
	                null,
	                "Account Name"
	              ),
	              React.createElement(
	                "td",
	                null,
	                "  ",
	                React.createElement("input", { name: "AccountName", required: true }),
	                React.createElement("span", { id: "AccountNameText" })
	              )
	            ),
	            React.createElement(
	              "tr",
	              null,
	              React.createElement(
	                "td",
	                null,
	                "Password"
	              ),
	              React.createElement(
	                "td",
	                null,
	                React.createElement("input", { name: "Password", required: true, type: "password" }),
	                React.createElement("span", { id: "PasswordText" })
	              )
	            ),
	            React.createElement(
	              "tr",
	              null,
	              React.createElement(
	                "td",
	                { colSpan: 2 },
	                React.createElement("input", { type: "button", defaultValue: "Login", id: "update", onclick: "login()" }),
	                React.createElement("br", null)
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Landing;
	}(React.Component);

	exports.default = Landing;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Main = function (_React$Component) {
	  _inherits(Main, _React$Component);

	  function Main() {
	    _classCallCheck(this, Main);

	    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
	  }

	  _createClass(Main, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement("link", { rel: "stylesheet", type: "text/css", href: "styles.css" }),
	        React.createElement("meta", { name: "author", content: "Simi Fagbemi" }),
	        React.createElement(
	          "div",
	          { className: "container", style: { position: 'relative', padding: '0 0 0 55px', backgroundColor: 'pink' } },
	          React.createElement("input", { name: "post", required: true }),
	          React.createElement("input", { type: "button", defaultValue: "Post!", onclick: true, id: "postButton" }),
	          React.createElement("input", { type: "button", defaultValue: "Cancel Post", onclick: "clearPost()", id: "cancelPostButton" }),
	          React.createElement("input", { type: "file", defaultValue: "Upload Image", onclick: true, id: "uploadImageButton" }),
	          React.createElement("br", null),
	          React.createElement("br", null),
	          React.createElement(
	            "div",
	            { style: { position: 'absolute', top: 0, bottom: 0, right: 0, width: 50 }, id: "sidebar" },
	            React.createElement("img", { src: "http://worldartsme.com/images/red-stick-figure-clipart-1.jpg", id: "redStickFigureProfilePic", height: 75, width: 50 }),
	            React.createElement("br", null),
	            React.createElement("br", null),
	            React.createElement(
	              "font",
	              { style: { textAlign: 'right' }, id: "redStickFigureName" },
	              "TheGuy"
	            ),
	            React.createElement("br", null),
	            React.createElement("br", null),
	            React.createElement(
	              "font",
	              { style: { textAlign: 'right' }, id: "pinkStickFigureHeadline" },
	              "Hey its me"
	            ),
	            React.createElement("br", null),
	            React.createElement("br", null),
	            React.createElement("input", { type: "button", defaultValue: "Follow", onclick: true, id: "followRedStickFigureButton" }),
	            React.createElement("input", { type: "button", defaultValue: "Unfollow", onclick: true, id: "unfollowRedStickFigureButton" }),
	            React.createElement("br", null),
	            React.createElement("br", null),
	            React.createElement("img", { src: "http://www.clker.com/cliparts/h/D/n/I/R/j/pink-female-stick-figure.svg", id: "pinkStickFigureProfilePic", height: 75, width: 50 }),
	            React.createElement("br", null),
	            React.createElement("br", null),
	            React.createElement(
	              "font",
	              { style: { textAlign: 'right' }, id: "pinkStickFigureName" },
	              "TheGuy2"
	            ),
	            React.createElement("br", null),
	            React.createElement("br", null),
	            React.createElement(
	              "font",
	              { style: { textAlign: 'right' }, id: "pinkStickFigureHeadline" },
	              "Hi, hello there"
	            ),
	            React.createElement("br", null),
	            React.createElement("br", null),
	            React.createElement("input", { type: "button", defaultValue: "Follow", onclick: true, id: "followPinkStickFigureButton" }),
	            React.createElement("input", { type: "button", defaultValue: "Unfollow", onclick: true, id: "unfollowPinkStickFigureButton" }),
	            React.createElement("br", null),
	            React.createElement("br", null),
	            React.createElement("img", { src: "http://www.clipartbest.com/cliparts/4cb/o7z/4cbo7zMdi.svg", id: "blueStickProfilePic", height: 75, width: 50 }),
	            React.createElement("br", null),
	            React.createElement("br", null),
	            React.createElement(
	              "font",
	              { style: { textAlign: 'right' }, id: "blueStickFigureName" },
	              "TheGuy3"
	            ),
	            React.createElement("br", null),
	            React.createElement("br", null),
	            React.createElement(
	              "font",
	              { style: { textAlign: 'right' }, id: "pinkStickFigureHeadline" },
	              "\"Whoa\""
	            ),
	            React.createElement("br", null),
	            React.createElement("br", null),
	            React.createElement("input", { type: "button", defaultValue: "Follow", onclick: true, id: "followBlueStickFigureButton" }),
	            React.createElement("input", { type: "button", defaultValue: "Unfollow", onclick: true, id: "unfollowBlueStickFigureButton" })
	          ),
	          React.createElement(
	            "div",
	            { style: { textAlign: 'center' } },
	            React.createElement("img", { src: "http://cliparts.co/cliparts/Mdi/9MK/Mdi9MKxc7.png", id: "profilePic", height: 150, width: 100 }),
	            React.createElement("br", null),
	            React.createElement("br", null),
	            React.createElement(
	              "span",
	              null,
	              " TheKid"
	            ),
	            React.createElement("br", null),
	            React.createElement("br", null),
	            React.createElement(
	              "font",
	              { id: "headlineFont" },
	              "\"Attachment is the root of all suffering\" "
	            ),
	            React.createElement("br", null),
	            React.createElement("br", null),
	            React.createElement("input", { id: "headline", name: "headline", required: true }),
	            React.createElement("input", { type: "button", defaultValue: "Update Headline", onclick: "updateHeadline()", id: "updateHeadlineButton" })
	          ),
	          React.createElement("input", { name: "search", required: true }),
	          React.createElement("input", { type: "button", defaultValue: "Search", onclick: true, id: "searchButton" }),
	          React.createElement("br", null),
	          React.createElement("br", null),
	          React.createElement(
	            "a",
	            { href: "profile.html" },
	            "Profile"
	          ),
	          React.createElement("br", null),
	          React.createElement("br", null),
	          React.createElement(
	            "a",
	            { href: "index.html" },
	            "Logout"
	          ),
	          React.createElement("br", null),
	          React.createElement("br", null),
	          React.createElement("br", null),
	          React.createElement("br", null),
	          React.createElement(
	            "table",
	            { border: 1, style: { width: '100%' } },
	            React.createElement(
	              "tbody",
	              null,
	              React.createElement("tr", null),
	              React.createElement(
	                "tr",
	                null,
	                React.createElement(
	                  "td",
	                  null,
	                  React.createElement("input", { type: "button", defaultValue: "Comment", onclick: true, id: "pizzaButtonComment" }),
	                  React.createElement("input", { type: "button", defaultValue: "Edit", onclick: true, id: "pizzaButtonEdit" }),
	                  React.createElement(
	                    "div",
	                    null,
	                    React.createElement("img", { src: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201609170856", id: "apple", height: 900, width: 600 }),
	                    React.createElement("br", null),
	                    React.createElement(
	                      "font",
	                      { size: 10 },
	                      " Lorem ipsum dolor sit amet. "
	                    )
	                  )
	                ),
	                React.createElement(
	                  "td",
	                  null,
	                  React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                      "font",
	                      { size: 10 },
	                      " Lorem ipsum dolor sit amet. "
	                    )
	                  )
	                )
	              ),
	              React.createElement(
	                "tr",
	                null,
	                React.createElement(
	                  "td",
	                  null,
	                  React.createElement("input", { type: "button", defaultValue: "Comment", onclick: true, id: "bballButtonComment" }),
	                  React.createElement("input", { type: "button", defaultValue: "Edit", onclick: true, id: "bballButtonEdit" }),
	                  React.createElement(
	                    "div",
	                    null,
	                    React.createElement("img", { src: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png", id: "bball", height: 900, width: 600 })
	                  )
	                ),
	                React.createElement(
	                  "td",
	                  null,
	                  React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                      "font",
	                      { size: 10 },
	                      " Lorem ipsum dolor sit amet. "
	                    )
	                  )
	                )
	              ),
	              React.createElement(
	                "tr",
	                null,
	                React.createElement(
	                  "td",
	                  null,
	                  React.createElement("input", { type: "button", defaultValue: "Comment", onclick: true, id: "moneyButtonComment" }),
	                  React.createElement("input", { type: "button", defaultValue: "Edit", onclick: true, id: "moneyButtonEdit" }),
	                  React.createElement(
	                    "div",
	                    null,
	                    React.createElement("img", { src: "http://i.forbesimg.com/media/2009/12/16/1216_cash-dollars_650x455.jpg", id: "money", height: 900, width: 600 }),
	                    React.createElement("br", null),
	                    React.createElement(
	                      "font",
	                      { size: 10 },
	                      " Lorem ipsum dolor sit amet. "
	                    )
	                  )
	                ),
	                React.createElement(
	                  "td",
	                  null,
	                  React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                      "font",
	                      { size: 10 },
	                      " Lorem ipsum dolor sit amet. "
	                    )
	                  )
	                )
	              ),
	              React.createElement(
	                "tr",
	                null,
	                React.createElement(
	                  "td",
	                  null,
	                  React.createElement("input", { type: "button", defaultValue: "Comment", onclick: true, id: "pizzaButtonComment" }),
	                  React.createElement("input", { type: "button", defaultValue: "Edit", onclick: true, id: "pizzaButtonEdit" }),
	                  React.createElement(
	                    "div",
	                    null,
	                    React.createElement("img", { src: "http://www.titospizzaspringhill.com/wp-content/uploads/2015/09/pixxa2.png", id: "pizza", height: 900, width: 600 })
	                  )
	                ),
	                React.createElement(
	                  "td",
	                  null,
	                  React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                      "font",
	                      { size: 10 },
	                      " Lorem ipsum dolor sit amet. "
	                    )
	                  )
	                )
	              ),
	              React.createElement(
	                "tr",
	                null,
	                React.createElement(
	                  "td",
	                  null,
	                  React.createElement(
	                    "div",
	                    null,
	                    " "
	                  )
	                ),
	                React.createElement(
	                  "td",
	                  null,
	                  React.createElement(
	                    "div",
	                    null,
	                    " "
	                  )
	                ),
	                React.createElement(
	                  "td",
	                  null,
	                  React.createElement(
	                    "div",
	                    null,
	                    " "
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Main;
	}(React.Component);

	exports.default = Main;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Profile = function (_React$Component) {
	  _inherits(Profile, _React$Component);

	  function Profile() {
	    _classCallCheck(this, Profile);

	    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
	  }

	  _createClass(Profile, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement("link", { rel: "stylesheet", type: "text/css", href: "styles.css" }),
	        React.createElement("meta", { name: "author", content: "Simi Fagbemi" }),
	        React.createElement(
	          "a",
	          { href: "main.html" },
	          "Return to main page"
	        ),
	        React.createElement(
	          "table",
	          null,
	          React.createElement(
	            "tbody",
	            null,
	            React.createElement(
	              "tr",
	              null,
	              React.createElement(
	                "td",
	                null,
	                "Current profile picture "
	              ),
	              React.createElement(
	                "td",
	                null,
	                React.createElement("img", { src: "http://cliparts.co/cliparts/Mdi/9MK/Mdi9MKxc7.png", id: "currentProfilePic", height: 125, width: 100 }),
	                "Upload a new profile pic:",
	                React.createElement("input", { type: "file", defaultValue: "Upload new profile pic" })
	              )
	            ),
	            React.createElement(
	              "tr",
	              null,
	              React.createElement(
	                "td",
	                null,
	                "Display Name"
	              ),
	              React.createElement(
	                "td",
	                null,
	                "  ",
	                React.createElement("input", { name: "DisplayName", required: true }),
	                React.createElement(
	                  "span",
	                  { id: "DisplayNameText" },
	                  " JJ "
	                )
	              )
	            ),
	            React.createElement(
	              "tr",
	              null,
	              React.createElement(
	                "td",
	                null,
	                "E-mail Address"
	              ),
	              React.createElement(
	                "td",
	                null,
	                React.createElement("input", { name: "Email", type: "email" }),
	                React.createElement(
	                  "span",
	                  { id: "EmailText" },
	                  " abc123@gmail.com "
	                )
	              )
	            ),
	            React.createElement(
	              "tr",
	              null,
	              React.createElement(
	                "td",
	                null,
	                "Phone Number (format: 5555555555) "
	              ),
	              React.createElement(
	                "td",
	                null,
	                React.createElement("input", { name: "PhoneNumber", required: true, type: "tel", pattern: "\\d{10}" }),
	                React.createElement(
	                  "span",
	                  { id: "PhoneNumberText" },
	                  " 5555555555 "
	                )
	              )
	            ),
	            React.createElement(
	              "tr",
	              null,
	              React.createElement(
	                "td",
	                null,
	                "Date of Birth "
	              ),
	              React.createElement(
	                "td",
	                null,
	                React.createElement(
	                  "span",
	                  { id: "DOBText" },
	                  " 01/01/1995 "
	                )
	              )
	            ),
	            React.createElement(
	              "tr",
	              null,
	              React.createElement(
	                "td",
	                null,
	                "Zipcode (format: 55555) "
	              ),
	              React.createElement(
	                "td",
	                null,
	                React.createElement("input", { name: "Zipcode", type: "number", required: true }),
	                React.createElement(
	                  "span",
	                  { id: "ZipcodeText" },
	                  " 55555 "
	                )
	              )
	            ),
	            React.createElement(
	              "tr",
	              null,
	              React.createElement(
	                "td",
	                null,
	                "Password "
	              ),
	              React.createElement(
	                "td",
	                null,
	                React.createElement("input", { name: "Password", required: true, type: "password" }),
	                React.createElement(
	                  "span",
	                  { id: "PasswordText" },
	                  " "
	                )
	              )
	            ),
	            React.createElement(
	              "tr",
	              null,
	              React.createElement(
	                "td",
	                { colSpan: 2 },
	                React.createElement("input", { type: "button", defaultValue: "Update", id: "update", onclick: "updateVals()" }),
	                React.createElement("br", null)
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Profile;
	}(React.Component);

	exports.default = Profile;

/***/ }
/******/ ]);