import React from "react";

function KartuBuku({ buku }) {
  return (
    <div className="kartu">
      <h3>{buku.judul}</h3>
      <p>Penulis: {buku.penulis}</p>
    </div>
  );
}

export default KartuBuku;
