import React from "react";
class Footer extends React.Component
{
    render(){   
        console.log(this.props);
        
        return(
            <footer>
                <h1>This is footer for my Project</h1>
            </footer>
        )
    }
}
export default Footer;