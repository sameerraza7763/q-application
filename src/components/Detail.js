import React, { useEffect, useState } from 'react'

import './detail.css'
import { GetcompaniesFromDB, collection, db, doc, getDocs } from "./../config/Firebase"
const Detail = () => {
  const detailId = localStorage.getItem('detaiId')
  console.log("detaill >>"+detailId)


  async function getCompaniesFromdb() {
    const querySnapShot = await getDocs(collection(db, "company"))
    const companies = []
    querySnapShot.forEach((doc) => {
      companies.push({ id: doc.id, ...doc.data() })

    });
    return companies
    console.log(companies   )
  }

  
  let [allCompanies, setAllcompanies] = useState([])
  let [drName, setDrName] = useState([])
  let [lastTime,setLasttime]=useState([])
  let [image,setImage]=useState("")
  let [address,setAddress]=useState([])
  useEffect(() => {
    const loadcompanies = async () => {
      const companies = await getCompaniesFromdb()
      console.log(companies)
      setAllcompanies(companies)
      companies.forEach((item)=>{
        if(item.id == detailId){
          console.log("item found")
          setImage(item.imageurl)
          setDrName(item.company)
          setLasttime(item.endtime)
          setAddress(item.address)
          
        } 
      })


    }
    loadcompanies()
  }, [])
  console.log(allCompanies)

  return (
    <>
    <div>

  
<div className="container">
    <section className="member-details">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-4">
                    <div className="img-container">
                        <img src={image} alt="team member" className="img-full"/>
                    </div>
                </div>
                <div className="col-lg-9 col-md-8">
                    <div className="member_designation">
                        <h2></h2>
                        <span id='doctorName'>  DR: {drName}</span>
                    </div>
                    <div className="member_desc">
                        <p>
                            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                        </p>
                        <ul className="styled_list">
                            <li className=""><i className="fa fa-chevron-circle-right" aria-hidden="true"></i><h1>  StartTime:  {lastTime}</h1></li>
                            <li className=""><i className="fa fa-chevron-circle-right" aria-hidden="true"></i><h1>  TO</h1></li>
                            <li className=""><i className="fa fa-chevron-circle-right" aria-hidden="true"></i>  <h1>EndTime :{lastTime}</h1></li>
                            <li className=""><i className="fa fa-chevron-circle-right" aria-hidden="true"></i> Morbi fermentum felis nec gravida</li>
                        </ul>
                    </div>
                    <div>
                    












                 
<button type="button" class="btn btn-secondry" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  >
Get Token Here
</button>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Set Your Token Here</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body"  id='modal-body' >
      <input type="text" aria-label="First name" class="form-control"/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Regesterd</button>
      </div>
    </div>
  </div>
</div>





























                    </div>
                    <div className="bg-image " >
                        <div className="member_contact">
                            <div className="row">
                                <div className="col-lg-4  mb-3 mb-lg-0">
                                    <div className="media-box">
                                        <div className="media-icon">
                                            <i className="fa fa-tablet" aria-hidden="true"></i>
                                        </div>
                                        <div className="media-content">
                                            <h5>Phone</h5>
                                            <p><a href="callto">(+1) 251-235-3256</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4  mb-3 mb-lg-0">
                                    <div className="media-box">
                                        <div className="media-icon">
                                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="media-content">
                                            <h5>Email</h5>
                                            <p><a href="mailto">info@example.com</a></p>
                                        </div>
                                    </div>
                                </div>
                          
                                <div className="col-lg-4">
                                    <div className="social-icons">
                                        <button className="btn btn-social outlined"><i className="fa fa-facebook-f"></i></button>
                                        <button className="btn btn-social outlined"><i className="fa fa-twitter"></i></button>
                                        <button className="btn btn-social outlined"><i className="fa fa-linkedin"></i></button>
                                        <button className="btn btn-social outlined"><i className="fa fa-pinterest-p"></i></button>
                                    </div>
                            
                                </div>
                            </div>
























                            
                        </div>
                    </div>

                    <div className="member_desc">
                        <h4>Persional Information</h4>
                        <h4>Addres</h4>
                        <p className='address-show' >
                          {address}
                        </p>

                        <h4>DEGREE</h4>
                        <div className="progress-holder">
                            <div className="barWrapper">
                                <span className="progressText"><b>MBBS</b></span>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width : '85%'}}></div>
                                    <span className="popOver" data-toggle="tooltip" data-placement="top" title="" data-original-title="80%" aria-describedby="tooltip443011"> </span>
                                </div>
                            </div>
                            <div className="barWrapper">
                                <span className="progressText"><b>DDA</b></span>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width : '95%'}}></div>
                                    <span className="popOver" data-toggle="tooltip" data-placement="top" title="" data-original-title="95%" aria-describedby="tooltip656043"> </span>
                                </div>
                            </div>
                            <div className="barWrapper">
                                <span className="progressText"><b>MD</b></span>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width : '85%'}}></div>
                                    <span className="popOver" data-toggle="tooltip" data-placement="top" title="" data-original-title="85%" aria-describedby="tooltip880607"> </span>
                                </div>
                            </div>
                            <div className="barWrapper">
                                <span className="progressText"><b>MHL</b></span>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width : '75%'}}></div>
                                    <span className="popOver" data-toggle="tooltip" data-placement="top" title="" data-original-title="75%" aria-describedby="tooltip616792"> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-lg-6 member_desc">
                            <h4>Nec nisl iaculis pulv</h4>
                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                            </p>
                        </div>
                        <div className="col-lg-6 member_desc">
                            <h4>Aesent nec nisl</h4>
                            <p>
                                Cepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</div>



{/* detailPageCode */}



    </div>
    </>
  )
}

export default Detail