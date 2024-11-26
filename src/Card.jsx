import mypic from './Portrait_Placeholder.png'

function Card(props){
return(
   <div className="card">

   <img src={mypic} alt="my image" />
   <h2>Name: {props.Name}</h2>
   <p>Age: {props.Age}</p>
   <p>Enrolled: {props.isEnrolled ? "Yes": "NO" } </p>
   </div>
);
}


Card.defaultProps={
    Name:"Guest",
    Age:0,
    isStudent:false
}

export default Card