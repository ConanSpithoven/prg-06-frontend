import {useState} from 'react';

async function createBoss(formData, {changeBosslist}) {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': '/',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": formData.name,
                "weaknesses": formData.weaknesses,
                "strengths": formData.strengths,
                "damageType": formData.damagetype,
                "type": formData.type,
                "special": formData.special
            })
        };
        const response = await fetch('http://85.215.154.12:3000/bosses', requestOptions);

        const data = await response.json();
        changeBosslist(data.item);
    } catch (error) {
        console.error('Er is een fout opgetreden:', error);
    }
}

function FormComponent({changeBosslist}) {
    const [formData, setFormData] = useState({
        name: '',
        weaknesses: '',
        strengths: '',
        damagetype: '',
        type: '',
        special: ''
    });

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
        createBoss(formData, {changeBosslist});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="weaknesses">Weaknesses:</label>
                <input
                    type="weaknesses"
                    id="weaknesses"
                    name="weaknesses"
                    value={formData.weaknesses}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="strengths">Strengths:</label>
                <input
                    type="strengths"
                    id="strengths"
                    name="strengths"
                    value={formData.strengths}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="damagetype">Damage types:</label>
                <input
                    type="damagetype"
                    id="damagetype"
                    name="damagetype"
                    value={formData.damagetype}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="type">Type:</label>
                <input
                    type="type"
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="special">Special:</label>
                <input
                    type="special"
                    id="special"
                    name="special"
                    value={formData.special}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Send</button>
        </form>
    );
}

export default FormComponent;