const querys = require('../models/querys');

// Controlador para devolver un Json con los datos obtenidos en la query.
const allData = async (req, res) => {
    try {
        let data = await querys.allData();
        // console.log(data + "************************");
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}

// allData();

const controllerFunctions = {
    allData
}


module.exports = controllerFunctions;

