function Contacts() {
    return (
        <div className="contacts_wrapper">
            <h1 className="contacts_header">contacts</h1>
            <div className="contacts_form">
                <form>
                    <div className="inputfields">
                        <input type="text" placeholder="full name" /><br></br>
                        <input type="text" placeholder="email" /><br></br>
                        <input type="text" placeholder="question" /><br></br>
                    </div>
                    <input type="submit" className="submitbtn" value="send" />   
                </form>
            </div>
            {/* <div className="footer">Copyright © 2022 Nytro<mark>Byte</mark>  </div> */}
        </div>
    )
}

export default Contacts;