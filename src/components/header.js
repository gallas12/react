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
            </header>
        );
    }
}