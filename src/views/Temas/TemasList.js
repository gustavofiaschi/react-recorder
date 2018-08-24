import React, { Component } from 'react';
import { injector } from 'react-services-injector';
import { Button, Row, Col, Card, CardHeader, CardBody, Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class TemasList extends Component {
    
    editar(id, descricao) {
        this.props.selecionado(id, descricao);
    }

    excluir(id) {
        const { temasService } = this.services;
        temasService.ExcluirTema(id)
        .then((tema) => {
            tema.json().then((data) => {                    
                this.props.carregarTemas();
            });
        });    ;        
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" lg="6">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Temas
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead>
                                        <tr><th>Descrição</th></tr>
                                    </thead>
                                    <tbody>
                                        {this.props.temas.map((item, i) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>
                                                        {item.descricao}
                                                    </td>
                                                    <td>
                                                        <Button size="sm" className="btn-sm" onClick={() => this.editar(item.id, item.descricao)}>Editar</Button>

                                                        <Button size="sm" className="btn-sm" onClick={() => this.excluir(item.id)}>Excluir</Button>
                                                    </td>
                                                </tr>)
                                        })}
                                    </tbody>
                                </Table>
                                <Pagination>
                                    <PaginationItem>
                                        <PaginationLink previous tag="button"></PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active>
                                        <PaginationLink tag="button">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink tag="button">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink tag="button">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink tag="button">4</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink next tag="button"></PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                                <br />
                                <Button type="button" size="sm" color="primary" onClick={this.props.novo}>Novo</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default injector.connect(TemasList, {
    toRender: ['temasService']
});