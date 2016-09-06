/**
 * Created by Milan Gallas on 30.8.2016.
 */
import React from 'react';
import Header from './header';
import Footer from './footer';

export default class App extends React.Component {


    /**
     * komponentě TodoList předám parametr:
     *  dodos = pole úkolů
     * komponentě CreateTodo předám parametr:
     *  createTask = metodu pro přídání úkolu. Takto může podřízená komponenta volat metody nadřazené komponnenty
     * @returns {XML}
     */
    render() {

        /*var list = [
            <Header />,
            <Footer />
        ]*/

        return (
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
}