const pool = require('../utils/conexionPostgre');



const allUsuarios = async () => {

    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(`SELECT * FROM archivos`)
        result = data.rows
        console.log(result);
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

allUsuarios()
.then(data=>console.log(data))