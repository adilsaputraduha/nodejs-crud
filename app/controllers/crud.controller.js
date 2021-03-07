const config = require("../config/database");
const mysql = require("mysql");
const pool = mysql.createPool(config);

pool.on("error", (err) => {
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
                        message: "Berhasil ambil data",
                        data: results,
                    });
                }
            );
            connection.release();
        });
    },
    // Ambil data mahasiswa berdasarkan nobp
    getDataMahasiswaById(req, res) {
        let nobp = req.params.nobp;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                select * from mahasiswa where nobp = ?; 
                `,
                [nobp],
                function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: "Berhasil ambil data",
                        data: results,
                    });
                }
            );
            connection.release();
        });
    },
    // Simpan data mahasiswa
    addDataMahasiswa(req, res) {
        let data = {
            nobp: req.body.nobp,
            nama: req.body.nama,
            jurusan: req.body.jurusan,
        };
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                insert into mahasiswa set ?;
                `,
                [data],
                function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: "Berhasil tambah data",
                    });
                }
            );
            connection.release();
        });
    },
    // Edit data mahasiswa
    editDataMahasiswa(req, res) {
        let dataEdit = {
            nama: req.body.nama,
            jurusan: req.body.jurusan,
        };
        let nobp = req.body.nobp;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                update mahasiswa set ? where nobp = ?;
                `,
                [dataEdit, nobp],
                function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        messsage: "Berhasil edit data",
                    });
                }
            );
            connection.release();
        });
    },
    // Hapus data mahasiswa
    deleteDataMahasiswa(req, res) {
        let nobp = req.body.nobp;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                delete from mahasiswa where nobp = ?;
                `,
                [nobp],
                function (err, results) {
                    if (err) throw err;
                    res.send({
                        success: true,
                        message: "Berhasil hapus data",
                    });
                }
            );
            connection.release();
        });
    },
};
