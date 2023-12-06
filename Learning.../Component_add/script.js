var root = ReactDOM.createRoot(document.getElementById("root"));

class Template extends React.Component
{
    render(){
        return (
          <div>
            <TodoApp />
            <Todo />
            <Button />
          </div>
        );
    }
}

class TodoApp extends React.Component
{
    render()
    {
        return <h1>Todo App</h1>;
    }
}

class Todo extends React.Component
{
    render()
    {
        return( 
            <ul>
                <li>deneme</li>
                <li>deneme</li>
                <li>deneme</li>
                <li>deneme</li>
            </ul>
            );
    }
}

function Button()
{
    return <button>Görev Ekle</button>;
}

root.render(<Template />);
