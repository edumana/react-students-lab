import Score from "./Score";

const Student = (props) => {
  return (
    <>
      <div className="student">
        <h1>{props.student.name}</h1>
        <h2>{props.student.bio}</h2>
        <ul>
          {props.student.scores.map(score =>          
            <Score score={score}></Score>
          )}
        </ul>
      </div>  
    </>
  );
}

export default Student;