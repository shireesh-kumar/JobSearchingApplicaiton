import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer className="myfooter bg-dark text-light">
                {this.props.title} {this.props.copyright}
            </footer>
        )
    }
}
