"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var root = ReactDOM.createRoot(document.getElementById("Todo_List_Container"));
var TodoListAPP = /*#__PURE__*/function (_React$Component) {
  _inherits(TodoListAPP, _React$Component);
  var _super = _createSuper(TodoListAPP);
  function TodoListAPP(props) {
    var _this;
    _classCallCheck(this, TodoListAPP);
    _this = _super.call(this, props);
    _this.addTask = _this.addTask.bind(_assertThisInitialized(_this));
    _this.clearFullTask = _this.clearFullTask.bind(_assertThisInitialized(_this));
    _this.deleteTask = _this.deleteTask.bind(_assertThisInitialized(_this));
    _this.state = {
      görevler: ["Görev1", "Görev2", "Görev3"]
    };
    return _this;
  }
  _createClass(TodoListAPP, [{
    key: "addTask",
    value: function addTask(task) {
      if (this.state.görevler.indexOf(task) > -1) {
        return "Aynı Elemanı Ekleyemezsiniz!";
      }
      this.setState(function (prevState) {
        return {
          görevler: prevState.görevler.concat(task)
        };
      });
    }
  }, {
    key: "clearFullTask",
    value: function clearFullTask() {
      this.setState({
        görevler: []
      });
    }
  }, {
    key: "deleteTask",
    value: function deleteTask(task) {
      this.setState(function (prevState) {
        var arr = prevState.görevler.filter(function (i) {
          return task != i;
        });
        return {
          görevler: arr
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "Container"
      }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(TaskList, {
        task: this.state.görevler,
        clear: this.clearFullTask,
        deleteTask: this.deleteTask
      }), /*#__PURE__*/React.createElement(NewTask, {
        addTask: this.addTask
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var json_obj = localStorage.getItem("items");
      var items = JSON.parse(json_obj);
      if (items) {
        this.setState({
          görevler: items
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.görevler.length !== this.state.görevler.length) {
        var json_str = JSON.stringify(this.state.görevler);
        localStorage.setItem("items", json_str);
      }
    }
  }]);
  return TodoListAPP;
}(React.Component);
var Header = /*#__PURE__*/function (_React$Component2) {
  _inherits(Header, _React$Component2);
  var _super2 = _createSuper(Header);
  function Header() {
    _classCallCheck(this, Header);
    return _super2.apply(this, arguments);
  }
  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "header"
      }, /*#__PURE__*/React.createElement("p", null, "DEVELOPER ACT\u0130ONS"));
    }
  }]);
  return Header;
}(React.Component);
var TaskList = /*#__PURE__*/function (_React$Component3) {
  _inherits(TaskList, _React$Component3);
  var _super3 = _createSuper(TaskList);
  function TaskList() {
    _classCallCheck(this, TaskList);
    return _super3.apply(this, arguments);
  }
  _createClass(TaskList, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/React.createElement("div", {
        className: "taskContainer"
      }, /*#__PURE__*/React.createElement("ul", null, this.props.task.map(function (task, index) {
        return /*#__PURE__*/React.createElement(Task, {
          key: index,
          task: task,
          deleteTask: _this2.props.deleteTask
        });
      })), this.props.task.length > 0 ? /*#__PURE__*/React.createElement("button", {
        className: "ClearButton",
        onClick: this.props.clear
      }, "Temizle") : /*#__PURE__*/React.createElement("div", {
        className: "alert alert-warning w-75"
      }, "Bir G\xF6rev Ekleyiniz!"));
    }
  }]);
  return TaskList;
}(React.Component);
var Task = /*#__PURE__*/function (_React$Component4) {
  _inherits(Task, _React$Component4);
  var _super4 = _createSuper(Task);
  function Task() {
    _classCallCheck(this, Task);
    return _super4.apply(this, arguments);
  }
  _createClass(Task, [{
    key: "render",
    value: function render() {
      var _this3 = this;
      return /*#__PURE__*/React.createElement("div", {
        className: "task"
      }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("input", {
        className: "checkbox",
        type: "checkbox"
      }), /*#__PURE__*/React.createElement("p", null, this.props.task)), /*#__PURE__*/React.createElement("div", {
        className: "border-bottom"
      }), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          _this3.props.deleteTask(_this3.props.task);
        }
      }, "X"));
    }
  }]);
  return Task;
}(React.Component);
var NewTask = /*#__PURE__*/function (_React$Component5) {
  _inherits(NewTask, _React$Component5);
  var _super5 = _createSuper(NewTask);
  function NewTask(props) {
    var _this4;
    _classCallCheck(this, NewTask);
    _this4 = _super5.call(this, props);
    _this4.onFormSubmit = _this4.onFormSubmit.bind(_assertThisInitialized(_this4));
    _this4.state = {
      error: ""
    };
    return _this4;
  }
  _createClass(NewTask, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();
      var task = e.target.elements.save.value.trim();
      if (task) {
        e.target.elements.save.value = "";
        var control = this.props.addTask(task);
        this.setState({
          error: control
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "AddTask"
      }, this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.onFormSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "save",
        id: ""
      }), /*#__PURE__*/React.createElement("button", {
        type: "submit"
      }, "Aksiyon Ekle")), /*#__PURE__*/React.createElement("img", {
        "class": "rudder",
        src: "./img/1.png",
        alt: ""
      }));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log("NewTask component completed!");
    }
  }]);
  return NewTask;
}(React.Component);
root.render( /*#__PURE__*/React.createElement(TodoListAPP, null));
