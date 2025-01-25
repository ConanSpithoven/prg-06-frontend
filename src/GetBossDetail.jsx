import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';

function BossItem() {
    const [boss, setBoss] = useState(null);
    let { id } = useParams();
    
    useEffect(() => {
        async function fetchBoss() {
            try {
                const response = await fetch(`http://85.215.154.12:3000/bosses/${id}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        // en overige headers
                    }
                });
                const data = await response.json();
                setBoss(data);
            } catch (error) {
                console.error('Fout bij het ophalen van het product:', error);
            }
        }

        fetchBoss();
    }, []); // Lege array zorgt ervoor dat useEffect alleen bij de eerste render wordt uitgevoerd.

    return (
        <div>
            {boss ? (
                <div>
                    <h1>{boss.item.name}</h1>
                    <p>{boss.item.weaknesses}</p>
                    <p>{boss.item.strengths}</p>
                    <p>{boss.item.damagetype}</p>
                    <p>{boss.item.type}</p>
                    <p>{boss.item.special}</p>
                </div>
            ) : (
                <p>Boss laden...</p>
            )}
        </div>
    );
}

export default BossItem;