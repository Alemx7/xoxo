import React, { Component } from 'react';

class Contador extends Component {

    constructor(props){
        super(props);
        this.state = {
            telefono : 0,
            mensaje : '',
            url : `https://api.whatsapp.com/send?phone=52+${this.telefono}&text=${this.mensaje}`

        }
    }
 

    onChangeInputTelefono = (e) =>{
        console.log(e.target.value);
        this.setState({
            telefono : e.target.telefono,
        })
    }

    onChangeInputMensaje = (e) => {
        console.log(e.target.value);
        this.setState({
            mensaje : e.target.mensaje
        })
    }
    render(){
        return (
            <section>
                <div className="Contador">

                    <h3>Numero de telefono</h3>
                    <input type="text" id="telefono" onChange = {this.onChangeInputTelefono}/><br/><br/>

                    <h3>Mensaje de Whatsapp</h3>
                    <input type="text" id="mensaje" onChange = {this.onChangeInputMensaje}/><br/><br/>

                    <a href ={this.state.url}><button > Enviar Mensaje</button></a>

                </div>
            </section>

        )
    }
}

export default Contador;

