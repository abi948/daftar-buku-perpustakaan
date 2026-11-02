import KartuBuku from "./KartuBuku";
import React from "react";

function DaftarBuku({ daftar }) {
  if (daftar.length === 0) {
    return <p>Belum ada data buku</p>;
  }

  return (
    <div>
      {daftar.map((buku) => (
        <KartuBuku key={buku.id} buku={buku} />
      ))}
    </div>
  );
}

export default DaftarBuku;
