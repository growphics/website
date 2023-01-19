import { useNavigate } from "react-router-dom";




function About()
{

    const navigator=useNavigate();

    function xtc()
    {
        navigator('/home');
    }
return (
    <>
    <div>
        About
    </div>
    
    <button onClick={xtc}>Home</button>

    </>
)
}

export default About;