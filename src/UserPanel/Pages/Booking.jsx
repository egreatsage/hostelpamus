import React, { useState } from 'react';
import {Alert} from 'react-bootstrap';
import Operations from '../Components/Operations'
const Booking = () => {
  const[Firstname, setFirstname] = useState('')
  const[Lastname, setLastname] = useState('')
  const[Age, setAge] = useState('')
  const[Home, setHome] = useState('')
  const[Gender, setGender] = useState('')
  const[NationalID, setNationalID] = useState('')
  const[MaritalStatus, setMaritalStatus] = useState('')
  const[GPName, setGPName] = useState('')
  const[Pnumber, setPnumber] = useState('')
  const[GPContact, setGPContact] = useState('')
  const[EContact, setEContact] = useState('')
  const[ERelation, setERelation] = useState('')
  const[EFullName, setEFullName] = useState('')
  const[Institution, setInstitution] = useState('')
  const[Year, setYear] = useState('')
  const[DEntry, setDEntry] = useState('')

  const [message, setmessage] = useState({error: false, msg: ''});
  const handleSubmit = async (event) =>{
    event.preventDefault();
    setmessage("Details Successfully Submitted");

    if(Firstname ==='' || Lastname ===''){
        setmessage({error: true, msg: 'All Fields Are Required'});
    }

    const newdetails = {
      Firstname, Lastname,  Age, Home,Gender,NationalID,Pnumber,MaritalStatus,
      GPName,GPContact,ERelation,EFullName,EContact,Institution,Year,DEntry   
    }
    console.log(newdetails);
    try{
      await Operations.addDetails(newdetails)
      setmessage({error: false,msg: 'Details Successfully Sebmitted'})
    } catch (err){
      setmessage({error: true, msg: err.message});
    }
  }

  return ( 
    <div>
    {message?.msg && (<Alert variant = {message?.error ? 'danger':'success'} dismissible onclose={ () => setmessage("")}>{message?.msg}</Alert> )}

    <body className="bg-slate-200 flex bg-local pt-9">
      
    <div className="bg-slate-200 mx-auto max-w-6xl py-20 px-12 lg:px-24 shadow-xl mb-24">
    <h1 className="text-[orange] text-1xl font-extrabold  pl-4 items-center md:text-3xl mb-4">Fill the Informartion Required Below to Book A Room and you will be
    send a Response</h1>
    <p><i className='text-[red] '>all fields are required*</i></p>
      <form onSubmit={handleSubmit} >
        <div className="bg-white shadow-md rounded-md outline-offset-0 px-8 pt-6 pb-8 mb-4 flex flex-col">
        <h1 className="text-black text-1xl font-extrabold  pl-4 items-center md:text-3xl mb-4">Personal Information</h1>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                First Name
              </label>
              <input className="w-full bg-gray-200 text-black border
               border-gray-200 rounded py-3 px-4 mb-3"
                 type="text" placeholder="First Name
                 "value={Firstname} onChange={(event) => { setFirstname(event.target.value); }}  required/>
              <div>
               
              </div>
             </div>
            <div className="md:w-1/2 px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                Last Name
              </label>
              <input className="w-full bg-gray-200 text-black border
               border-gray-200 rounded py-3 px-4 mb-3" 
                type="text" placeholder='Last Name'
                value={Lastname} onChange={(event) => { setLastname(event.target.value); }}  required/>
            </div>
          </div>
          <div className="-mx-3 md:flex mb-2">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="location">
                Gender
              </label>
              <div>
                <select className="w-full bg-gray-200 border
                 border-gray-200 text-black text-xs py-3 px-4
                  pr-8 mb-3 rounded" 
                  id="text"
                  value={Gender} onChange={(event) => { setGender(event.target.value); }}  required>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            
            <div className="md:w-1/2 px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="job-type">
                Age
              </label>
              <input className="w-full bg-gray-200 border
               border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" 
                id="Age"
               type="number"
                placeholder="Age"
                value={Age} onChange={(event) => { setAge(event.target.value); }}  required/>
            </div>
          </div>
          <div className="-mx-3 md:flex mb-2">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="uppercase tracking-wide
               text-black text-xs font-bold mb-2" 
               for="text">
                Marital Status
              </label>
              <div>
                <select className="w-full bg-gray-200 border
                 border-gray-200 text-black text-xs py-3 
                 px-4 pr-8 mb-3 rounded" 
                 required id="text"
                 value={MaritalStatus} onChange={(event) => { setMaritalStatus(event.target.value); }} >
                  <option>Married</option>
                  <option>Single</option>
                </select>
              </div>
            </div>
            
            <div className="md:w-1/2 px-3">
              <label className="uppercase tracking-wide
               text-black text-xs font-bold mb-2" for="job-type">
                National Id
              </label>
              <input className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" 
              id="Age"
               type="text"
                placeholder="national Id"
                value={NationalID} onChange={(event) => { setNationalID(event.target.value); }}  required/>
            </div>
          </div>
           
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
              <label className="uppercase tracking-wide
               text-black text-xs font-bold mb-2" 
            >
                    Phone Number
              </label>
              <input className="w-full bg-gray-200 text-black border
               border-gray-200 rounded py-3 px-4 mb-3" 
               id="application-link"
                type="text" placeholder="07/011/2547 ****"
                value={Pnumber} onChange={(event) => { setPnumber(event.target.value); }}  required/>
            </div>
          </div>
            Email
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
              </label>
              <input className="w-full bg-gray-200 text-black border
               border-gray-200 rounded py-3 px-4 mb-3"
                id="application-link" 
                type="text" placeholder="exanple@gmail.com"/>
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
               Home County
              </label>
              <input className="w-full bg-gray-200
               text-black border border-gray-200 rounded 
               py-3 px-4 mb-3" id="application-link"
                type="location" placeholder="e.g Nakuru County"
                value={Home} onChange={(event) => { setHome(event.target.value); }}  required/>
            </div>
          </div>

          <h1 className="text-black text-1xl font-extrabold  pl-4 items-center md:text-3xl mb-4">Parent /Guardian Details</h1>
          
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
              Full Name
              </label>
              <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3
               px-4 mb-3" 
                type="text" placeholder="Full Name"
                value={GPName} onChange={(event) => { setGPName(event.target.value); }}  required/>
            </div>
          </div>
         
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
              Contact
              </label>
              <input className="w-full bg-gray-200 text-black border
               border-gray-200 rounded py-3 px-4 mb-3" 
                type="text" placeholder="07/011/2547 ***"
                value={GPContact} onChange={(event) => { setGPContact(event.target.value); }}  required/>
            </div>
          </div>
          <h1 className="text-black text-1xl font-extrabold  pl-4 items-center md:text-3xl mb-4">Emergency Contact Information</h1>

           
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
              Full Name
              </label>
              <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
            type="text" placeholder="Name"
            value={EFullName} onChange={(event) => { setEFullName(event.target.value); }}  required/>
            </div>
          </div>

         
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
              Contact
              </label>
              <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 
              px-4 mb-3" id="application-link" 
              type="text" placeholder='07/011/2547 ***'
              value={EContact} onChange={(event) => { setEContact(event.target.value); }}  required/>
            </div>
          </div>
            
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
              Relation
              </label>
              <input className="w-full bg-gray-200 text-black border border-gray-200 rounded 
              py-3 px-4 mb-3" id="application-link" type="text"
              placeholder="sister,brother etc"
              value={ERelation} onChange={(event) => { setERelation(event.target.value); }}  required/>
            </div>
          </div>
          <h1 className="text-black text-1xl font-extrabold  pl-4 items-center md:text-3xl mb-4">Academic Information</h1>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
              Current Institution Of Study
              </label>
              <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3
               px-4 mb-3" id="application-link"
                type="text" placeholder="e.g KMTC,MKU"
                value={Institution} onChange={(event) => { setInstitution(event.target.value); }}  required/>
            </div>
          </div>
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                Current Year Of Study
              </label>
              <div>
                <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" 
                      value={Year} onChange={(event) => { setYear(event.target.value); }}  required
                      id="year">
                  <option>Year 1</option>
                  <option>Year 2</option>
                  <option>Year 3</option>
                  <option>Year 4</option>
                  <option>Year 5</option>

                </select>
              </div>
            </div>
           
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
              Expected Date Of Entry
              </label>
              <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
               id="application-link" type="date" placeholder="e.g march 21"
               value={DEntry} onChange={(event) => { setDEntry(event.target.value); }}  required/>
            </div>
          </div>

          <h1 className='text-extrabold'>Verification Details</h1>
          <div className="flex justify-center">
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
    <label for="formFile" className="form-label inline-block mb-2 mute-text text-gray-700">Upload a copy of your School Id/Registration form</label>
    <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" type="file" id="formFile" />
  </div>
</div>
</div>
          <div className="-mx-3 md:flex mt-2">
            <div className="md:w-full px-3">
              <button className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 
              border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full"
              type='submit'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </body>
  </div>
   
  );
}

export default Booking;