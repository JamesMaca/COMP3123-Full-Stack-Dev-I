import React, {useState } from 'react'
import './Form.css';

export default function Forms(){

    var[formData, setDisplay] = useState({
        email: ' ',
        name: ' ',
        addressOne: ' ',
        addressTwo: ' ',
        province: ' ',
        postalCode: ' '
    })

    const [showData, setShowData] = useState(false);

    const provinces = [
        "Alberta",
        "British Columbia",
        "Manitoba",
        "New Brunswick",
        "Newfoundland and Labrador",
        "Nova Scotia",
        "Ontario",
        "Prince Edward Island",
        "Quebec",
        "Saskatchewan",
        "Northwest Territories",
        "Nunavut",
        "Yukon"]

    

    const onValueChanged = (event) => {
        event.preventDefault()
        setDisplay({
            ...formData,
            [event.target.name]: event.target.value
        })
        setShowData(false)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(formData)
        setShowData(true)
    }


    return (
        <React.Fragment>
            <div className='form'>
                <form onSubmit={(e) => onSubmitForm(e)} >
                    
                    <div class='firstLine'>
                        <label htmlFor="email">Email</label>
                        <input 
                            name='email'
                            type="text"
                            onChange={(e) => onValueChanged(e)} 
                            placeholder="Enter Email" />
                    </div>
                    <div class='firstLine'>
                        <label htmlFor="name">Name</label>    
                        <input 
                            name='name'
                            type="text"
                            onChange={(e) => onValueChanged(e)} 
                            placeholder="Full Name" />
                    </div>

                    <br />

                    <div class='address'>
                        <label htmlFor="addressOne">Address</label>
                        <input 
                            name='addressOne'
                            type="text"
                            placeholder="1234 Main St"
                            onChange={(e) => onValueChanged(e)} />

                        <br />

                        <label htmlFor="addressTwo">Address 2</label>
                        <input 
                            name='addressTwo'
                            type="text"
                            placeholder="Apartment, studio, or floor"
                            onChange={(e) => onValueChanged(e)} />
                    </div>

                    <div class="addressInfo">
                        <label htmlFor="city">City</label>
                        <input
                            name='city'
                            type="text"
                            onChange={(e) => onValueChanged(e)} />
                    </div>

                    <div class="addressInfo">
                        <label htmlFor="province">Province</label>
                        <select name='province' onChange={(e) => onValueChanged(e)}>
                            {
                                provinces.map((province) => (
                                    <option key={province} value={province}>{province}</option>
                                ))
                            }
                        </select>
                    </div>
                    
                    <div class="addressInfo">
                        <label htmlFor="postalCode">Postal Code</label>
                        <input
                            name='postalCode'
                            type="text"
                            onChange={(e) => onValueChanged(e)} />
                    </div>

                    <br />

                    <input
                        name='terms'
                        type="checkbox"
                        onChange={(e) => onValueChanged(e)} />
                    <label htmlFor="terms"> Agree Terms and Conditions?</label>
                    
                    <br />
                    <br />

                    <input 
                        name='btnSubmit'
                        type="submit"
                        value="Submit" />
                    
                </form>
            </div>
            
            {showData && (
                <div className='formOutput'>
                    <h3>Email: {formData.email}</h3>
                    <h3>Full Name: {formData.name}</h3>
                    <h3>Address: {formData.addressOne}</h3>
                    <h3>Address2: {formData.addressTwo}</h3>
                    <h3>City: {formData.city}</h3>
                    <h3>Province: {formData.province}</h3>
                    <h3>Postal Code: {formData.postalCode}</h3>
                </div>
            )}


        </React.Fragment>
    )
}

