import React from 'react';
import "../styles/Home.css";

const Home: React.FC = () => {

  const videosData = {
    video1: { name: 'Vidéo 1', key: 1 },
    video2: { name: 'Vidéo 2', key: 2 },
    video3: { name: 'Vidéo 3', key: 3 },
    video4: { name: 'Vidéo 4', key: 4 },
    video5: { name: 'Vidéo 5', key: 5 },
    video6: { name: 'Vidéo 6', key: 6 },
    video7: { name: 'Vidéo 7', key: 7 },
  };

  return (
    <ul className='menu-home'>
      <div className='profil-user-started'>
        <p>Reprendre avec le profil de Username</p>
        <div>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key}>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div>
        <p>Parce que vous avez regardé Titre</p>
        <div>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key}>
              {value.name} ({key})
            </li>
          ))}
        </div>  
      </div>
      <div>
        <p>Top 10 des séries aujourd'hui : Pays</p>
        <div>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key}>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div>
        <p>Les plus recherchés</p>
        <div>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key}>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div>
        <p>Séries Incontournables</p>
        <div>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key}>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div>
        <p>Dramas coréens</p>
        <div>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key}>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div>
        <p>Ma liste</p>
        <div>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key}>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div>
        <p>Dramas coréens intemporels</p>
        <div>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key}>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div>       
        <p>Notre sélection pour Username</p>
        <div>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key}>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div>
        <p>Nouveautés</p>
        <div>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key}>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div>
        <p>Séries inspirées de mangas</p>
        <div>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key}>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div>
        <p>Films d'époque Emotion</p>
        <div>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key}>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div>
        <p>Séries surnaturelles à regarder sans modération</p>
        <div>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key}>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div>
        <p>Revoir</p>
        <div>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key}>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div>
        <p>Tendances actuelles</p>
        <div>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key}>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div>
        <p>Séries SF et fantastique</p>
        <div>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key}>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div>
        <p>Séries</p>
        <div>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key}>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div>
        <p>Parce que vous avez regardé Titre</p>
        <div>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key}>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div>
        <p>Séries internationales doublées en français</p>
        <div>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key}>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div>
        <p>Séries sur des familles dysfonctionnelles</p>
        <div>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key}>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
    </ul>
  );
};

export default Home;