import axios from 'axios';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


export default function ViewRecruiterJobsCard(props1,props2,props3) {

    let data1 = [];
    let item = [];

    
    if(props1 != null && props2 ==='T'){

        for(const value of props1){
            if(value['r_ID'] === props2){

                data1.push(value);
            }
        }

        

        const closeThePost= (data)=>{
            axios.put(`http://localhost:53928/JobPosting/${data['jP_ID']}`,{
                
                "jP_ID" : data['jP_ID'],
                "jobTitle" : data['jobTitle'],
                "location" : data['location'] ,
                "jobDescription" : data['jobDescription'],
                "hiringOrganization" : data['hiringOrganization'],
                "primarySkill" : data['primarySkill'],
                "secondarySkill" : data['secondarySkill'],
                "requiredQualification":data['requiredQualification'],
                "category" : data['category'],
                "approved" : data['approved'],
                "closed" : true,
                "salary" : data['salary'],
                "experienceInYears" : data['experienceInYears'],
                "r_ID" : data['r_ID']
            })
            .then(res=>{
                console.log(res.data);
                let x = data['jP_ID'];
                let y = data['jobTitle'];
                let val1 = document.getElementById(x);
                let val2 = document.getElementById(y);
                val1.style.display = "none";
                val2.innerHTML = "Closed";
                val1.disabled = "true";
                val2.disabled = "true";
                // alert("Successfully Closed The Job Post");
                toast("Yes Job Post Successfully Closed");

            })
            .catch(err=>{console.log(err) ; alert("Sorry Internal Error");  
            });
        }

        
        const editThePost = (processData)=>{
            props3(processData,1);
        }

        const actionButton = (data)=>{
            if(data['closed'] === false){
                return <section>
                    <button  onClick={()=>{  editThePost(data) }}  id={data['jP_ID']}     className="btn btn-success" >Edit</button>
                    <button style={{marginLeft:"5px"}}onClick={()=>{ closeThePost(data)}}  id={data['jobTitle']} className="btn btn-danger">Close</button>
                    </section>
            }
            else{
                return <button disabled className="btn btn-secondary">Closed</button>
            }
        }

        for(const val of data1){
            if(val['closed'] === false){
            item.push(<section className="card" style={{width:"20rem" , height: "363px" , marginTop:"10px"}} >
                <section className="card-body bg-light mb-3">
                    <h5 className="card-title"> {val['jobTitle']} </h5><hr/>
                    <h5> {val['hiringOrganization']} </h5>
                    <p className="card-text"> {val['jobDescription']} </p>
                    <h6 className="card-subtitle mb-2 text-muted" >ExperienceRequired : {val['experienceInYears']} years</h6>
                    <h6 className="card-subtitle mb-2 text-muted" >Location : {val['location']}</h6>  
                    <h6 className="card-subtitle mb-2 text-muted" >PrimarySkill   : {val['primarySkill']}</h6>  
                    <h6 className="card-subtitle mb-2 text-muted" >SecondarySkill : {val['secondarySkill']}</h6> 
                    <h6 className="card-subtitle mb-2 text-muted" >Qualification : {val['requiredQualification']}</h6>  
                    <h6 className="card-subtitle mb-2 text-muted" >Salary : {val['salary']}</h6>
                    {actionButton(val)}
                </section>
            </section>);

            }
        }


    }
    return (
        <div>
            <div className="recruiterPosts">
                {item}
            </div>
            <ToastContainer/>
        </div>
    )
}
