const router = require('express').Router();
const {
    mahasiswa
} = require('../controllers');

// Ambil data semua mahasiswa
router.get('/mahasiswa', mahasiswa.getDataMahasiswa);

// Ambil data semua mahasiswa berdasarkan id = 2
router.get('/mahasiswa/:id', mahasiswa.getDataMahasiswaByID);

// Tambah data mahasiswa ke database
router.post('/mahasiswa/add', mahasiswa.addDataMahasiswa);

// Edit data mahasiswa
router.post('/mahasiswa/edit', mahasiswa.editDataMahasiswa);

// Delete data mahasiswa
router.post('/mahasiswa/delete/', mahasiswa.deleteDataMahasiswa);

module.exports = router;