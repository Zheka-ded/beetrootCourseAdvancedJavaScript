import React, {Component} from 'react'
import FilmsList from './films'
import {films} from '../data'
import {orderBy} from 'lodash'
import FilmsForm from './forms/FilmsForm'
import TopNavigation from './TopNavigation'
import {generate as id} from 'shortid'
// !!!!!!!!!!!!!!!!!!!!!!!!!!!
import RegistrationForm from './forms/RegistrationForm'
import LoginForm from './forms/LoginForm'

const AppContext = React.createContext()
export {AppContext}

export default class App extends Component {
    state = {
        films: [],
        showAddForm: false,
        selectedFilm: {}
    }

    selectFilmForEdit = selectedFilm => {
        this.setState({
            selectedFilm,
            showAddForm: true,
        })
    }

    saveFilm = film => film._id ? this.updateFilm(film) : this.addFilm(film)

    addFilm = film => 
        this.setState(({films, showAddForm}) => ({
            films: this.sortFilms([...films, {...film, _id: id()}]),
            showAddForm: false,
        }))

    updateFilm = film => 
        this.setState(({films, showAddForm}) => ({
            films: this.sortFilms(
                films.map(item => item._id === film._id ? film : item )
            ), 
            showAddForm: false
        }))

    showAddForm = e => this.setState({
        showAddForm: true,
        selectedFilm: {}
    })

    hideAddForm = e => this.setState({
        showAddForm: false,
        selectedFilm: {}
    })

    componentDidMount() {
        this.setState({
            films: this.sortFilms(films),
        })
    }

    toggleFeatured = id => (
        this.setState( ({films}) => ({
            films: this.sortFilms(
                films.map(item => 
                    item._id === id ? {...item, featured: !item.featured} : item,
                )
            )
        }))
    )

    sortFilms = films => orderBy(films, ['featured', 'title'], ['desc', 'asc'])

    deleteFilm = film => 
        this.setState(({films, selectedFilm, showAddForm}) => ({
            films: films.filter(item => item._id !== film._id),
            selectedFilm: {},
            showAddForm: false,
        }))

    render(){
        const {films, showAddForm, selectedFilm} = this.state
        const numCol = showAddForm ? 'ten' : 'sixteen'

        return(
            <AppContext.Provider value={{
                toggleFeatured: this.toggleFeatured,
                editFilm: this.selectFilmForEdit,
                deleteFilm: this.deleteFilm,
            }}>

                <div className="ui container mt-3">
                    
                    <RegistrationForm />
                    <br/>
                    <hr/>
                    <br/>
                    <LoginForm />

                    <TopNavigation showAddForm={this.showAddForm} />

                    <div className="ui stackable grid">
                        {this.state.showAddForm && (
                            <div className="six wide column">
                                <FilmsForm hideAddForm={this.hideAddForm} 
                                            submit={this.saveFilm}
                                            film={selectedFilm} />
                            </div>
                        )}
                        
                        <div className={`${numCol} wide column`}>
                            <FilmsList films={films} />
                        </div>
                    </div>

                </div>
            </AppContext.Provider>
        )
    }
}