const config = require("../config/database");
const mysql = require("mysql");
const pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.log(err);
});

module.exports = {
    // Ambil semua data mahasiswa
    getDataMahasiswa(req, res) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                select * from mahasiswa;
                `,
                function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Berhasil ambil data',
                        data: results
                    });
                }
            );
            connection.release();
        })
    },
    // Ambil data mahasiswa berdasarkan id
    getDataMahasiswaById(req, res) {
        let id = req.params.id;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                select * from mahasiswa where nobp = ?; 
                `, [id],
                function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Berhasil ambil data',
                        data: results
                    });
                }
            );
            connection.release();
        })
    },
    // Simpan data mahasiswa
    addDataMahasiswa(req, res) {
        let data = {
            nobp: req.body.nobp,
            nama: req.body.nama,
            jurusan: req.body.jurusan
        }
    }
};