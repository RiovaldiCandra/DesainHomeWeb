import React from 'react'

export default class Fifth extends React.Component{
    constructor(){
        super()
        this.state = {
            angka1: 0,
            angka2: 0,
            hasil: 0
        }
    }
    changeState = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    hasilJumlah = (e) => {
        e.preventDefault()
        let angka1 = this.state.angka1
        let angka2 = this.state.angka2
        let tambah = Number(angka1) + Number(angka2)
        this.setState({
            hasil: tambah
        })
    }
    render(){
        return(
            <div className='container'>
                <h3>Form Ubah State</h3>
                <form onSubmit={this.hasilJumlah}>
                    <p>Input Angka Pertama</p>
                    <input name="angka1" className='form-control' onChange={this.changeState} />
                    <p>Input Angka Kedua</p>
                    <input name="angka2" className='form-control' onChange={this.changeState} />
                    <button type='submit'>Jumlah</button>
                </form>
                <h3>Isi State</h3>
                <p>Isi dari state angka pertama : {this.state.angka1}</p>
                <p>Isi dari state angka kedua : {this.state.angka2}</p>
                <p>hasil Penjumlahan : {this.state.hasil}</p>
            </div>
        )
    }
}