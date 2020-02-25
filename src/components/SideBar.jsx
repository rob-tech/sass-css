import React, { Component } from 'react';

class SideBar extends Component {
    state = {  }
    render() { 
        return (  
           <>
           <div id="sideBarCont">
           
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Search</a></li>
                    <li><a href="#">Your Library</a></li>
                </ul>
          
            </div>
            </>        
        );
    }
}
 
export default SideBar;