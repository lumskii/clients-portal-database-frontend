const { ClientSchema } = require('../models/Clients')


const insertClient = clientObj =>{
    return new Promise((resolve, reject) => {
        try {
            ClientSchema(clientObj)
                .save()
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        } catch (error) {
            reject(error);
        }
    });  
};

module.exports = {
    insertClient,
};