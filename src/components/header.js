/**
 * Created by Milan Gallas on 6.9.2016.
 */
import React from 'react';
import Title from './header/title'

export default class Header extends React.Component {


    /**
     * komponentě TodoList předám parametr:
     *  dodos = pole úkolů
     * komponentě CreateTodo předám parametr:
     *  createTask = metodu pro přídání úkolu. Takto může podřízená komponenta volat metody nadřazené komponnenty
     * @returns {XML}
     */
    render() {
        console.log(this.props);
        return (
            <header>
                <Title title={this.props.title}/>
                <input value={this.props.title} onChange={this.handleChange.bind(this)} ref="title"/>
            </header>
        );
    }

    /**
     * z akce se dá vytáhnou hodnota, která byla zadána ve formulářovém prvku.
     * Pokud by bylo inputů více, muselo by se použít pole refs. každý input by měl atribut ref.
     *
     * @param e
     */
    handleChange(e){
        const title = e.target.value;
        this.props.changeTitle(title);
    }
}