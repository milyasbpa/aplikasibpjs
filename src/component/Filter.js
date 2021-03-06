import React,{useState} from 'react';
// import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

// import data from './data/data.json';
// import datas from './data/dataapotekonline.json';

// import FilterButton from './FilterButton';
// import GroupButton from './GroupButton';

import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';


import {warnagrafik,warnaborder} from './warna/warna'

import NestedList from './NestedList'

// Style
const useStyles = makeStyles((theme) => ({
    root: {
    //   flexGrow: 1,
    //   marginTop:'20px'
    display:'flex',
      margin:'auto',
      justifyContent:'center',
      alignItems:'flex-start',
      maxWidth:'1280px',
      paddingTop:'50px',
    },
    rootfilter:{
        marginTop:'20px',
        marginRight:'30px',
        marginLeft:'30px',
        padding:'20px 5px',
        border:'1px solid #c0c0c0',
        borderRadius:'4px'
    },
    rootgrafik:{
        flexGrow:1
    },
    filterdata:{
        paddingTop:'50px'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
    keterangan:{
        fontSize:14,
        textAlign:'center',
        // fontWeight:'bold'
      },
      keteranganangka:{
        fontSize:18,
        textAlign:'center',
        fontWeight:'bold'
      },
      keteranganpertanyaan:{
        fontSize:12,
        textAlign:'center',
        color:'#808080',
        
    },
      keterangannilai:{
          fontSize:14,
          textAlign:'center',
          color:'#808080',
          fontWeight:'bold',
      },
      keterangannilaiangka:{
        fontSize:14,
        textAlign:'center',
        color:'red',
        fontWeight:'bold',
    },
  }));



export default function Filter(props) {
    // const {datas}=props.data
    // Jenis Kelamin
    const [JenisKelamin,setJenisKelamin] = useState('All')
    const laki=()=> {setJenisKelamin('Laki-laki')}
    const wanita=()=> {setJenisKelamin('Perempuan')}
    const all=()=> {setJenisKelamin(`All`)}
    const gender=[all,laki,wanita]
    const labelgender=['All', 'Laki-laki','Perempuan']
    // const hitung=[0,1,2]

    // Usia
    const [Usia,setUsia] = useState(`All`)
    const bawah25=()=> {setUsia('< 25')}
    const atas24=()=> {setUsia('25-34')}
    const atas34=()=> {setUsia('35-44')}
    const atas44=()=> {setUsia('45-54')}
    const atas54=()=> {setUsia('55-64')}
    const atas64=()=> {setUsia('> 64')}
    const all2=()=> {setUsia(`All`)}
    const age=[all2,bawah25,atas24,atas34,atas44,atas54,atas64]
    const labelage=['All','< 25','25-34','35-44','45-54','55-64','> 64']

    // Jaringan kabel
    const [Jaringan,setJaringan] = useState(`All`)
    const telkom=()=> {setJaringan('Kabel: Telkom')}
    const firstmedia=()=> {setJaringan('Kabel: First Media')}
    const mncplay=()=> {setJaringan('Kabel: MNC Play')}
    const biznet=()=> {setJaringan('Kabel: Biznet')}
    const myrepublic=()=> {setJaringan('Kabel: MyRepublic')}
    const all3=()=> {setJaringan('All')}
    const telkomsel=()=> {setJaringan('Seluler: Telkomsel')}
    const xlaxis=()=> {setJaringan('Seluler: XL/Axis')}
    const indosat=()=> {setJaringan('Seluler: Indosat')}
    const smartfren=()=> {setJaringan('Seluler: Smartfren')}
    const three=()=> {setJaringan('Seluler: 3')}
    const network=[all3,telkom,firstmedia,mncplay,biznet,myrepublic,telkomsel,xlaxis,indosat,smartfren,three]
    const labelnetwork=['All','Kabel: Telkom','Kabel: First Media','Kabel: MNC Play','Kabel: Biznet','Kabel: MyRepublic',
    'Seluler: Telkomsel','Seluler: XL/Axis','Seluler: Indosat','Seluler: Smartfren','Seluler: 3']

    // Device
    const [Device,setDevice] = useState(`All`)
    const windows=()=> {setDevice('PC/Laptop: Windows')}
    const linux=()=> {setDevice('PC/Laptop: Linux')}
    const macos=()=> {setDevice('PC/Laptop: MacOs')}
    const android=()=> {setDevice('Mobile: Android')}
    const ios=()=> {setDevice('Mobile: Apple iOS')}
    const all4=()=> {setDevice('All')}
    const pcdevice = [all4,windows,linux,macos,android,ios]
    const labelpcdevice=['All','PC/Laptop: Windows','PC/Laptop: Linux','PC/Laptop: MacOs','Mobile: Android','Mobile: Apple iOS']

    const [Provinsi,setProvinsi] = useState('All')
    const aceh=()=>{setProvinsi('Aceh')} 
    const bali=()=>{setProvinsi('Bali')}
    const banten=()=>{setProvinsi('Banten')}
    const bengkulu=()=>{setProvinsi('Bengkulu')}
    const diy=()=>{setProvinsi('D.I Yogyakarta')}
    const dki=()=>{setProvinsi('D.K.I Jakarta')}
    const gorontalo=()=>{setProvinsi('Gorontalo')}
    const jambi=()=>{setProvinsi('Jambi')}
    const jawabarat=()=>{setProvinsi('Jawa Barat')}
    const jawatengah=()=>{setProvinsi('Jawa Tengah')}
    const jawatimur=()=>{setProvinsi('Jawa Timur')}
    const kalimantanbarat=()=>{setProvinsi('Kalimantan Barat')}
    const kalimantanselatan=()=>{setProvinsi('Kalimantan Selatan')}
    const kalimantantengah=()=>{setProvinsi('Kalimantan Tengah')}
    const kalimantantimur=()=>{setProvinsi('Kalimantan Timur')}
    const kalimantanutara=()=>{setProvinsi('Kalimantan Utara')}
    const kepulauanbangkabelitung=()=>{setProvinsi('Kepulauan Bangka Belitung')}
    const kepulauanriau=()=>{setProvinsi('Kepulauan Riau')}
    const maluku=()=>{setProvinsi('Maluku')}
    const malukuutara=()=>{setProvinsi('Maluku Utara')}
    const ntb=()=>{setProvinsi('Nusa Tenggara Barat')}
    const ntt=()=>{setProvinsi('Nusa Tenggara Timur')}
    const papua=()=>{setProvinsi('Papua')}
    const papuabarat=()=>{setProvinsi('Papua Barat')}   
    const riau=()=>{setProvinsi('Riau')}
    const sulawesibarat=()=>{setProvinsi('Sulawesi Barat')}
    const sulawesiselatan=()=>{setProvinsi('Sulawesi Selatan')}
    const sulawesitengah=()=>{setProvinsi('Sulawesi Tengah')}
    const sulawesitenggara=()=>{setProvinsi('Sulawesi Tenggara')}
    const sulawesiutara=()=>{setProvinsi('Sulawesi Utara')}
    const sumaterabarat=()=>{setProvinsi('Sumatera Barat')}
    const sumateraselatan=()=>{setProvinsi('Sumatera Selatan')}
    const sumaterautara=()=>{setProvinsi('Sumatera Utara')}
    const all5=()=>{setProvinsi('All')}
    const daerahprovinsi=[
        all5,aceh,bali,banten,bengkulu,diy,dki,gorontalo,
        jambi,jawabarat,jawatengah,jawatimur,kalimantanbarat,kalimantanselatan,kalimantantengah,
        kalimantantimur,kalimantanutara,kepulauanbangkabelitung,kepulauanriau,maluku,malukuutara,
        ntb,ntt,papua,papuabarat,riau,sulawesibarat,sulawesiselatan,sulawesitengah,
        sulawesitenggara,sulawesiutara,sumaterabarat,sumateraselatan,sumaterautara
    ]
    const labelprovinsi=[
        'All','Aceh','Bali','Banten','Bengkulu','D.I Yogyakarta','D.K.I Jakarta','Gorontalo',
        'Jambi','Jawa Barat','Jawa Tengah','Jawa Timur','Kalimantan Barat','Kalimantan Selatan','Kalimantan Tengah',
        'Kalimantan Timur','Kalimantan Utara','Kepualauan Bangka Belitung','Kepulauan Riau','Maluku','Maluku Utara',
        'Nusa Tenggara Barat','Nusa Tenggara Timur','Papua','Papua Barat','Riau','Sulawesi Barat','Sulawesi Selatan','Sulawesi Tengah',
        'Sulawesi Tenggara','Sulawesi Utara','Sumatera Barat','Sumatera Selatan','Sumatera Utara'
    ]


    // const [datas,setDataFilter]=useState({})
    let filterdata={
        "Jenis kelamin" : JenisKelamin,
        "Usia (Tahun)" : Usia,
        "Jaringan apa yang Anda gunakan untuk mengakses Aplikasi?" : Jaringan,
        "Perangkat apa yang Anda gunakan untuk mengakses Aplikasi?" : Device,
        "Provinsi" : Provinsi
    }

    for (let key in filterdata){
        if (filterdata[key] === 'All') delete filterdata[key]
    }

    
    const datafilter = props.jsontotal["Sheet1"].filter(item => {
                            for (let key in filterdata){
                                    if (item[key] === undefined || item[key] !== filterdata[key])
                                    return false
                                } return true
                            })
    
    const datafilterpanjang = datafilter.length

    
    
    const classes = useStyles();
    
    

    const labelkepuasan = ['Sangat puas','Puas','Cukup puas', 'Kurang puas', 'Tidak puas']
    const grafikkepuasan = labelkepuasan.map(labelkepuasan=> 
        datafilter.filter(item=>item["Bagaimana tingkat kepuasan Anda terhadapÂ layanan yang tersedia di aplikasi?"]===labelkepuasan).length
        )
    const totalkepuasan = grafikkepuasan.map((item,index) => item*(5-index)).reduce((acc,value) => acc+value)
    const banyakkepuasan = grafikkepuasan.reduce((acc,value) => acc+value)
    const ratakepuasan = (totalkepuasan/banyakkepuasan).toFixed(2)

    const labelpenggunaanlayanan = ['Ya','Tidak (mohon sebutkan layanan yang tidak dipakai, misalnya layanan untukÂ pembatalan booking dokter)']
    const labelpenggunaanlayanane=['Ya','Tidak']
    const grafikpenggunaanlayanan = labelpenggunaanlayanan.map(labelpenggunaanlayanan=> 
        datafilter.filter(item=>item["Apakah Anda menggunakan semua layanan yang terdapat pada aplikasi?"]===labelpenggunaanlayanan).length
        )
    const totalpenggunaanlayanan = grafikpenggunaanlayanan.map((item,index) => item*(1-index)).reduce((acc,value) => acc+value)
    const banyakpenggunaanlayanan = grafikpenggunaanlayanan.reduce((acc,value) => acc+value)
    const ratapenggunaanlayanan = ((totalpenggunaanlayanan/banyakpenggunaanlayanan)*5).toFixed(2)

    const labelpenggunaanfitur = ['Ada (mohon sebutkan fiturnya, misal fitur upload foto)','Tidak ada, semua fitur pernah digunakan']
    const labelpenggunaanfiture=['Ada','Tidak ada']
    const grafikpenggunaanfitur = labelpenggunaanfitur.map(labelpenggunaanfitur=> 
        datafilter.filter(item=>item["Apakah terdapat fitur yang jarang atau tidak pernah digunakan?"]===labelpenggunaanfitur).length
        )
    const totalpenggunaanfitur = grafikpenggunaanfitur.map((item,index) => item*(index)).reduce((acc,value) => acc+value)
    const banyakpenggunaanfitur = grafikpenggunaanfitur.reduce((acc,value) => acc+value)
    const ratapenggunaanfitur = ((totalpenggunaanfitur/banyakpenggunaanfitur)*5).toFixed(2)

    const labelkomplain = ['Pernah (mohon jelaskan komplain Anda)','Tidak pernah']
    const labelkomplaine=['Pernah','Tidak pernah']
    const grafikkomplain = labelkomplain.map(labelkomplain=> 
        datafilter.filter(item=>item["Apakah Anda pernah melakukan komplain mengenai layanan/fitur aplikasi?"]===labelkomplain).length
        )
    const totalkomplain = grafikkomplain.map((item,index) => item*(index)).reduce((acc,value) => acc+value)
    const banyakkomplain = grafikkomplain.reduce((acc,value) => acc+value)
    const ratakomplain = ((totalkomplain/banyakkomplain)*5).toFixed(2)    
    
    const labelkepercayaan = ['Sangat percaya','Percaya','Cukup percaya', 'Kurang percaya', 'Tidak percaya']
    const grafikkepercayaan = labelkepercayaan.map(labelkepercayaan=> 
        datafilter.filter(item=>item["Sejauh mana tingkat kepercayaanÂ Anda terhadap aplikasi?"]===labelkepercayaan).length
        )
    const totalkepercayaan = grafikkepercayaan.map((item,index) => item*(5-index)).reduce((acc,value) => acc+value)
    const banyakkepercayaan = grafikkepercayaan.reduce((acc,value) => acc+value)
    const ratakepercayaan = (totalkepercayaan/banyakkepercayaan).toFixed(2)

    const labelkesenangan = ['Sangat senang','Senang','Cukup senang', 'Kurang senang', 'Tidak senang']
    const grafikkesenangan = labelkesenangan.map(labelkesenangan=> 
        datafilter.filter(item=>item["Sejauh mana tingkat kesenanganÂ AndaÂ dalam menggunakan aplikasi?"]===labelkesenangan).length
        )
    const totalkesenangan = grafikkesenangan.map((item,index) => item*(5-index)).reduce((acc,value) => acc+value)
    const banyakkesenangan = grafikkesenangan.reduce((acc,value) => acc+value)
    const ratakesenangan = (totalkesenangan/banyakkesenangan).toFixed(2)
    
    const labelkenyamanan = ['Sangat nyaman','Nyaman','Cukup nyaman', 'Kurang nyaman', 'Tidak nyaman']
    const grafikkenyamanan = labelkenyamanan.map(labelkenyamanan=> 
        datafilter.filter(item=>item["Sejauh mana tingkat kenyamanan Anda dalam mengoperasikan aplikasi?"]===labelkenyamanan).length
        )
    const totalkenyamanan = grafikkenyamanan.map((item,index) => item*(5-index)).reduce((acc,value) => acc+value)
    const banyakkenyamanan = grafikkenyamanan.reduce((acc,value) => acc+value)
    const ratakenyamanan = (totalkenyamanan/banyakkenyamanan).toFixed(2)

    const labelkesalahanoperasi = ['Sangat sering','Sering','Cukup sering', 'Jarang', 'Tidak pernah']
    const grafikkesalahanoperasi = labelkesalahanoperasi.map(labelkesalahanoperasi=> 
        datafilter.filter(item=>item["Seberapa sering Anda melakukan kesalahan dalam mengoperasikan aplikasi?"]===labelkesalahanoperasi).length
        )
    const totalkesalahanoperasi = grafikkesalahanoperasi.map((item,index) => item*(1+index)).reduce((acc,value) => acc+value)
    const banyakkesalahanoperasi = grafikkesalahanoperasi.reduce((acc,value) => acc+value)
    const ratakesalahanoperasi = (totalkesalahanoperasi/banyakkesalahanoperasi).toFixed(2)
    
    const labeltampilan = ['1','2','3', '4', '5']
    const grafiktampilan = labeltampilan.map(labeltampilan=> 
        datafilter.filter(item=>item["Berikan penilaian Anda mengenai tampilan aplikasi"]===labeltampilan).length
        )
    const totaltampilan = grafiktampilan.map((item,index) => item*(1+index)).reduce((acc,value) => acc+value)
    const banyaktampilan = grafiktampilan.reduce((acc,value) => acc+value)
    const ratatampilan = (totaltampilan/banyaktampilan).toFixed(2)

    const labelkemudahanfitur = ['Mudah','Sulit (mohon tuliskan kesulitan Anda dalam menggunakan fitur di aplikasi)']
    const labelkemudahanfiture =['Mudah','Sulit']
    const grafikkemudahanfitur = labelkemudahanfitur.map(labelkemudahanfitur=> 
        datafilter.filter(item=>item["Apakah fitur pada aplikasi dapat digunakan dengan mudah? (misal: form input berada di satu halaman sehingga tidak perlu bolak balik)"]===labelkemudahanfitur).length
        )
    const totalkemudahanfitur = grafikkemudahanfitur.map((item,index) => item*(1-index)).reduce((acc,value) => acc+value)
    const banyakkemudahanfitur = grafikkemudahanfitur.reduce((acc,value) => acc+value)
    const ratakemudahanfitur = ((totalkemudahanfitur/banyakkemudahanfitur)*5).toFixed(2)

    const labelkebutuhan = ['Sudah','Belum (mohon sebutkan apa yang perlu dikembangkan)']
    const labelkebutuhane =['Sudah','Belum']
    const grafikkebutuhan = labelkebutuhan.map(labelkebutuhan=> 
        datafilter.filter(item=>item["Apakah aplikasi dapat digunakan dengan baik untuk menyelesaikan kebutuhan Anda? (contoh: saya berhasil mendapatkan nomor antrean online melalui aplikasi)"]===labelkebutuhan).length
        )
    const totalkebutuhan = grafikkebutuhan.map((item,index) => item*(1-index)).reduce((acc,value) => acc+value)
    const banyakkebutuhan = grafikkebutuhan.reduce((acc,value) => acc+value)
    const ratakebutuhan = ((totalkebutuhan/banyakkebutuhan)*5).toFixed(2)

        
    const labelkelengkapan = ['1','2','3', '4', '5']
    const grafikkelengkapan = labelkelengkapan.map(labelkelengkapan=> 
        datafilter.filter(item=>item["Berikan penilaian Anda mengenai kelengkapan fitur aplikasi"]===labelkelengkapan).length
        )
    const totalkelengkapan = grafikkelengkapan.map((item,index) => item*(1+index)).reduce((acc,value) => acc+value)
    const banyakkelengkapan = grafikkelengkapan.reduce((acc,value) => acc+value)
    const ratakelengkapan = (totalkelengkapan/banyakkelengkapan).toFixed(2)

    const labelkemudahanoperasi = ['1','2','3', '4', '5']
    const grafikkemudahanoperasi = labelkemudahanoperasi.map(labelkemudahanoperasi=> 
        datafilter.filter(item=>item["Berikan penilaian Anda mengenai kemudahan pengoperasian aplikasi"]===labelkemudahanoperasi).length
        )
    const totalkemudahanoperasi = grafikkemudahanoperasi.map((item,index) => item*(1+index)).reduce((acc,value) => acc+value)
    const banyakkemudahanoperasi = grafikkemudahanoperasi.reduce((acc,value) => acc+value)
    const ratakemudahanoperasi = (totalkemudahanoperasi/banyakkemudahanoperasi).toFixed(2)

    const datasemua=[grafikkepuasan,grafikpenggunaanlayanan,grafikpenggunaanfitur,grafikkomplain,grafikkepercayaan,grafikkesenangan,grafikkenyamanan,grafikkesalahanoperasi,grafikkemudahanfitur,grafikkebutuhan,grafiktampilan,grafikkelengkapan,grafikkemudahanoperasi]
    const labelsemua=[labelkepuasan,labelpenggunaanlayanane,labelpenggunaanfiture,labelkomplaine,labelkepercayaan,labelkesenangan,labelkenyamanan,labelkesalahanoperasi,labelkemudahanfiture,labelkebutuhane,labeltampilan,labelkelengkapan,labelkemudahanoperasi]
    const juduldatasemua = ['Kepuasan','Penggunaan Layanan','Penggunaan Fitur','Pengajuan Komplain','Kepercayaan','Kesenangan','Kenyamanan','Kesalahan Operasi','Kesulitan Penggunaan Fitur','Pemenuhan Kebutuhan','Tampilan','Kelengkapan Fitur','Kemudahan Operasi']
    const ratasemua=[ratakepuasan,ratapenggunaanlayanan,ratapenggunaanfitur,ratakomplain,ratakepercayaan,ratakesenangan,ratakenyamanan,ratakesalahanoperasi,ratakemudahanfitur,ratakebutuhan,ratatampilan,ratakelengkapan,ratakemudahanoperasi]
    // const nilaiakhir=ratasemua.reduce((acc,value) => acc+value)
    // const pembulatannilaiakhir=nilaiakhir.parseInt().toFixed(2)
    const pertanyaansemua=[
        "Bagaimana tingkat kepuasan Anda terhadap layanan yang tersedia di aplikasi?",
        "Apakah Anda menggunakan semua layanan yang terdapat pada aplikasi?",
        "Apakah terdapat fitur yang jarang atau tidak pernah digunakan?",
        "Apakah Anda pernah melakukan komplain mengenai layanan/fitur aplikasi?",
        "Sejauh mana tingkat kepercayaan Anda terhadap aplikasi?",
        "Sejauh mana tingkat kesenangan Anda dalam menggunakan aplikasi?",
        "Sejauh mana tingkat kenyamanan Anda dalam mengoperasikan aplikasi?",
        "Seberapa sering Anda melakukan kesalahan dalam mengoperasikan aplikasi?",
        "Berikan penilaian Anda mengenai tampilan aplikasi",
        "Apakah fitur pada aplikasi dapat digunakan dengan mudah? (misal: form input berada di satu halaman sehingga tidak perlu bolak balik)",
        "Apakah aplikasi dapat digunakan dengan baik untuk menyelesaikan kebutuhan Anda? (contoh: saya berhasil mendapatkan nomor antrean online melalui aplikasi)",
        "Berikan penilaian Anda mengenai kelengkapan fitur aplikasi",
        "Berikan penilaian Anda mengenai kemudahan pengoperasian aplikasi"
    ]

    
    const datasemuagrafik=datasemua.map((item,index)=> {
    return {
        labels:labelsemua[index],
        datasets: [{
            label: 'Pengguna',
            data: item,
            backgroundColor: warnagrafik,
            borderColor: warnaborder,
            borderWidth: 1
    }]
    }
})


    
    // const options= {
    //     title:{
    //         display:true,
    //         text:'TS',
    //         fontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    //         fontStyle:'bold',
    //         fontSize:14,
    //     },
    //     animation:{
    //         duration :3000
    //     },
    //     scales: {
    //         yAxes: [{
    //            ticks: {
    //               beginAtZero: true
    //            }
    //         }]
    //      }
    // }

    const optionssemua = juduldatasemua.map(item=> {return{
        title:{
            display:true,
            text:item,
            fontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            fontStyle:'bold',
            fontSize:14,
        },
        animation:{
            duration :3000
        },
        scales: {
            yAxes: [{
               ticks: {
                  beginAtZero: true,
                  fontSize:10
               }
            }],
            xAxes:[{
                ticks:{
                    fontSize:11
                }
            }]
         }
    }})

    // const isijeniskelamin=['All','Laki-laki','Perempuan']
    return (
        <div className={classes.root} >
            {/* <br />
            <Typography variant="h4">Analisis Data</Typography>
            <br /> */}
            <div className={classes.rootfilter}  >
                <Typography className={classes.keterangan} >Total Responden</Typography>
                <Typography className={classes.keteranganangka} >{datafilterpanjang}</Typography>        
                {/* <Typography className={classes.keterangan} >Total Nilai</Typography>
                <Typography className={classes.keteranganangka} >{pembulatannilaiakhir}</Typography>         */}
                <NestedList judulfilter={'Jenis Kelamin'} isifilter={labelgender} method={gender} />
                <NestedList judulfilter={'Usia'} isifilter={labelage} method={age} />
                <NestedList judulfilter={'Jaringan'} isifilter={labelnetwork} method={network} />
                <NestedList judulfilter={'Sistem Operasi'} isifilter={labelpcdevice} method={pcdevice} />
                <NestedList judulfilter={'Provinsi'} isifilter={labelprovinsi} method={daerahprovinsi} />
            </div>            


            {/* <div className={classes.filterdata} >
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-select">Jenis Kelamin</InputLabel>
                    <Select defaultValue="" id="grouped-select">
                    {gender.map((item,index)=>{
                    return <MenuItem onClick={item} value={index}>{labelgender[index]}</MenuItem>
                    })}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-select">Usia</InputLabel>
                    <Select defaultValue="" id="grouped-select">
                    {age.map((item,index)=>{
                    return <MenuItem onClick={item} value={index}>{labelage[index]}</MenuItem>
                    })}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-select">Jaringan</InputLabel>
                    <Select defaultValue="" id="grouped-select">
                    {network.map((item,index)=>{
                    return <MenuItem onClick={item} value={index}>{labelnetwork[index]}</MenuItem>
                    })}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-select">Sistem Operasi</InputLabel>
                    <Select defaultValue="" id="grouped-select">
                    {pcdevice.map((item,index)=>{
                    return <MenuItem onClick={item} value={index}>{labelpcdevice[index]}</MenuItem>
                    })}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-select">Provinsi</InputLabel>
                    <Select defaultValue="" id="grouped-select">
                    {daerahprovinsi.map((item,index)=>{
                    return <MenuItem onClick={item} value={index}>{labelprovinsi[index]}</MenuItem>
                    })}
                    </Select>
                </FormControl>
                
            </div> */}
            
            
            {/* <br/> */}
            {/* <Typography variant="h5" >Total Responden</Typography>
            <Typography variant="h1" >{datafilterpanjang}</Typography>         */}

            <div className={classes.rootgrafik}>
                <Grid container spacing={3} justify="center" >
                   
                    {datasemuagrafik.map((datasemuagrafik,index) => {return (
                        <Grid item xs={12} sm={10} md={5} >
                            {datasemuagrafik.labels.length===2 ? 
                                <Pie data={datasemuagrafik} options={optionssemua[index]}/> :
                                <Bar data={datasemuagrafik} options={optionssemua[index]}/>
                            }
                            <Typography className={classes.keteranganpertanyaan}>{pertanyaansemua[index]}</Typography>
                            <Typography className={classes.keterangannilai} >Nilai {juduldatasemua[index].toLowerCase()} adalah 
                                <Typography className={ratasemua[index]>3.8 ? classes.keterangannilai : classes.keterangannilaiangka} > {ratasemua[index]} </Typography>  
                            </Typography>
                        </Grid>
                    )}
                    )}
                    
                </Grid>
            </div>
            

        </div>
    )
}

