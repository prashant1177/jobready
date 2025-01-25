import { useState } from "react";
export default function RegisterPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [projects, setProjects] = useState("");

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({
        name,
        password,
        email,
        mobile,
        skills,
        education,
        workExperience,
        projects,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status !== 200) {
      alert("Registeration failed");
    } else {
      alert("Registeration succes");
    }
  }
  return (
    <div className="registerPage">
      <h1>Sign Up</h1>
      <form className="register-form" onSubmit={register}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full Name"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="Mobile"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Email"
      />
      <textarea
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        placeholder="Skills"
        rows={8}
      ></textarea>
      <textarea
        value={education}
        onChange={(e) => setEducation(e.target.value)}
        placeholder="Education Details"
        rows={8}
      ></textarea>
      <textarea
        value={workExperience}
        onChange={(e) => setWorkExperience(e.target.value)}
        placeholder="Work Experience Details"
        rows={8}
      ></textarea>
      <textarea
        value={projects}
        onChange={(e) => setProjects(e.target.value)}
        placeholder="Projects Details"
        rows={8}
      ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
