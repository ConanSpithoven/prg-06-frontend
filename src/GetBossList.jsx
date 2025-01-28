import React, {useState, useEffect} from 'react';
import Boss from './Boss.jsx';

function BossList({ bosslist, setBosslist }) {
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
                if (JSON.stringify(bosslist) === JSON.stringify(data.items)) return;
                setBosslist(data.items);
            } catch (error) {
                console.error('Fout bij het ophalen van het product:', error);
            }
        }

        fetchBoss();
    }, [bosslist]);

    return (
        <div>
            {bosslist ? (
                <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
                    <ul key="bosslist" className="flex flex-wrap">
                        {bosslist.map(item =>
                            <Boss key={item._id} boss={item} />
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