import { getHeroByPublisher } from "../../helpers/getHeroByPublisher"


const HeroList = ({publisher}) => {


    const heroes = getHeroByPublisher(publisher)

    return (
        <div>
            <ul>
                {
                    heroes.map(hero => (
                        <li key = {hero.id}>
                            {hero.superhero}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HeroList
