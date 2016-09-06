/**
 * Created by Milan Gallas on 30.8.2016.
 */
import React from 'react';
import Header from './header';
import Footer from './footer';


const title2 = "Wellcome Galileo galielei in state";
export default class App extends React.Component {

    /**
     * STATE
     * Do pole state se ukládají všechny instanční promměné. (slouží pro interní proměnné)
     * Pracuje nad virtual doom, proto je velmi rychlé a
     * velmi rychle reaguje na změny a atuomaticky se překresluje - cool.
     * Navíc se změní pouze samotná data, nic navíc se nepřeresluje !!!
     *
     * PROPS
     * to co je uloženo v props jsou injectované hodnoty z jiné komponetny (nadřezené).
     * například tady předáváat title a title2. Tyto dvě hodnoty budou v komponentě hedaer přístupné pod
     * this.props.title a this.props.title2
     */
    constructor(){
        super();
        this.state = {name:"will", title2:title2}

    }

    render() {
        const title = "Wellcome Gali";
        setTimeout(() => {
            this.setState({name:"Bob"});
        }, 1000);
        return (
            <div>
                <Header title={title} />
                <Header title={this.state.title2} />
                {this.state.name}
                <Footer />
            </div>
        );
    }
}