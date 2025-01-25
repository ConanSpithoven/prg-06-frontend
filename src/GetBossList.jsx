import React, {useState, useEffect} from 'react';
import Boss from './Boss.jsx';

function BossList({bosslist, setBosslist}) {
    
    useEffect(() => {
        async function fetchBoss() {
            try {
                const response = await fetch('http://85.215.154.12:3000/bosses', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        // en overige headers
                    }
                });
                const data = await response.json();
                setBosslist(data);
            } catch (error) {
                console.error('Fout bij het ophalen van het product:', error);
            }
        }

        fetchBoss();
    }, [bosslist]);

    return (
        <div>
            {bosslist ? (
                <div>
                    <ul key="bosslist" className="grid grid-cols-4 gap-4 content-around">
                        {bosslist.items.map(item =>
                            <Boss key={item._id} boss={item}/>
                        )}
                    </ul>
                </div>
            ) : (
                <p>Collectie laden...</p>
            )}
        </div>
    );
}

export default BossList;