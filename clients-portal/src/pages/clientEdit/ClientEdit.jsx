import { BsCalendar } from "react-icons/bs"
import {RiImageEditFill} from "react-icons/ri"
import { MdLocationSearching, MdMailOutline, MdPermIdentity, MdPhoneAndroid } from "react-icons/md"
import "./clientEdit.css"
import { Link } from "react-router-dom"

export default function ClientEdit() {
  return (
    <div className="client_edit">
        <div className="clientTitleContainer">
            <h1 className="headerTitle">Edit Client</h1>
            <Link to='/client-setup'>
                <button className="clientAddButton">Create</button>
            </Link>
        </div>
        <div className="clientContainer">
            <div className="clientShow">
                <div className="clientShowTop">
                    <img src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="clientShowImg" />
                    <div className="clientShowTopTitle">
                        <span className="clientShowClientName">The Test</span>
                        <span className="clientShowClientDT">Sales Only</span>
                    </div>
                </div>
                <div className="clientShowBottom">
                    <span className="clientShowTitle">Account Details</span>
                        <div className="clientShowInfo">
                            <MdPermIdentity className="clientShowIcon" />
                            <span className="clientShowClientCode">octane1234</span>
                        </div>
                        <div className="clientShowInfo">
                            <BsCalendar className="clientShowIcon" />
                            <span className="clientShowClientCode">10.12.1999</span>
                        </div>
                        <span className="clientShowTitle">Contact Details</span>
                        <div className="clientShowInfo">
                            <MdPhoneAndroid className="clientShowIcon" />
                            <span className="clientShowClientCode">+1 123 456 7890</span>
                        </div>
                        <div className="clientShowInfo">
                            <MdMailOutline className="clientShowIcon" />
                            <span className="clientShowClientCode">producer@gmail.com</span>
                        </div>
                        <div className="clientShowInfo">
                            <MdLocationSearching className="clientShowIcon" />
                            <span className="clientShowClientCode">New York | USA</span>
                        </div>
                </div>
            </div>
            <div className="clientUpdate">
                <span className="clientUpdateTitle">Edit</span>
                <form className="clientUpdateForm">
                    <div className="clientUpdateLeft">
                        <div className="clientUpdateItem">
                            <label>Film Name</label>
                            <input type="text" placeholder="The Test" className="clientUpdateInput" />
                        </div>
                        <div className="clientUpdateItem">
                            <label>Producer's Email</label>
                            <input type="email" placeholder="producer@gmail.com" className="clientUpdateInput" />
                        </div>
                        <div className="clientUpdateItem">
                            <label>Distribution Type</label>
                            <input type="text" placeholder="Sales only" className="clientUpdateInput" />
                        </div>
                        <div className="clientUpdateItem">
                            <label>Phone Number</label>
                            <input type="text" placeholder="+1 123 456 7890" className="clientUpdateInput" />
                        </div>
                        <div className="clientUpdateItem">
                            <label>Location</label>
                            <input type="text" placeholder="New York | USA" className="clientUpdateInput" />
                        </div>
                    </div>
                    <div className="clientUpdateRight">
                        <div className="clientUpdateUpload">
                            <img src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="clientUpdateImg" />
                            <label for="file"><RiImageEditFill className="clientUpdateIcon" /></label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="clientUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
