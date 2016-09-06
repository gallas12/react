/**
 * Created by Milan Gallas on 6.9.2016.
 */
import React from 'react';

export default class Title extends React.Component {


    /**
     * komponentě TodoList předám parametr:
     *  dodos = pole úkolů
     * komponentě CreateTodo předám parametr:
     *  createTask = metodu pro přídání úkolu. Takto může podřízená komponenta volat metody nadřazené komponnenty
     * @returns {XML}
     */
    render() {
        return (
            <h1>It works in header!!</h1>
        );
    }
}