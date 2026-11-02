import React from "react";

function FormBuku({
  judul,
  setJudul,
  penulis,
  setPenulis,
  tambahBuku,
}) {
  return (
    <div className="form-buku">
      <input
        type="text"
        placeholder="Masukkan judul buku"
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
      />

      <input
        type="text"
        placeholder="Masukkan nama penulis"
        value={penulis}
        onChange={(e) => setPenulis(e.target.value)}
      />

      <button onClick={tambahBuku}>Tambah</button>
    </div>
  );
}

export default FormBuku;
