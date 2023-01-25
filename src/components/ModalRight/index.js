import React from "react";
import './index.css'

class ModalRight extends React.Component {
    render() {
        return (
            <>
                <div onClick={()=> this.props.handleModal(false) } className={`containerOpacityModalRight ${this.props.visible ? "containerOpacityModalRightVisible" : null}`}></div>
                <div className={`containerContenedorModalRight ${this.props.visible ? "containerContenedorModalRightVisible" : null}`}>Contenedor</div>
            </>
        )
    }
}
export default ModalRight