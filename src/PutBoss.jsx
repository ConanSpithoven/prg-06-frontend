import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router';

function PutBoss({boss}) {
    const [formData, setFormData] = useState({
        name: boss.name,
        weaknesses: boss.weaknesses,
        strengths: boss.strengths,
        damageType: boss.damageType,
        type: boss.type,
        special: boss.special
    });
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
            } catch (error) {
                console.error('Fout bij het ophalen van het product:', error);
            }
        }

        fetchBoss();
    }, []);

    async function putBoss(formData) {
        try {
            const requestOptions = {
                method: 'PUT',
                headers: {
                    'Accept': '/',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "name": formData.name,
                    "weaknesses": formData.weaknesses,
                    "strengths": formData.strengths,
                    "damageType": formData.damageType,
                    "type": formData.type,
                    "special": formData.special
                })
            };
            const response = await fetch(`http://85.215.154.12:3000/bosses/${id}`, requestOptions);
    
            const data = await response.json();
            navigate(`/`);
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
        }
    }

    // Generieke handler voor het bijwerken van de state
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        putBoss(formData);
    };
    return (
        <form onSubmit={handleSubmit} class="bg-gray-900 border border-gray-800 rounded shadow p-2 flex-1 text-right md:text-center">
            <div>
                <label htmlFor="name" class="font-bold text-gray-400">Name: </label>
                <input className='bg-gray-800 border border-gray-700 rounded text-gray-200'
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="weaknesses" class="text-gray-400">Weaknesses: </label>
                <input className='bg-gray-800 border border-gray-700 rounded text-gray-200'
                    type="weaknesses"
                    id="weaknesses"
                    name="weaknesses"
                    value={formData.weaknesses}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="strengths" class="text-gray-400">Strengths: </label>
                <input className='bg-gray-800 border border-gray-700 rounded text-gray-200'
                    type="strengths"
                    id="strengths"
                    name="strengths"
                    value={formData.strengths}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="damageType" class="text-gray-400">Damage types: </label>
                <input className='bg-gray-800 border border-gray-700 rounded text-gray-200'
                    type="damageType"
                    id="damageType"
                    name="damageType"
                    value={formData.damageType}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="type" class="text-gray-400">Type: </label>
                <input className='bg-gray-800 border border-gray-700 rounded text-gray-200'
                    type="type"
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="special" class="text-gray-400">Special: </label>
                <input className='bg-gray-800 border border-gray-700 rounded text-gray-200'
                    type="special"
                    id="special"
                    name="special"
                    value={formData.special}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="bg-green-900 border border-green-800 rounded shadow p-1 flex-1 text-right md:text-center">Update</button>
        </form>
    );
}

export default PutBoss;