/**
 * Created by Milan Gallas on 30.8.2016.
 */
import React from 'react';
import Header from './header';
import Footer from './footer';


const title = "Wellcome Galileo galielei in state";
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
        this.state = {name:"will", title:title}

    }

    /**
     * Metoda pro změnu titulku se nachází v hlavní komponentě, protože zde má přístup ke state poli
     * metoda se pak injectuje ostatním komponentám.
     * Tím že se honota změní tady, tak pak může jednoduš proplouvat ke všem ostatním komponentám, které hodnotu používají)
     *
     * bind(this) - zapříčiní to, že se bude metoda volat právě ve třídě app, jinak by se bralo, že metoda je ve třídě,
     * kde se aktuálně volá, takže by ji překladaš hledal například ve třídě Header
     * @param title
     */
    changeTitle(title){
        this.setState({ title });
    }

    render() {
        return (
            <div>
                <Header
                    title={this.state.title}
                    changeTitle={this.changeTitle.bind(this)}
                />
                {this.state.name}
                <Footer />
            </div>
        );
    }
}