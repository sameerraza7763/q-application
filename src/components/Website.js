import React from 'react'
import  './style.css';
import {auth, companydetailindb,uploadImage,swal} from "./../config/Firebase"
import {  useNavigate } from 'react-router-dom/dist';



































const Website = () => {
  const navigate=useNavigate()
  
  async function   companydetail(){
    const company=document.getElementById('company-name').value
    const since=document.getElementById('since').value
    const timing=document.getElementById('timing').value
    const address=document.getElementById('address').value
    const starttime=document.getElementById('starttime').value
    const endtime=document.getElementById('endtime').value
    const userid=auth.currentUser.uid;
    const image = document.getElementById("file").files[0]
    
      try {
          const imageUrl = await uploadImage(image)
         await companydetailindb(company,since,timing,address,starttime,endtime,userid,imageUrl)
         await swal("Congratulations!", "Company added Sussesfully!", "success");
         navigate('/Showcompany')
          
      } catch (e) {
          alert(e.message)
      }
     
    }



    function mycompany(){
      navigate('/mycompany')
    }

  
  

   
    
  return (
    


<>

    
    <div    >
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id='btn' >
Company
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
   
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Detail Of Company</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
 <div className='name-div' >      <h3 className='company-name' >Name of Doctor</h3>
       <input type="text"  placeholder='Name of Doctor'  className='input'  id='company-name' /></div>
       <div className='since' >
        <h3>Since</h3>
        <select name="" id="since"   >
          <option value="">2015</option>
          <option value="">2016</option>
          <option value="">2017</option>
          <option value="">2018</option>
          <option value="">2019</option>
          <option value="">2020</option>
          <option value="">2021</option>
          <option value="">2022</option>
   
        
        </select>

      </div>


      <div className='timing-div' >
        <h3 className='timing'>Timing</h3>
        <input type="text"  placeholder='Timing' id='timing'  />
      </div  >
  <div className='image' ><h3>Image</h3>
      <input type="file"  id='file' /></div>
      <div id='Address' >
        <h1>Address</h1><input type="text"  id='address'  placeholder='Address' /></div>
      <div id='Starttime' >
        <h3>Starttime</h3><input type="text"  id='starttime'  placeholder='Starttime' /></div>
      <div id='Endtime' >
        <h3>Endtime</h3><input type="text"  id='endtime'  placeholder='Endtime' /></div>
      </div>
     
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={companydetail}>Regestered</button>
      </div>
    </div>
  </div>
</div>





















<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id='btn' >
  For Patient
</button>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Detail of Patient</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className='name-div' >      <h3 className='company-name' >Name of Patient</h3>
       <input type="text"  placeholder='Name of Company'  className='input' /></div>
       <div className='since' >
        <h3>Doctor name</h3>
        <input type="text"  placeholder='Doctor name' />
      



      </div>


      <div className='timing-div' >
        <h3 className='timing' >Timing</h3>
        <input type="text"  placeholder='timing' />
      </div  >
  <div className='image' ><h3>Image</h3>
      <input type="file"  id='file' /></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"  >Regesterd</button>
      </div>
      </div>

    </div>
  </div>
</div>










<button type="button" class="btn btn-outline-dark" id='mycompanies'  onClick={mycompany} >My Companies</button>

</>
  )
}

export default Website