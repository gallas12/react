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
     * const { history } = this.props; => const history = this.props.history;
     *
     * V elementu link je atribut to. Hodnota se musí schodovat s routou, která je nastavená v souboru index.js
     * Link je komponenta react-router
     *
     *  <Link to="settings"><button>settings</button></Link> - nefunguje
     *
     * Dále nastavím zobrazení podřazených stránek před výpisem
     * @returns {XML}
     */
    render() {
        const { history } = this.props;
        console.log(history.isActive("archives"));
        return (
            <div>
                <h1>KillerNews.net</h1>
                {this.props.children}
                <button onClick={this.navigate.bind(this)}>Featured</button>
            </div>
        );
    }
}