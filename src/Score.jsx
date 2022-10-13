const Score = (props) => {
  return (
    <>  
        <li>{props.score.score} at {props.score.date}</li>
    </>
  );
}

export default Score;