/**
 * Created by Milan Gallas on 30.8.2016.
 */
import React from 'react';
import Link from "react-router";

export default class App extends React.Component {

    /**
     * @deprecated = this.props.history.pushState(null, "/");  -   https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md#changes-to-thiscontext
     */
    navigate(){
        this.props.history.pushState(null, "/");
    }

    /**
     * V elementu link je atribut to. Hodnota se musí schodovat s routou, která je nastavená v souboru index.js
     * Link je komponenta react-router
     *
     * Dále nastavím zobrazení podřazených stránek před výpisem
     * @returns {XML}
     */
    render() {
        return (
            <div>
                <h1>KillerNews.net</h1>
                {this.props.children}
                <button onClick={this.navigate.bind(this)}>Featured</button>
            </div>
        );
    }
}