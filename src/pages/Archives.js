/**
 * Created by Milan Gallas on 7.9.2016.
 */
/**
 * Created by Milan Gallas on 30.8.2016.
 */
import React from 'react';

export default class Archives extends React.Component {

    /**
     * Díky routě archives(/:article) si můžu z pole params vytáhnout přes klíč article, který článek jsem do url zadal
     * @example http://localhost:8080/#/archives/gali-article
     * @example this.props.params.article
     *
     * Dále můžeme pracovat s parametry v url. ty jsou v poli location a v objectu query
     * @example http://localhost:8080/#/archives/gali-article?date=today
     * @example this.props.location.query.date
     *
     * @returns {XML}
     */
    render() {
        const query = this.props.location.query;
        const params = this.props.params;
        const article = params.article;
        return (
            <div>
                <h2>Archives - archive = {article}</h2>
                <p>param is -> {query.date}</p>
            </div>
        );
    }
}