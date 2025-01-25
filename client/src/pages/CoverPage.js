import { useEffect, useState } from "react";
export default function CoverPage() {
  const [something, setSomething] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/coverletter").then(response => {
      response.json().then(data =>{
        setSomething(data);
    });
    })
  })
  return (
    <div className="coverPage">
      <h1>Write A Cover Letter</h1>
      <form className="cover-form">
        <textarea type="text" placeholder={"Copy paste job description here"} rows={16}></textarea> 
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
