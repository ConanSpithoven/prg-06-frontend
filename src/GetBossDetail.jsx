import React, {useState, useEffect} from 'react';

function BossItem() {
    const [boss, setBoss] = useState(null);

    useEffect(() => {
        async function fetchBoss() {
            try {
                const response = await fetch('http://85.215.154.12:3000/bosses/6726cdc5169564d9a23269fd', {
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
                </div>
            ) : (
                <p>Boss laden...</p>
            )}
        </div>
    );
}

export default BossItem;