const pool = require('../utils/conexionPostgre');
const pQuerys = require('../utils/querysPostgre');

// Query para obtener todos los datos de la BBDD.
const allData = async () => {

    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(pQuerys.allData);
        result = data.rows
        // console.log(result)
    } catch (err) {
        // console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const querys = {
    allData
}

// allData()
// .then(data=>console.log(data))

module.exports = querys;