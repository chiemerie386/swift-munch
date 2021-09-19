import React, {useState} from 'react';
import Login from './Login';
import Modal from 'react-modal'

const Header = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }
    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    return (
        <div >
            <section>
            <div className = "container">
                <div className="back">
                    <div className="logo"></div>
                    <div className="navbar">☰</div>
                    <div className="search">
                        {/* <form action="">
                            <input type="text" class= "search-inp" />
                            <input type="submit" value = "Search" class= "search-sub" />
                        </form> */}
                        <button onClick={setModalIsOpenToTrue} className = "logbtn">
                            Get Started
                        </button>
                        <Modal className="mod" isOpen= {modalIsOpen} style= {{  color:"red"}}>
                        {/* <button onClick={setModalIsOpenToFalse} className = "logbtn">x</button> */}
                        <Login/>
                        </Modal>
                        <h1>lets go
                        </h1>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Header
