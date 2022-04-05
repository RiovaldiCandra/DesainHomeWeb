import React from 'react'

export default class Buku extends React.Component{
    constructor(){
        super()
        this.state = {
            buku : [
                {
                    isbn: "12345",
                    judul: "Diary Arwah",
                    penulis: "Margaluwih",
                    penerbit: "Moka Media",
                    harga: 99000,
                    cover: "https://drive.google.com/uc?id=1HmZhBJW7oDeitOBGFQXpqA90lpLNitGE"
                },
                {
                    isbn: "67890",
                    judul: "Narnia",
                    penulis: "C.S. Lewis",
                    penerbit: "HarperCollins",
                    harga: 99000,
                    cover: "https://drive.google.com/uc?id=1GJP6O-YphtXxZRSGveCtHcGUcq0veZdT"
                },
                {
                    isbn: "45678",
                    judul: "Harry Potter",
                    penulis: "J.K. Rowling",
                    penerbit: "Bloomsburry",
                    harga: 99000,
                    cover: "https://drive.google.com/uc?id=14K-jluG_yJtrilzggKdYD-vcHepEG0xr"
                }
            ],

            isbn: "",
            judul: "",
            penulis: "",
            penerbit: "",
            harga: 0,
            cover: "",
            action: "",
            selectedItem: null,
            isModalOpen: false
        }
    }
    add = () => {
        this.setState({
            isModalOpen: true
        })
    }
    handleClose = () => {
        this.setState({
            isModalOpen: false
        })
    }
    edit = (item) => {
        console.log('edit')
    }
    drop = (item) => {
        console.log('drop')
    }
    render(){
        return(
            <div className='container'>
                <div className='alert alert-info'>
                    <h1 className='text-center'>Macam-Macam Buku :</h1>
                </div>
            </div>
        )
    }
}