import { useNavigate } from "react-router";

function Boss({boss}) {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/boss/${boss._id}`); 
    }
    return (
        <article className="bg-slate-500 text-lg text-white text-center" onClick={handleClick} >
          <section>
            <h3>{boss.name}</h3>
          </section>
          <section>
            <div>
                <div>Type: {boss.type}</div>
            </div>
          </section>
        </article>
    );
}

export default Boss;