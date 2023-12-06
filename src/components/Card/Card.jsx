import React from 'react';
import { Link } from "react-router-dom";

export default function Card ({pokemon}) {
    return (
        <div className="card">
            <section>
                <div className="photo">
                    <img
                        src={`${pokemon.img} `}
                        
                        alt={`${pokemon.name} foto`}
                    />
                </div>
                <div className="info">
                    <div className="id">
                    N.° 0{pokemon.id}
                    </div>
                    <div className="name">
                        {pokemon.name}
                    </div>
                    <div className="types">
                        <div className="grass">Tierra</div>
                        <div className="poison">Veneno</div>
                    </div>
                </div>
                
            </section>
            
            
        </div>
            
    );
}