import React from 'react'

export default class PasswordInput extends React.Component {
    constructor(props) {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            content: '',
            minCharLength: props.minCharLength || 8
        }

    }
    estimateStrength(content) {
        let score = 0

        if (/!@#$%^&*()_+-=\[\]{};':"\\|,.<>\/?]/.test(content) === true) {
            console.log("special character");
            
        }
        
    }

    handleChange(event) {
        const content = this.state.content
        event.persist()
        this.setState({content: event.target.value
            })
        this.estimateStrength(content)
        console.log(content)
    }

   

    render() {
        
        return <div>
            <input placeholder="test your password" onChange={this.handleChange}></input>
            <div className = "error-message">
        
            </div>
            
        </div>
    }
}