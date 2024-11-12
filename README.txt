# NodeB Data Insertion Program

Program yang berfungsi untuk menyimpan berkas `DTE.txt` dan menyimpannya ke dalam database MySQL/MariaDB.

## Prasyarat // Requirement
- Node.js latest.
- MySQL/MariaDB latest.
- Database `db_mimain` sudah ada dan memiliki tabel `NodeB_Data`.
- Dependencies (dotnev, mysql2, pada lock jason) sudah ada 
  
## Langkah-langkah untuk Menjalankan Program

1. **Clone atau Unduh Proyek:**
   Jika Anda belum memiliki kode ini, Anda bisa mengunduh atau meng-clone repository ini.

2. **Instalasi Dependensi:**
   Jalankan perintah berikut untuk menginstal dependensi yang dibutuhkan:

   ```bash
   npm install

## Konfigurasi Database //ada pada migration//
CREATE TABLE NodeB_Data (
  nodeb_name VARCHAR(255),
  nodeb_id INT,
  subrack_no INT,
  subrack_name VARCHAR(255),
  slot_no INT,
  subsystem_no INT,
  iub_trans_bearer_type VARCHAR(255),
  ip_trans_apart_ind VARCHAR(255) DEFAULT NULL,
  iub_trans_delay INT,
  satellite_trans_ind BOOLEAN,
  nodeb_protocol_version VARCHAR(255),
  resource_management_mode VARCHAR(255),
  nodeb_trace_switch VARCHAR(255),
  nodeb_host_type VARCHAR(255),
  peer_rnc_id VARCHAR(255) DEFAULT NULL,
  peer_nodeb_id VARCHAR(255) DEFAULT NULL,
  sharing_type_of_nodeb VARCHAR(255),
  cn_operator_index INT,
  dss_nodeb_flag BOOLEAN,
  administrative_state VARCHAR(255)
);

## Running 
- Pastikan semua sudah dilakukan mulai Prasyarat hingga Konfigurasi Database 
- Menjalankan menggunakan Node module pada powershell dengan perintah node src/index.js 


