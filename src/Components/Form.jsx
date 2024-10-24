import React, { useEffect, useState } from "react";
import { imgDB, db } from "./Firebase";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs } from "firebase/firestore";

export default function StoreImage() {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [mobile,setMobile] = useState('')
    const [gender,setGender] = useState('')
    const [father,setFather] = useState('')
    const [mother,setMother] = useState('')
    const [nationality,setNationality] = useState('')
    const [country,setCountry] = useState('')
    const [state,setState] = useState('')
    const [city,setCity] = useState('')
    const [district,setDistrict] = useState('')
    const [pinCode,setPinCode] = useState('')
    const [img,setImg] = useState('')
    const [college,setCollege] = useState('')
    const [course,setCourse] = useState('')
    const [duration,setDuration] = useState('')
    const [cgpa,setCgpa] = useState('')
    const [data,setData] = useState([])


    const handleUpload = (e) =>{
        console.log(e.target.files[0])
        const imgs = ref(imgDB,`Imgs/${v4()}`)
        uploadBytes(imgs,e.target.files[0]).then(data=>{
            console.log(data,"imgs")
            getDownloadURL(data.ref).then(val=>{
                setImg(val)
            })
        })
    }

    const handleClick = async () =>{
            const valRef = collection(db,'TestApplicant')
            await addDoc(valRef,{Name : name, Email : email, Phone : mobile, Gender : gender, Father : father, Mother : mother, Nationality : nationality, Country : country, State : state, City : city, District : district, pinCode : pinCode, College : college, Course : course, Duration : duration, Cgpa : cgpa, imgUrl:img})
            alert("Form successfully Submitted and Your Id is :  {TestApplicant.id}")
    }

    const getData = async () =>{
        const valRef = collection(db,'TestApplicant')
        const dataDb = await getDocs(valRef)
        const allData = dataDb.docs.map(val=>({...val.data(),id:val.id}))
        setData(allData)
        console.log(dataDb)
    }

    useEffect(()=>{
        getData()
})
    console.log(data,"datadata")

  return (
    <div className='form' style={{marginTop: "4rem"}}>
        <h1>Apply for the Scholars Creators Scholarship Test</h1>
      <div className="personal">
        <h2>Personal Details</h2>
        <br />
        <div className="application">
          <div className="apply">
            <label>Enter Your Full Name *</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} /><br />
          </div>
              <div className="apply">
                <label>Enter Your Email-id *</label>
                <input type="email" required onChange={e => setEmail (e.target.value)} />
              </div>
              <div className="apply">
                <label>Enter Your Phone No *</label>
                <input type="number" required onChange={e => setMobile (e.target.value)} />
              </div>
              <div className="apply">
                <label>Gender *</label>
                <input type="text" required onChange={e => setGender (e.target.value)} />
              </div>
              <div className="apply">
                <label>Father's Name *</label>
                <input type="text" required onChange={e => setFather (e.target.value)} />
              </div>
              <div className="apply">
                <label>Mother's Name *</label>
                <input type="text" required onChange={e => setMother (e.target.value)} />
              </div>
              <div className="apply">
                <label>Nationality *</label>
                <input type="text" required onChange={e => setNationality (e.target.value)} />
              </div>

              <h2>Address</h2>
              <div className="apply">
                <label>Country *</label>
                <input type="text" required onChange={e => setCountry (e.target.value)} />
              </div>
              <div className="apply">
                <label>State *</label>
                <input type="text" required onChange={e => setState (e.target.value)} />
              </div>
              <div className="apply">
                <label>Village/City *</label>
                <input type="text" required onChange={e => setCity (e.target.value)} />
              </div>
              <div className="apply">
                <label>District *</label>
                <input type="text" required onChange={e => setDistrict (e.target.value)} />
              </div>
              <div className="apply">
                <label>Pin Code *</label>
                <input type="number" required onChange={e => setPinCode (e.target.value)} />
              </div>

              <h2>Qualification</h2>

              <div className="apply">
                <label>College Name *</label>
                <input type="text" required onChange={e => setCollege (e.target.value)} />
              </div>
              <div className="apply">
                <label>Course Name *</label>
                <input type="text" required onChange={e => setCourse (e.target.value)} />
              </div>
              <div className="apply">
                <label>Course Duration *</label>
                <input type="number" required onChange={e => setDuration (e.target.value)} />
              </div>
              <div className="apply">
                <label>Last Year Percentage/CGPA *</label>
                <input type="number" required onChange={e => setCgpa (e.target.value)} />
              </div>
              <div className="apply">
                <label>Upload Your Photo</label>
                <input type="file" placeholder="Choose Image" onChange={(e)=>handleUpload(e)} /><br/><br/>
              </div>
              <button className="button" onClick={handleClick}>Save and Next</button>
        </div>
      </div>
    </div>
  )
}
