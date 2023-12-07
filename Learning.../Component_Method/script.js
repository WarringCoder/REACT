var root = ReactDOM.createRoot(document.getElementById("root"));

class Template extends React.Component {
  render() {
    const data = {
      header: "TodoAPP",
      todolist: ["Data1", "Data2", "Data3", "Data4", "Data5"],
      button: "Görev Ekle",
      textbox:
        "lkjrfglskedjgkılndkfgopemıowljeıoejnrkljowqelrkjıewtserfgkljdfgjsdkfg",
    };
    return (
      <div id="container">
        <div>
          <TodoApp header={data.header} />
          <Todolist todolist={data.todolist} />
          <Button text={data.button} />
          <NewItem />
        </div>
        <div>
          <Textbox textbox={data.textbox} />
        </div>
      </div>
    );
  }
}

class TodoApp extends React.Component {
  render() {
    return <h1>{this.props.header}</h1>;
  }
}

class Todolist extends React.Component {
    constructor(props)
    {
        super(props);
        this.clearItems = this.clearItems.bind(this);
    }

    clearItems()
    {
        console.log("clear items");
        console.log(this.props.todolist)
    }
  render() {
    return (
      <div>
        <ul>
          {this.props.todolist.map((item, index) => (
            <Todo key={index} todo={item} />
          ))}
        </ul>
        <button onClick={this.clearItems}>Temizle</button>
      </div>
    );
  }
}

class NewItem extends React.Component {
  onFormSubmit(e) {
    e.preventDefault();

    const item = e.target.elements.txtItem.value.trim();
    if (item) {
      e.target.elements.txtItem.value = "";
      console.log(item);
    }
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" name="txtItem" />
        <button type="submit">Ekle</button>
      </form>
    );
  }
}


class Todo extends React.Component {
  render() {
    return <li>{this.props.todo}</li>;
  }
}

function Button(props) {
  return <button>{props.text}</button>;
}

class Textbox extends React.Component {
  render() {
    return (
      <div id="textbox">
        <p>{this.props.textbox}</p>
      </div>
    );
  }
}

root.render(<Template />);
