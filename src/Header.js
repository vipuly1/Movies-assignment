import React from 'react'
import "./Grid.css"

function Header() {
    return (
        <div>
            <header id="header">
                <nav id="navbar">
                    <div className="logo-explore-wrapper" style={{display: "flex", alignItems: "center"}}>
                        <div className="main"><div className="logo"><strong style={{ fontWeight: "1000px" }}>EDYODA</strong></div>
                            <p className="logo-stories">Stories</p></div>
                        <div><span className="dropdown-text">Explore
                            categories</span><i className="fas fa-caret-down drop-icon"></i></div></div>
                    <div classname="btn-text-wrapper" style={{display: "flex", alignItems: "center"}}>
                        <p className="text">EdYoda is free learning and knowledge<br></br>
                            sharing platform for techies</p>
                        <button className="btn-main">Go to Main Website</button>
                    </div>
                </nav>
            </header>

        </div >
    )
}
export default Header
