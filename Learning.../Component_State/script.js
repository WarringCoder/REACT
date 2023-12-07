var root = ReactDOM.createRoot(document.getElementById("root"));

class State extends React.Component
{
    constructor(props)
    {
        super(props);
        this.changed = this.changed.bind(this);
        
        this.state = {
            text: "React Component State Öğreniyorum",
            employee: "İshak Eren"
        }
    }

    changed()
    {
        this.setState({
          text: "REACT Component State Öğrendim",
          employee: "WarringCoder"
        });
    }

    render()
    {
        return(
            <div>
                <h3>{this.state.text}</h3>
                <p>{this.state.employee}</p>
                <button onClick={this.changed}>DEĞŞTİR</button>
            </div>
        );
    }
}

root.render(<State />);