function tampilkanData() {
    //variabel
    let nama = document.getElementById("nama").value;
    let nim = document.getElementById("nim").value;
    let jk = document.querySelector('input[name="jk"]:checked').value;
    let prodi = document.getElementById("prodi").value;

    //manampilkan data
    let hasil = `
    Nama: ${nama} <br>
    NIM: ${nim} <br>
    Jenis Kelamin: ${jk} <br>
    Prodi: ${prodi} <br>
`;
    document.getElementById("dataMahasiswa").innerHTML = hasil;
}