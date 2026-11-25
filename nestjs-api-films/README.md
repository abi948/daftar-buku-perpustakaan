# REST API Daftar Film - NestJS + MySQL

Project ini menyediakan satu endpoint untuk mengambil daftar film dari database MySQL.

## 1. Persiapan database

1. Buka XAMPP Control Panel.
2. Jalankan **Apache** dan **MySQL**.
3. Buka `http://localhost/phpmyadmin`.
4. Pilih menu **Import**.
5. Pilih file `database.sql` dari folder project ini, lalu klik **Import**.

File SQL akan membuat database `db_sinemalist`, tabel `films`, dan tiga data contoh.

## 2. Menjalankan project

Buka terminal di folder project, lalu jalankan:

```bash
npm install
npm run start:dev
```

Konfigurasi database berada di `src/app.module.ts`:
- host: `localhost`
- port: `3306`
- username: `root`
- password: kosong
- database: `db_sinemalist`

Jika MySQL XAMPP Anda memakai password atau port berbeda, sesuaikan konfigurasi tersebut.

## 3. Menguji dengan Postman

- Method: `GET`
- URL: `http://localhost:3000/films`
- Klik **Send**.

Contoh response:

```json
{
  "message": "Berhasil mengambil data film",
  "data": [
    {
      "id": 1,
      "judul": "Interstellar",
      "genre": "Sci-Fi",
      "tahun": 2014
    }
  ]
}
```

Data aktual akan mengikuti isi tabel di database Anda.

## 4. Alur antar komponen

1. `AppModule` mengatur koneksi TypeORM ke MySQL dan mendaftarkan `FilmsModule`.
2. `FilmsModule` menghubungkan `FilmsController`, `FilmsService`, dan entity `Film`.
3. `FilmsController` menerima request `GET /films` dari Postman.
4. `FilmsController` memanggil method `findAll()` pada `FilmsService`.
5. `FilmsService` meminta repository TypeORM mengambil seluruh data tabel `films`.
6. MySQL mengembalikan data, lalu NestJS mengirimkannya sebagai response JSON.

## 5. Struktur folder

```text
nestjs-api-films/
├── database.sql
├── package.json
├── nest-cli.json
├── tsconfig.json
└── src/
    ├── main.ts
    ├── app.module.ts
    └── films/
        ├── films.module.ts
        ├── films.controller.ts
        ├── films.service.ts
        └── film.entity.ts
```
