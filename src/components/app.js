/**
 * Created by Milan Gallas on 30.8.2016.
 */
import React from 'react';
import Link from "react-router";
import Footer from './layout/Footer';
import Nav from './layout/Nav';

export default class App extends React.Component {

    /**
     * @deprecated = this.props.history.pushState(null, "/");  -   https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md#changes-to-thiscontext
     */
    navigate(){
        this.props.history.pushState(null, "/");
    }

    /**
     * const { location } = this.props;   ===   const location = this.props.location
     * Zavolá se komponenta header a předám ji parametr location
     * Pak samotné tělo hlavní stránky - layout + načtění daných podstránek
     * Nakonec zavolání komponenty pro vykreslení patičky
     * @returns {XML}
     */
    render() {
        const { location } = this.props;
        const containerStyle = {
            marginTop: "60px"
        }

        return (
            <div>
                <Nav location={location} />
                <div className="container" style={containerStyle} >
                    <div className="row">
                        <div className="col-md-12">
                            <h1>KillerNews.net</h1>
                            {this.props.children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}