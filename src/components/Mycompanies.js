import React from 'react'
import { GetcompaniesFromDB, collection, db, doc, getDocs, auth } from "./../config/Firebase"
import { useEffect, useState } from 'react'
import './company.css'

function Mycompanies() {















    async function getCompaniesFromdb() {
        const querySnapShot = await getDocs(collection(db, "company"))
        const companies = []
        querySnapShot.forEach((doc) => {
            companies.push({ id: doc.id, ...doc.data() })

        });
        return companies
    }
    let [allCompanies, setAllcompanies] = useState([])
    useEffect(() => {
        const loadcompanies = async () => {
            const companies = await getCompaniesFromdb()
            console.log(companies)
            setAllcompanies(companies)

        }
        loadcompanies()
    }, [])

    console.log(allCompanies)


   


















    // async function getUsersFromdb() {
    //     const querySnapShot = await getDocs(collection(db, "users"))
    //     const users = []
    //     querySnapShot.forEach((doc) => {
    //         users.push({ id: doc.id, ...doc.data() })

    //     });
    //     return users
    // }
   
    const uid=localStorage.getItem("uid")
    console.log(uid)



   var displaycompany= allCompanies.map((item,index)=>{
        if (uid==item.userid){
        // document.getElementById('company-names').innerHTML+=item.company +<br />  
          return <div key={index} id='company-names' >{item.company}
          
          <button type="button" class="btn btn-warning" id='btn-warning' >Reset Tokens</button>
          <button type="button" class="btn btn-danger" id='btn-Danger' >Generate Token</button>
          
          
          </div>
        }
       })



    return (
        <>
        {/* <h1 className='heading-company' >MY Companies </h1> */}
        <div  >{displaycompany}</div>
        </>
    )
}

export default Mycompanies