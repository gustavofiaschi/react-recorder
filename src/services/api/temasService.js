import apiService from './apiService';

class temasService extends apiService {
    Temas() {
        return this.getHttp('tema');
    }

    NovoTema(tema) {        
        return this.postHttp('tema', undefined, { descricao: tema });
    }

    EditarTema(id, tema) {        
        return this.putHttp('tema', undefined, id, { id, descricao: tema });
    }

    ExcluirTema(id) {
        return this.deleteHttp('tema', undefined, id);
    }
}

export default temasService;