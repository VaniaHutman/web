import React from 'react';
import "./styles/index.css";

function News() {
    return (
        <div className="news">
            <p className="chooseDirection">
                Новини
                    </p>
            <p className="newNews">
                Маршрут Черкаси-Київ відмінено через ремонт дороги.
                    </p>
            <p className="newNews">
                Маршрут Київ-Черкаси відмінено через ремонт дороги.
                    </p>
        </div>
    );
}

export default News;