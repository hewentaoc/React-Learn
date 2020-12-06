import React, { Component } from 'react';
import './index.css';
import propTypes from 'prop-types';

export default class Layout extends Component {
    static propTypes = {
        header: propTypes.element,
        menu: propTypes.element,
        children: propTypes.element
    }
    render() {
        return (
            <div className='wrapper'>
                <header className="header">
                    {this.props.header}
                </header>
                <div className='container'>
                    <div className="aside">
                         {this.props.menu}
                    </div>
                    <div className="main">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
