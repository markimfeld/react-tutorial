import React, {Component} from 'react';


class Form extends Component {
    initialState = {
        name: '',
        job: '',
    }

    state = this.initialState

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value,
        })
    }

    render() {
        const {name, job} = this.state;
        return (
            <form>
                <div className="form-group">
                    <label 
                        className="form-control" 
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input 
                        className="form-control"
                        type="text" 
                        name="name"
                        id="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label 
                        className="form-control"
                        htmlFor="job"
                    >
                        Job
                    </label>
                    <input 
                        className="form-control"
                        type="text" 
                        name="job"
                        id="job"
                        value={job}
                        onChange={this.handleChange}
                    />
                </div>
                <input 
                    className="btn btn-primary mt-3"
                    type="button" 
                    value="Submit"
                    onClick={this.submitForm}
                />
            </form>
        )
    }
}


export default Form;
