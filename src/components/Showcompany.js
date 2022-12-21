import React, { useEffect, useState } from 'react'
import { GetcompaniesFromDB, collection, db, doc, getDocs } from "./../config/Firebase"
import { Navigate, useNavigate } from 'react-router-dom'
import './company.css'
















function Showcompany() {
  const navigate=useNavigate()

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
  const detailPage = (item)=>{
    console.log(item)
    localStorage.setItem("detaiId",item)
    navigate('/detail')
    }


  const companiesDisplay = allCompanies.map((item,index)=>{
    return <h1 key={index}   id={'ul'}  onClick={()=>detailPage(item.id) } >  DR: {item.company}</h1>
  })




  return <div>
{companiesDisplay}
</div>

}
export default Showcompany