import React, { Component } from 'react';
import { injector } from 'react-services-injector';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';

class TemasForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editando: props.editando,
      tema: props.tema,
      id: props.id
    };

    this.AlterandoTexto = this.AlterandoTexto.bind(this);
    this.Salvar = this.Salvar.bind(this);
  }

  Salvar() {    
    const { temasService } = this.services;

    if (this.state.editando) {
      temasService.EditarTema(this.state.id, this.state.tema)
        .then((tema) => {          
          //tema.json().then((data) => {
            this.props.carregarTemas();
            this.props.toggle();
          //});
        });
    }
    else {
      temasService.NovoTema(this.state.tema)
        .then((tema) => {
          //tema.json().then((data) => {
            this.props.carregarTemas();
            this.props.toggle();
          //});
        });
    }
  }

  AlterandoTexto(event) {
    this.setState({
      tema: event.target.value
    });
  }

  render() {
    return (
      <Card>
        <CardHeader>
          Tema
        </CardHeader>
        <CardBody>
          <Form action="" method="post" className="was-validated">
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Nome</InputGroupText>
                </InputGroupAddon>
                <Input type="text" id="nome" name="nome" className="form-control-warning" value={this.state.tema} onChange={this.AlterandoTexto} required />
                <FormFeedback className="help-block">Por favor insira um nome</FormFeedback>
              </InputGroup>
            </FormGroup>
            <FormGroup className="form-actions">
              <Button type="button" size="sm" color="primary" onClick={this.Salvar}>Salvar</Button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    )
  }
}

export default injector.connect(TemasForm, {
  toRender: ['temasService']
});