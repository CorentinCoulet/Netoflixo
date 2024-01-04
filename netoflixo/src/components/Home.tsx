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
    <ul className="list-none flex flex-col mt-5">
      <div className='mb-1.5'>
        <p className='text-xl bold px-5 mb-3'>Top 10 des séries aujourd'hui : France</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div className='mb-1.5'>
        <p className='text-xl bold px-5 mb-3'>Les plus recherchés</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div className='mb-1.5'>
        <p className='text-xl bold px-5 mb-3'>Séries Incontournables</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div className='mb-1.5'>
        <p className='text-xl bold px-5 mb-3'>Ma liste</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div className='mb-1.5'>
        <p className='text-xl bold px-5 mb-3'>Dramas coréens intemporels</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div className='mb-1.5'>
        <p className='text-xl bold px-5 mb-3'>Nouveautés</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div className='mb-1.5'>
        <p className='text-xl bold px-5 mb-3'>Films d'époque Emotion</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div className='mb-1.5'>
        <p className='text-xl bold px-5 mb-3'>Revoir</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div className='mb-1.5'>
        <p className='text-xl bold px-5 mb-3'>Tendances actuelles</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div className='mb-1.5'>
        <p className='text-xl bold px-5 mb-3'>Séries</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div className='mb-1.5'>
        <p className='text-xl bold px-5 mb-3'>Séries internationales doublées en français</p>
        <div className='flex flex-row'>
          {Object.entries(videosData).map(([key, value]) => (
            <li key={key} className='px-5 py-2.5'>
              {value.name} ({key})
            </li>
          ))}
        </div>
      </div>
      <div className='mb-1.5'>
        <p className='text-xl bold px-5 mb-3'>Séries sur des familles dysfonctionnelles</p>
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