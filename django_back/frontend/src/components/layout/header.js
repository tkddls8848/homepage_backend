import React, {Component} from 'react'

export class Header extends Component {
    render(){
        return(
            <div id="header">
                <div id="nav-wrapper"> 
                    <nav id="nav">
                        <ul>
                            <li className="active"><a href="index.html">Homepage</a></li>
                            <li><a href="left-sidebar.html">Left Sidebar</a></li>
                            <li><a href="right-sidebar.html">Right Sidebar</a></li>
                            <li><a href="no-sidebar.html">No Sidebar</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header