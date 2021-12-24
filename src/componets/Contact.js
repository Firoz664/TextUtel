import React from 'react'

export default function Contact() {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Name</label>
                    <select className="form-control" id="exampleFormControlSelect1"></select>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Mobile Number</label>
                    <select className="form-control" id="exampleFormControlSelect1"></select>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect2"> Contact Adress</label>
                    <select multiple className="form-control" id="exampleFormControlSelect2"></select>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Write here</label>
                    <textarea className="form-control my-2" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                </form><div className="conatainer my-2">
                <button className=" btn btn-primary"> Submit</button>

                </div>
        </div>
    )
}
