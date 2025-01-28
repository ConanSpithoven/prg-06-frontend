import { useNavigate } from "react-router";

function Boss({boss}) {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/boss/${boss._id}`); 
    }
    return (
        <article className="w-full md:w-1/2 xl:w-1/3 p-3" onClick={handleClick} >
          <div class="bg-gray-900 border border-gray-800 rounded shadow p-2 flex-1 text-right md:text-center">
            <section>
              <h1 class="font-bold uppercase text-gray-400 text-2xl">{boss.name}</h1>
            </section>
            <section>
              <div className="font-bold text-2xl text-gray-600">
                  <div>Type: {boss.type}</div>
              </div>
            </section>
          </div>
        </article>
    );
}

export default Boss;