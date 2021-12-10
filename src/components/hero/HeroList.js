import { useMemo } from "react"
import { getHeroByPublisher } from "../../helpers/getHeroByPublisher"
import HeroCard from "./HeroCard"


const HeroList = ({publisher}) => {

    
    //const heroes = getHeroByPublisher(publisher)
    //* Se vuelve a  utlizar el hook memo para ejercicio , ver info principal en hero.js

    const heroes = useMemo(() => getHeroByPublisher(publisher) , [publisher])

    return (
        <div className = 'row row-cols-1 row-cols-md-3 g-3 animate__animated animate__slideInUp animate__slow'> 
        
                {
                    heroes.map(hero => (
                      <HeroCard 
                      key = {hero.id}
                      {...hero}
                      />
                    
                    ))
                }
            
        </div>
    )
}

export default HeroList
