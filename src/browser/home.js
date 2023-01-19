import { Navigate, useNavigate } from "react-router-dom";




function Home()
{
    const navigator=useNavigate();

    function xtc()
    {
        navigator('/about');
    }

return (
    <>
    <div>
        Hey
    </div>
    <button onClick={xtc}>About</button>
    
    
    </>
)
}

export default Home;