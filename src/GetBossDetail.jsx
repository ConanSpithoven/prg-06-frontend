import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router';
import DeleteButton from './DeleteBoss';
import PutBoss from './PutBoss';

function BossItem() {
    const [boss, setBoss] = useState(null);
    let { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        async function fetchBoss() {
            try {
                const response = await fetch(`http://85.215.154.12:3000/bosses/${id}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                const data = await response.json();
                setBoss(data);
            } catch (error) {
                console.error('Fout bij het ophalen van het product:', error);
                navigate("/404");
            }
        }

        fetchBoss(boss);
    }, []); // Lege array zorgt ervoor dat useEffect alleen bij de eerste render wordt uitgevoerd.

    async function deleteBoss(){
        try {
            const response = await fetch(`http://85.215.154.12:3000/bosses/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json'
                }
            });
            const data = await response;
            navigate("/");
        } catch (error) {
            console.error('Fout bij het verwijderen van het product:', error);
        }
    }


    return (
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal flex flex-wrap">
            {boss ? (
                <>
                <article className="w-full md:w-1/2 xl:w-1/3 p-3">
                <div class="bg-gray-900 border border-gray-800 rounded shadow p-2 flex-1 text-right md:text-center">
                    <section>
                            <div>
                                <h1 class="font-bold uppercase text-gray-400">{boss.item.name}</h1>
                            </div>
                            <div className="font-bold text-gray-600">
                                <p>Weaknesses: {boss.item.weaknesses}</p>
                                <p>Strenghts: {boss.item.strengths}</p>
                                <p>Damage Types: {boss.item.damageType}</p>
                                <p>Type: {boss.item.type}</p>
                                <p>Special notes: {boss.item.special}</p>
                            </div>
                        
                    </section>
                    <section>
                        <DeleteButton changeFunction={deleteBoss}/>
                    </section>
                </div>
                </article>
                <article className="w-full md:w-1/2 xl:w-1/3 p-3">
                    <PutBoss boss={boss.item}/>
                </article>
                </>
            ) : (
                <p>Boss laden...</p>
            )}
        </div>
    );
}

export default BossItem;