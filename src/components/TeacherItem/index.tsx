import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/17915601?s=460&u=96ecb2b2408d0785ccdf6d1a364c60ef54b59ae5&v=4" alt=""/>
                <div>
                    <strong>Dionathen Córdova</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Bla blablas loren ipsum, teste de descriçao. 
                <br/><br/>
                Bla blablas loren ipsum, teste de descriçaoBla blablas loren ipsum, teste de descriçao. 
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 20,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;