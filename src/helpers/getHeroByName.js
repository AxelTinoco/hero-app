import { heroes } from '../data/heroes'

export const getHeroByName = (name = '') => {
 name = name.toLowerCase()
console.log('me renderice')
    if(name === ''){
        return []
    }

return heroes.filter(hero => hero.superhero.toLowerCase().includes(name))


}


