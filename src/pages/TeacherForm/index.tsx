import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que demais que você quer dar aulas!"/>
            
            <main id="main">
                <form id="form">
                    <h4>Seus dados</h4>

                    <div className="input-block">
                        <label htmlFor="subject">Nome completo</label><br/>
                        <input type="text" id="name"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="subject">Link da sua foto <span>(começa com http://)</span></label><br/>
                        <input type="text" id="url_image"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="subject">Whatsapp <span>(Somente números)</span></label><br/>
                        <input type="text" id="whatsapp"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="subject">Whatsapp <span>(Somente números)</span></label><br/>
                        <textarea name="" id="description"></textarea>
                    </div>

                    <h4>Sobre a aula</h4>
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="subject">Custo da sua hora por aula <span>( em R$ )</span></label>
                        <input type="text" id="subject"/>
                    </div>
                    
                    <div id="horarios">
                        <h3>Horários disponíveis</h3>
                        <h3 id='add-horario'>+ Novo horário</h3>
                    </div>

                    <div className="inputs-horario">
                        <div className="input-block">
                            <label htmlFor="subject">Dia da semana</label>
                            <input type="text" id="subject"/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="subject">Das</label>
                            <input type="text" id="subject"/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="subject">Até</label>
                            <input type="text" id="subject"/>
                        </div>
                    </div>

                    <div id="buttons-container">
                        <p>Importante! <br/>Preencha todos os dados</p>

                        <button className="give-classes" type="button">
                            Dar aulas
                        </button>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;