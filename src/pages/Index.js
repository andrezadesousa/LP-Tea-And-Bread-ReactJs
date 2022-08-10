import React, { Component } from 'react'
import Header from './header/Header'
import Home from './home/Home'
import Specialty from './specialty/Specialty'
import Products from './products/Products'
import Quality from './quality/Quality'
import About from './aboutUs/About'
import Footer from './footer/Footer'
import ScrollUp from './ScrollUp/ScrollUp'

class Index extends Component{
    render(){
        return(
            <body>
                <Header></Header>
                <main>
                    <Home></Home>
                    <Specialty></Specialty>
                    <Products></Products>
                    <Quality></Quality>
                    <About></About>
                </main>
                <Footer></Footer>
                <ScrollUp></ScrollUp>
            </body>
        )
    }
}

export default Index