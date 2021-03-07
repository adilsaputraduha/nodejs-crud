const router = require("express").Router();
const { mahasiswa } = require("../controllers");

// Ambil data semua mahasiswa
router.get("/mahasiswa", mahasiswa.getDataMahasiswa);

// Ambil data semua mahasiswa berdasarkan id
router.get("/mahasiswa/:nobp", mahasiswa.getDataMahasiswaById);

// Tambah data mahasiswa ke database
router.post("/mahasiswa/", mahasiswa.addDataMahasiswa);

// Edit data mahasiswa
router.put("/mahasiswa/edit/:id", mahasiswa.editDataMahasiswa);

// Delete data mahasiswa
router.post("/mahasiswa/delete/", mahasiswa.deleteDataMahasiswa);

module.exports = router;
