import React from "react";

const ContactForm = () =>
{
    return(
        <form method="POST" name="contact">
            <input type="text" name="fname" className="form-control"/>
            <input type="text" name="lname" className="form-control"/>
            <input type="text" name="email" className="form-control"/>
            <input type="submit" className="btn btn-primary"/>
        </form>
    )
}

export default ContactForm;