import React, { useEffect, useState } from 'react'

export default function Skills({ skills }) {
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoggedIn(true)
        }, 1000)
    }, [])
    return (
        <div>
            <h2>List of Skills</h2>
            <ul>
                {skills.map(skill => (
                    <li key={skill.id}>
                        {skill.name}
                    </li>
                ))}
            </ul>

            {loggedIn
                ? (<button>start working</button>)
                : (<button>login</button>)
            }
        </div>
    )
}
