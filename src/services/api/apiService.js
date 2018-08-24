import { Service } from 'react-services-injector';

class apiService extends Service {

    apiAddress = 'http://gestaoacervoapi.azurewebsites.net/api/'; //values';//'http://localhost:3000/api/';

    getHttp(controller, action, parameter) {
        var endereco = this.apiAddress;
        if (controller !== undefined)
            endereco = endereco.concat(controller);

        if (action !== undefined)
            endereco = endereco.concat('/' + action);

        if (parameter !== undefined)
            endereco = endereco.concat('/' + parameter);
        
        return fetch(endereco, {
            method: 'GET'
        });/*.then((response) => {
                response.json().then((data)=>{
                    console.log(data);                    
                    return data;
                });
             })
            .catch((error) => {
                console.error(error);
            });*/
    }

    postHttp(controller, action, data) {
        var endereco = this.apiAddress;
        if (controller !== undefined)
            endereco = endereco.concat(controller);

        if (action !== undefined)
            endereco = endereco.concat('/' + action);

        return fetch(endereco, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"//; charset=utf-8"
            },
            body: JSON.stringify(data)
            //credentials: 'include'
        }).then((response) => {
            
            if (response.status >= 200 && response.status < 300) {
                console.log('Post bem-sucedido!');
            }
            else
                console.log('Post falhou!');
        })
            .catch((error) => {
                console.error(error);
            });
    }

    putHttp(controller, action, parameter, data) {
        var endereco = this.apiAddress;
        if (controller !== undefined)
            endereco = endereco.concat(controller);

        if (action !== undefined)
            endereco = endereco.concat('/' + action);

        if (parameter !== undefined)
            endereco = endereco.concat('/' + parameter);
        console.log(endereco);    
        return fetch(endereco, {
            method: 'PUT',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"//; charset=utf-8"
            },
            body: JSON.stringify(data)
            //credentials: 'include'
        }).then((response) => {

            if (response.status >= 200 && response.status < 300) {
                console.log('PUT bem-sucedido!');                
            }
            else
                console.log('PUT falhou!');
        })
            .catch((error) => {
                console.error(error);
            });
    }

    deleteHttp(controller, action, parameter) {
        var endereco = this.apiAddress;
        if (controller !== undefined)
            endereco = endereco.concat(controller);

        if (action !== undefined)
            endereco = endereco.concat('/' + action);

        if (parameter !== undefined)
            endereco = endereco.concat('/' + parameter);

        return fetch(endereco, {
            method: 'DELETE'
        });
    }

};

export default apiService;

