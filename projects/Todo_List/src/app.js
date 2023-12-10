var root = ReactDOM.createRoot(document.getElementById("Todo_List_Container"));

class TodoListAPP extends React.Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.clearFullTask = this.clearFullTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.state = {
      görevler: ["Görev1", "Görev2", "Görev3"],
    };
  }

  addTask(task) {
    if (this.state.görevler.indexOf(task) > -1) {
      return "Aynı Elemanı Ekleyemezsiniz!";
    }

    this.setState((prevState) => {
      return { görevler: prevState.görevler.concat(task) };
    });
  }

  clearFullTask() {
    this.setState({
      görevler: [],
    });
  }

  deleteTask(task) {
    this.setState((prevState) => {
      const arr = prevState.görevler.filter((i) => {
        return task != i;
      });
      return {
        görevler: arr,
      };
    });
  }

  render() {
    return (
      <div>
        <Header />
        <TaskList
          task={this.state.görevler}
          clear={this.clearFullTask}
          deleteTask={this.deleteTask}
        />
        <NewTask addTask={this.addTask} />
      </div>
    );
  }
  componentDidMount() {
    const json_obj = localStorage.getItem("items");
    const items = JSON.parse(json_obj);
    if (items) {
      this.setState({
        görevler: items,
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.görevler.length !== this.state.görevler.length) 
    {
      const json_str = JSON.stringify(this.state.görevler);
      localStorage.setItem("items", json_str);
    }
  }
}


class Header extends React.Component
{
    render()
    {
        return (
            <div className="header">
                <p>DEVELOPER ACTİONS</p>
            </div>
        );        
    }
}

class TaskList extends React.Component
{
    render()
    {
        return (
           
            <div className="taskContainer">
                <ul>
                    
                    {this.props.task.map((task, index) => 
                        <Task key={index} task={task} deleteTask={this.props.deleteTask}/>
                    )}
                </ul>
                {this.props.task.length > 0 ? (
                    <button
                        className="ClearButton"
                        onClick={this.props.clear}
                    >
                        Temizle
                    </button>
                ) 
                : 
                (
                    <div className="alert alert-warning w-75">Bir Görev Ekleyiniz!</div>
                )
                }
            </div>
        );
    }
}

class Task extends React.Component
{
    render()
    {
        return (
          <div className="task">
            <li>
              <input type="checkbox" />
              <p>{this.props.task}</p>
            </li>
            <div className="border-bottom"></div>
            <button
              onClick={() => {
                this.props.deleteTask(this.props.task);
              }}
            >
              X
            </button>
          </div>
        );
    }

}


class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      error: "",
    };
  }

  onFormSubmit(e) {
    e.preventDefault();

    const task = e.target.elements.save.value.trim();
    if (task) {
      e.target.elements.save.value = "";
      const control = this.props.addTask(task);
      this.setState({
        error: control,
      });
    }
  }

  render() {
    return (
      <div className="AddTask">
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="save" id="" />
          <button type="submit">Aksiyon Ekle</button>
        </form>
        <img class="rudder" src="./img/1.png" alt=""></img>
      </div>
    );
  }

  componentDidUpdate()
  {
    console.log("NewTask component completed!")
  }
}


root.render(<TodoListAPP />);