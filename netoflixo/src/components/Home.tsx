import React from 'react';

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
    <ul className="list-none flex flex-col">
      <div className='mb-1.5'>
        <p className='text-large bold px-5'>Reprendre avec le profil de Username</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div className='mb-1.5'>
        <p className='text-large bold px-5'>Top 10 des séries aujourd'hui : Pays</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div className='mb-1.5'>
        <p className='text-large bold px-5'>Les plus recherchés</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div className='mb-1.5'>
        <p className='text-large bold px-5'>Séries Incontournables</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div className='mb-1.5'>
        <p className='text-large bold px-5'>Ma liste</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div className='mb-1.5'>
        <p className='text-large bold px-5'>Dramas coréens intemporels</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div className='mb-1.5'>
        <p className='text-large bold px-5'>Nouveautés</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div className='mb-1.5'>
        <p className='text-large bold px-5'>Films d'époque Emotion</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div className='mb-1.5'>
        <p className='text-large bold px-5'>Revoir</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div className='mb-1.5'>
        <p className='text-large bold px-5'>Tendances actuelles</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div className='mb-1.5'>
        <p className='text-large bold px-5'>Séries</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div className='mb-1.5'>
        <p className='text-large bold px-5'>Séries internationales doublées en français</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div className='mb-1.5'>
        <p className='text-large bold px-5'>Séries sur des familles dysfonctionnelles</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
    </ul>
  );
};

export default Home;