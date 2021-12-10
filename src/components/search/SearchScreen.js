import { useLocation, useNavigate } from "react-router-dom"
import { getHeroByName } from "../../helpers/getHeroByName"
import { useMemo } from "react"
import { useForm } from "../../hooks/useForm"
import querySting from "query-string"
import HeroCard from "../hero/HeroCard"

const SearchScreen = () => {
    
    const navigate = useNavigate()
    const location = useLocation()
    
    const { q = '' } = querySting.parse(location.search)

    const [values,handleInputChange] = useForm({
        searchText: q
    })  

    const {searchText} = values

    const handleSearch = (e) => {
        e.preventDefault()
        navigate(`?q=${searchText}`)
        
    }
   
   const heroesFilter = useMemo(() => getHeroByName(q), [q])
    
    
   
    return (
        <div className="container mt-4 overflow-hidden" style={{height: '90vh'}}>
            <h2>Busquedas</h2>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />

                    <form 
                        className="d-flex flex-column"
                        onSubmit={handleSearch}
                    >
                        <input
                            type="text"
                            placeholder="Buscar heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary my-3 btn-flex d-flex">
                            Buscar...
                        </button>
                    </form>
                </div>

                <div className="col-7 overflow-auto" style={{height: '90vh'}} >


                    {
                        (q === '')
                        ? <div className="alert alert-info animate__animated  animate__fadeIn">Busque algun heroe</div>
                        : (heroesFilter.length === 0)
                            && <div className="alert alert-danger animate__animated  animate__fadeIn">No hay resultados : {q}</div>
                    }



                  {
                      heroesFilter.map(
                          hero => (
                              <HeroCard
                                className='mt-3 mb-3' 
                                key={hero.id}
                                {...hero}
                              />
                          )
                      )
                  }
                </div>

            </div>
        </div>
    )
}

export default SearchScreen
