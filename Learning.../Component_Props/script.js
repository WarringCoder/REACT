var root = ReactDOM.createRoot(document.getElementById("root"));
class Template extends React.Component {
  render() {
    return (
        <div id="container">
            <div >
                <TodoApp />
                <Todo text="Props Deneme" text2="Props Deneme 2"/>
                <Button text="Görev Ekle" />
            </div>
            <div>
                <Textbox textbox="Lorem kılfdjogıler uewrhıukewqh wjkehfku kwehujuewk akldjsflskdsadkşjfklsdjflkdjsfskldjfı ljksdıunıa Lorem5"/>
            </div>
        </div>
    );
  }
}

class TodoApp extends React.Component {
  render() {
    return <h1>Todo App</h1>;
  }
}

class Todo extends React.Component {
  render() {
    return (
      <ul>
        <li>{this.props.text}</li>
        <li>deneme</li>
        <li>{this.props.text2}</li>
        <li>deneme</li>
      </ul>
    );
  }
}

function Button(props) 
{
  return <button>{props.text}</button>;
}

class Textbox extends React.Component
{
    render()
    {
        return(
                <div id="textbox">
                    <p>{this.props.textbox}</p>
                </div>
            );
    }
}

root.render(<Template />);
