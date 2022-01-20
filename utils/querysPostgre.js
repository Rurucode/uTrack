const allData = `SELECT * FROM archivos`;
const oneData = `SELECT * FROM archivos WHERE id_archivo = $1`;


const pQuerys = {
    allData,
    oneData
}

module.exports = pQuerys;