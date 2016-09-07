import React from "react";

import Article from "../components/Article";

export default class Archives extends React.Component {
    render() {
        const { query } = this.props.location;
        const { params } = this.props;
        const { article } = params;
        const { date, filter } = query;

        /**
         * Toto je první možnost jak nadefinovat Kolekci článků. Využívá se třída Article ve funkci map
         * @type {Array}
         */
        /*const Articles = [
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Still More",
            "Fake Article",
            "Partial Article",
            "American Article",
            "Mexican Article",
        ].map((title, i) => <Article key={i} title={title}/> );*/

        /**
         * "Druhá možnost jak navrhnout kolekci kompoment, Ta prvnií možnost je samozřejmě univerzálnější, než tato
         * Ono se to stejně do tohoto formátu přeloží
         * @type {XML[]}
         */
        const Articles = [
            <Article key={1} title={"Some Article"} />,
            <Article key={2} title={"Some Other Article"} />,
            <Article key={3} title={"Yet Another Article"} />,
            <Article key={4} title={"Still More"} />,
            <Article key={5} title={"Fake Article"} />,
            <Article key={6} title={"Partial Article"} />,
            <Article key={7} title={"American Article"} />,
            <Article key={8} title={"Mexican Article"} />,
        ];

        return (
            <div>
                <h1>Archives</h1>
                article: {article}, date: {date}, filter: {filter}
                <div className="row">{Articles}</div>
            </div>
        );
    }
}