import React, {Components, Component} from 'react';

class TaskForms extends Component{
    constructor(){
        super();
        this.state={
            title: "",
            Priority: "low",
            Description:"",
            Date:""
        };
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTask(this.state);
        this.setState({
            title: "",
            Priority: "low",
            Description:"",
            Date:""
        });
    }

    handleInputChange(e) {
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
          [name]: value
        });
      }

    render(){
        return(
            <div className="card">
                <form onSubmit={this.handleSubmit} className="card-body">
                    <div className="form-group">
                        <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={this.state.title}
                        onChange={this.handleInputChange}                      
                        placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <select
                        name="priority"
                        className="form-control"
                        value={this.state.priority}
                        onChange={this.handleInputChange}
                        >
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        name="description"
                        className="form-control"
                        value={this.state.description}
                        onChange={this.handleInputChange}                        
                        placeholder="Description"
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        name="date"
                        className="form-control"
                        value={this.state.date}
                        onChange={this.handleInputChange}         
                        placeholder="Date"
                        />
                    </div>
                    <buttom type="submit" className="btn btn-primary">
                        Save
                    </buttom>
                </form>
            </div>
        )
    }
}

export default TaskForms;