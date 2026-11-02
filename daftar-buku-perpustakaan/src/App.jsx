import React, { useState } from "react";
import Header from "./components/Header";
import Ringkasan from "./components/Ringkasan";
import FormBuku from "./components/FormBuku";
import DaftarBuku from "./components/DaftarBuku";
import "./App.css";

function App() {
  const [judul, setJudul] = useState("");
  const [penulis, setPenulis] = useState("");

  const [daftar, setDaftar] = useState([
    { id: 1, judul: "Laskar Pelangi", penulis: "Andrea Hirata" },
    { id: 2, judul: "Bumi", penulis: "Tere Liye" },
  ]);

  function tambahBuku() {
    if (judul.trim() === "" || penulis.trim() === "") {
      alert("Judul dan penulis buku harus diisi!");
      return;
    }

    const bukuBaru = {
      id: Date.now(),
      judul: judul.trim(),
      penulis: penulis.trim(),
    };

    setDaftar([...daftar, bukuBaru]);
    setJudul("");
    setPenulis("");
  }

  return (
    <div className="container">
      <Header />
      <Ringkasan jumlah={daftar.length} />

      <FormBuku
        judul={judul}
        setJudul={setJudul}
        penulis={penulis}
        setPenulis={setPenulis}
        tambahBuku={tambahBuku}
      />

      <h2>Daftar Buku</h2>
      <DaftarBuku daftar={daftar} />
    </div>
  );
}

export default App;
