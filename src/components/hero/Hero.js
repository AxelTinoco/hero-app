//import { useMemo } from 'react';
import { useMemo } from 'react';
import { useParams ,Navigate,useNavigate} from 'react-router-dom'
import { getHeroById } from '../../helpers/getHeroByID';



const Hero = () => {
  //hook de react router dom  para los parametrso dinamicos
  const {heroId} = useParams();
  //Uso del helper
  //const hero = getHeroById(heroId)
  const navigate =  useNavigate()
  const  hero = useMemo(() => getHeroById(heroId), [heroId]) // se usa el hook memo para memorizar el valor del heroe dado eso la dependecia de cambio parra volver a memorizar sera el heroId
  console.log(heroId)

  //desestructuramos para menjor manejo
  const {
    
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero

  //Retorno a raiz por no encontrar la ruta
  if(!hero){
    return <Navigate to = '/' />
  }

  //Ruta de las imagenes
  const imagePath = `/assets/${hero.id}.jpg`


  //funcion para el return
  
  const handleReturn = () => {
    navigate(-1) //navigate puede retriceder en la historia con un solo -1
  }

    return (
        <div className='row mt-5 container animate__animated animate__bounceInLeft'>
          <div className='col-4'>
            <img 
            src={imagePath} 
            alt={superhero} 
            className='img-thumbnail'
            />

          </div>

          <div className='col-8'>
            <h3>
              {superhero}
            </h3>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'><b>Alter ego:</b>{alter_ego}</li>
              <li className='list-group-item'><b>Publisher:</b>{publisher}</li>
              <li className='list-group-item'><b>First Appearance:</b>{first_appearance}</li>

            </ul>

            <h5>
              Characters
            </h5>
            <p>{characters}</p>

            <button
            className='btn btn-primary'
            onClick={handleReturn}
            >
              Regresar
            </button>

          </div>
          
        </div>
    )
}

export default Hero
