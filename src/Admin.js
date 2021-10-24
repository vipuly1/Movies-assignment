import React from "react"
import axios from "axios"
import "./Admin.css"

class Admin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            filteredUsers: [],
            clickedRow: [],
            activeRow: ""
        }
        console.log(this.state.users)


    }


    componentDidMount() {
        axios.get("https://admin-panel-in-react-default-rtdb.firebaseio.com/data.json")
            .then(response => {
                this.setState({ users: response.data, filteredUsers: response.data })
                console.log(this.state.users)
            }).catch(err => {
                alert("Error occured", err)


            })
    }

    handleChange = (e) => {
        console.log(e.target.value)
        let filteredData = this.state.users.filter((item) => {
            return item.firstName.toLowerCase().includes(e.target.value.toLowerCase())
        })
        this.setState({ filteredUsers: filteredData })
    }
    handleClick = (e) => {

        var parent = e.target.parentNode
        let userid = parent.querySelectorAll("td")[0].innerText;
        console.log(userid);
        //parent.classList.add("active")

        let clickedData = this.state.users.filter(item => {
            if (item.id == userid) {
                //parent.classList.add("active")
                return item
            }
        })

        this.setState({ clickedRow: clickedData, activeRow:userid})

    }

    render() {
        console.log(this.state.clickedRow)
        return (

            <div>
                <div className="overlay">
                    {/* <img src="./img/preloader.gif" alt="Preloader icon" /> */}
                </div>

                <main>

                    <div className="table-section">

                        <form action="/">
                            <img src='./search-icon.svg' alt="Search Icon" />
                            <input onChange={this.handleChange} type="text" placeholder="Enter something" name="search-box" id="search-box" />
                        </form>

                        <div className="table-wrapper">

                            <div className="table-headers">
                                <table>
                                    <thead>
                                        <tr className="data-row">
                                            <th style={{ width: "56px" }}>Id</th>
                                            <th style={{ width: "140px" }}>FirstName</th>
                                            <th style={{ width: "170px" }}>LastName</th>
                                            <th style={{ width: "230px" }}>Email</th>
                                            <th style={{ width: "140px" }}>Phone</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>

                            <div className="table-data">
                                <table>
                                    <tbody>
                                        {this.state.filteredUsers.map(item => {
                                            let activeClass = ""
                                            item.id == this.state.activeRow ? activeClass = "active": activeClass ="data-row"
                                            return <tr      onClick={this.handleClick} className={activeClass} key={item.id}>
                                                <td style={{ width: "56px" }}>{item.id}</td>
                                                <td style={{ width: "140px" }}>{item.firstName}</td>
                                                <td style={{ width: "170px" }}>{item.lastName}</td>
                                                <td style={{ width: "220px" }}>{item.email}</td>
                                                <td style={{ width: "140px" }}>{item.phone}</td>
                                            </tr>
                                        })}


                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>

                    <div className="info-wrapper">
                        <h1>Details</h1>
                        <p>Click on a table item to get detailed information</p>
                        {this.state.clickedRow.map(item => {
                            console.log(item.firstName)
                            return <div key={item.id} id="info-content" className="information">
                                <div><b>User selected:</b>{item.firstName + " "+ item.lastName}</div>
                                <div>
                                    <b>Description: </b>
                                    <textarea cols="50" rows="5" readOnly>{item.description}</textarea>
                                </div>

                                <div><b>Address:</b>{item.address.streetAddress}</div>
                                <div><b>City:</b>{item.address.city}</div>
                                <div><b>State:</b>{item.address.state}</div>
                                <div><b>Zip:</b>{item.address.zip}</div>
                            </div>

                        })}

                    </div>

                </main>
            </div>
        )

    }

}

export default Admin