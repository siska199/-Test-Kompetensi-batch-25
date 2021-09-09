function gajiKaryawan(golongan,jamKerja){
    if(golongan=="A"){
        upah = jamKerja*5000
        uangLembur = 0
        if(jamKerja>48){
            uangLembur = (jamKerja-48)*4000
        }
        gaji = upah+uangLembur
    }else if(golongan=="B"){
        upah = jamKerja*7000
        uangLembur = 0
        if(jamKerja>48){
            uangLembur = (jamKerja-48)*4000}
        gaji = upah+uangLembur
    }else if(golongan=="C"){
        upah = jamKerja*8000
        uangLembur = 0
        if(jamKerja>48){
            uangLembur = (jamKerja-48)*4000}
        gaji = upah+uangLembur
    }else{
        upah = jamKerja*7000
        uangLembur = 0
        if(jamKerja>48){
            uangLembur = (jamKerja-48)*4000}
        gaji = upah+uangLembur
    }
    console.log(`
    Golongan : ${golongan}, \n
    Jam Kerja : ${jamKerja}, \n
    Upah : Rp. ${upah}, \n
    Uang Lembur : ${uangLembur}, \n
    Gaji : ${gaji}
    `)
}

gajiKaryawan("C",53)
