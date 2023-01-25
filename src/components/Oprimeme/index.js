import React from "react";

class Oprimeme extends React.Component{

    render(){
     return(
        <div>
            <button onClick={()=> this.props.handleModal(true)}>Salir modal derecha</button>
        </div>
     )   
    }

}
export default Oprimeme;