var root = ReactDOM.createRoot(document.getElementById("root"));

class Template extends React.Component {
        
    render() {
        const data = 
        {
            header: "TodoAPP",
            todolist: ["Data1", "Data2", "Data3", "Data4"],
            button: "Görev Ekle",
            textbox: "lkjrfglskedjgkılndkfgopemıowljeıoejnrkljowqelrkjıewtserfgkljdfgjsdkfg"
        };
        return (
            <div id="container">
                <div>
                    <TodoApp header={data.header}/>
                    <Todolist todolist={data.todolist} />
                    <Button text={data.button }/>
                </div>
                <div>
                    <Textbox textbox={data.textbox}/>
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
  render() {
    return (
        <ul>
            {
                this.props.todolist.map((item,index) => 
                    <Todo key={index} todo={item} />
                )
            }    
        </ul>
    );
  }
}

class Todo extends React.Component
{   
    render()
    {
        return(
                <li>{this.props.todo}</li>
        )
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
