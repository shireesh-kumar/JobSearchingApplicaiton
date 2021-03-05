import axios from 'axios';
import React from 'react'
import "../ViewJobPosts.css";
export default function Jobpostcard(props1 , props2 , props3) {


        const item = [];
        let jsID = "J1";
        let data1 = [];
        let copyProps = []; 
        let flag = false;         // Here code to fetch the current user .


        const afterPostAction = (postAccess,postResult)=>{
            postAccess.innerHTML = "Applied";
            postAccess.disabled = "true";
            postAccess.className = "btn btn-success";
            console.log(postResult);
        }
        
        const RedirectCode = ()=>{
            alert("Redirect Code ");
        }
        const ApplyToJobCodeByJobSeeker = (cardData)=>{

            


            let apply = document.getElementById(cardData["jP_ID"]);
            // afterPostAction(apply,"red");
            axios.post("http://localhost:51055/api/jobapplications",{jsId:jsID , jpId:cardData['jP_ID']})
            .then(res=>{ 
                afterPostAction(apply,res);
            })
            .catch(err=>console.log(err));
        }



        if(props1 !== null &&  props3 != null)
        {
            // console.log(props3);

            for(const x of props3){
                if(x["jsId"] === jsID){
                    data1.push(x["jpId"]);
                }
            }
            // console.log(props1);
            
            for(const y of props1){
                for(const w of data1){
                    if(y["jP_ID"] === w){
                        flag = true;
                    }
                }
                if(flag === false){
                    copyProps.push(y);
                }
                flag = false;
            }

            // console.log(copyProps);
            

            for(const value of copyProps){
                item.push(
                <section className="card" style={{width:"20rem" , height: "363px" , marginTop:"10px"}} >
                    <section className="card-body bg-light mb-3">
                        <h5 className="card-title"> {value['jobTitle']} </h5><hr/>
                        <h5> {value['hiringOrganization']} </h5>
                        <p className="card-text"> {value['jobDescription']} </p>
                        <h6 className="card-subtitle mb-2 text-muted" >ExperienceRequired : {value['experienceInYears']} years</h6>
                        <h6 className="card-subtitle mb-2 text-muted" >Location : {value['location']}</h6>  
                        <h6 className="card-subtitle mb-2 text-muted" >PrimarySkill   : {value['primarySkill']}</h6>  
                        <h6 className="card-subtitle mb-2 text-muted" >SecondarySkill : {value['secondarySkill']}</h6> 
                        <h6 className="card-subtitle mb-2 text-muted" >Qualification : {value['requiredQualification']}</h6>  
                        <h6 className="card-subtitle mb-2 text-muted" >Salary : {value['salary']}</h6>
                        <button disabled="" id={value["jP_ID"]} className="btn btn-danger" onClick={()=>{if(props2 === 0){RedirectCode();} else ApplyToJobCodeByJobSeeker(value); }}>Apply</button>          
                    </section>
                </section>);
            }
        }
            // item.push(<div key={props[0]['jP_ID']}>{props[0]['jP_ID']}</div>);
    return (
        <div className="jobposts">
            {item}        
        </div>
    )
}
