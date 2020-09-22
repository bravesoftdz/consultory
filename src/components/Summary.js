import React, { Fragment } from 'react'
import Presentation from './Presentation'
import { withRouter, useHistory } from 'react-router-dom'

const Summary = ({ title, cssFz, subTitle, presentation, company, health, consultory,trainings,cssContact }) => {

    const history = useHistory();

    const back = () => {
        history.goBack();
    }

    return (
        <Fragment>
            <section className="Services Background__Services" style={{
                background: "#fff",
            }}>
                {presentation && <Presentation title={title} cssFz={cssFz} />}
            </section>
            <h2 style={{ textAlign: "center", fontSize: "30px", marginBottom: "50px" }}>{subTitle}</h2>
            <div className={`Summary Container-S ${cssContact}`}>
                <div className="Pdf__Container Square">
                    <div className="Pdf">
                        {
                            company ?

                                company.map(cp => (
                                    <div className="Info__Summary" key={cp._id}>
                                        <h1>{cp.title}</h1>
                                        <p>{cp.text}</p>
                                    </div>
                                )) : ''


                        }

                        {
                            health ?

                                health.map(ht => (
                                    <div className="Info__Summary" key={ht._id}>
                                        <h1>{ht.title}</h1>
                                        <p>{ht.text}</p>
                                    </div>
                                )) : ''


                        }
                        {
                            consultory ?
                                consultory.map(ct => (
                                    <div className="Info__Summary" key={ct._id}>
                                        <div className="Pdf_Download">
                                            <div className="Icon">
                                                <img src={require('../images/check.png')} alt="" />
                                            </div>
                                            <p>{ct.text}</p>
                                        </div>
                                    </div>
                                )) : ''


                        }
                        {
                            trainings ? 
                            <div className="Info__Summary" >
                                <p style={{marginBottom:"40px", fontSize:"20px", padding: "10px"}}>Ofrecemos capacitaciones presenciales y virtuales según la necesidad de cada empresa, brindando charlas especializadas, en las cuales se logra despejar todas las dudas de los asistentes.</p>
                            </div> : ''
                        }
                        {
                            trainings ?
                                trainings.map(tr => (
                                    <div className="Info__Summary" key={tr._id}>
                                        <div className="Pdf_Download">
                                            <div className="Icon">
                                                <img src={require('../images/check.png')} alt="" />
                                            </div>
                                            <p>{tr.text}</p>
                                            
                                        </div>
                                        <div className="Pdf__Link">
                                                <p>pdf</p>
                                            </div>
                                    </div>
                                )) : ''


                        }
                    </div>
                    <div className="Back Grid__Button">
                        <div className="Button">
                            <button onClick={back}>Volver</button>
                            <img src={require('../images/arrow.png')} alt="" />
                        </div>
                    </div>
                </div>

                {
                    company ?
                        <div className="Img__SummaryContainer">
                            <img src={require('../images/summary.png')} alt="imagen del consultor" />
                        </div> : ''
                }

                {
                    consultory ?
                        <div className="Img__SummaryContainer">
                            <img src={require('../images/summary.png')} alt="imagen del consultor" />
                        </div> : ''
                }
                {
                    health ?
                        <div className="Img__SummaryContainer">
                            <img src={require('../images/healthwork.png')} alt="imagen del consultor" />
                        </div> : ''
                }
                 {
                    trainings ?
                        <div className="Img__SummaryContainer">
                            <img src={require('../images/training.png')} alt="imagen del consultor" />
                        </div> : ''
                }
            </div>
        </Fragment>
    );
}

export default withRouter(Summary);