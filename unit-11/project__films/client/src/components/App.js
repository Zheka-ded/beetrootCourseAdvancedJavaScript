import React, {Component} from 'react'
import FilmsList from './films'
import {films} from '../data'
import {orderBy} from 'lodash'
import FilmsForm from './forms/FilmsForm'
import TopNavigation from './TopNavigation'

const AppContext = React.createContext()
export {AppContext}

export default class App extends Component {
    state = {
        films: [],
        showAddForm: false,
    }

    showAddForm = e => this.setState({showAddForm: true})

    hideAddForm = e => this.setState({showAddForm: false})

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

    render(){
        const {films, showAddForm} = this.state
        const numCol = showAddForm ? 'ten' : 'sixteen'

        return(
            <AppContext.Provider value={ {toggleFeatured: this.toggleFeatured,} }>
                <div className="ui container mt-3">

                    <TopNavigation />

                    <FilmsForm/>
                    <hr/>
                    <br/>
                    <FilmsList films={films} />
                </div>
            </AppContext.Provider>
        )
    }
}