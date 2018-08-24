import React, { Component } from 'react';
import { injector } from 'react-services-injector';
import TemasForm from './TemasForm';
import TemasList from './TemasList';

class Temas extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            idSelecionado: '',
            tema: '',
            editando: false,
            temas: [],
            list: true
        }
        this.carregarTemas = this.carregarTemas.bind(this);
        this.selecionado = this.selecionado.bind(this);
        this.novo = this.novo.bind(this);
    }
    
    componentDidMount(){
        this.carregarTemas();
    }

    toggle() {
        this.setState({
            list: !this.state.list
        });        
    }

    carregarTemas() {
        console.log("... carregando temas");
        const { temasService } = this.services;

        temasService.Temas()
            .then((temas) => {
                temas.json().then((data) => {                    
                    this.setState({
                        temas: data
                    })
                });
            });        
    }

    novo(){
        this.setState({
            idSelecionado: '',
            tema: '',
            editando: false
        });
        this.toggle();
    }

    selecionado(id, descricao){        
        this.setState({
            idSelecionado: id,
            tema: descricao,
            editando: true
        });
        this.toggle();
    }

    render() {
        return (
            <div>
                {this.state.list ? 
                <TemasList temas={this.state.temas} carregarTemas={this.carregarTemas} selecionado={this.selecionado} novo={this.novo}/> 
                : 
                <TemasForm id={this.state.idSelecionado} tema={this.state.tema} editando={this.state.editando} carregarTemas={this.carregarTemas} toggle={this.toggle}/>}
            </div>
        )
    }
}

export default injector.connect(Temas, {
    toRender: ['temasService']
});