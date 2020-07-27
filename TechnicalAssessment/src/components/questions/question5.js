import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import VisibilityTracker from './../visibility-tracker'


function Question5({updateNavigation}) {

    return (
      <VisibilityTracker onVisible = {(visible) => updateNavigation("question3", visible)}>

        <section id = "question5">
          <h2>Question 5</h2>

          <i><b>Coding exercise (using Angular or a Javascript framework of your choice): Healthcare providers request
to be part of the Availity system. Create a registration user interface so healthcare providers can
electronically join Availity. The following data points should be collected:</b></i>
            <ul>
                <li>First and Last Name</li>
                <li>NPI number</li>
                <li>Business Address</li>
                <li>Telephone Number</li>
                <li>Email Address</li>
            </ul>

            <RegistrationForm />
          
        </section>
      </VisibilityTracker>

    )
}



function RegistrationForm() {

    const [provider, setProvider] = useState({})
    
    const handleSubmit  = (e) => {
        e.preventDefault();
        alert(`Form would submit the following: \n ${JSON.stringify(provider)}`)
    }

    const updateProvider = (e) => {
        let newProvider = {...provider}
        newProvider[e.target.name] = e.target.value;
        setProvider(newProvider);
    }

    return (
        <div className = "registration-form__panel">
            <form onSubmit={e => handleSubmit(e)}>
                <h2>Provider Registration</h2>

                <div>
                    <span style = {{"color": "red"}}>* All Fields are required</span>
                </div>

                <div className = "registration-form__input_panel">
                    <div>
                        <label for = "rfFirstName">First Name</label>
                        <input type = "text" name = "rfFirstName" value = {provider.rfFirstName} onChange = {e => updateProvider(e)} required/>
                    </div>

                    <div>
                        <label for = "rfLasttName">Last Name</label>
                        <input type = "text" name = "rfLastName" value = {provider.rfLastName} onChange = {e => updateProvider(e)} required/>
                    </div>
                    
                    <div>
                        <label for = "rfNPI">NPI</label>
                        <input type = "text" name = "rfNPI" value = {provider.rfNPI} onChange = {e => updateProvider(e)} required/>
                    </div>

                    <div>                        
                        <label for = "rfTelephone">Telephone</label>
                        <input type = "text" name = "rfTelephone" value = {provider.rfTelephone} onChange = {e => updateProvider(e)} required/>
                    </div>

                    <div>                        
                        <label for = "rfEmail">Email</label>
                        <input type = "email" name = "rfEmail" value = {provider.rfEmail} onChange = {e => updateProvider(e)} required/>
                    </div>

                    <div>{/* space */}</div>

                    <div>                        
                        <label for = "rfAddress">Address</label>
                        <input type = "text" name = "rfAddress" value = {provider.rfAddress} onChange = {e => updateProvider(e)} required/>
                    </div>

                    <div>                        
                        <label for = "rfZip">Zip</label>
                        <input type = "text" name = "rfZip" value = {provider.rfZip} onChange = {e => updateProvider(e)} required/>
                    </div>

                    <div>                        
                        <label for = "rfCity">City</label>
                        <input type = "text" name = "rfCity" value = {provider.rfCity} onChange = {e => updateProvider(e)} required/>
                    </div>

                    <div>                        
                        <label for = "rfState">State</label>
                        <input type = "text" name = "rfState" value = {provider.rfState} onChange = {e => updateProvider(e)} required/>
                    </div>
                </div>

                <div className = "rf_submission">
                    <button type = "submit">Register</button>
                </div>
            </form>
        </div>
    )

}

export default Question5;