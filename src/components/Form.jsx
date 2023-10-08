import React from 'react'

export const Form = () => {
    return (
        /*dsdsdsdd*/
        <div>
     <h1 className='text-center mt-2'>.</h1>
            <h2 className='text-center mt-5'>Calcula el precio de un alquiler rellenando este simple formulario</h2>
            <div className='container mt-5'>
                <div className='row'>
                    <div className="col-6 col-lg-6 background2">
                   
                        <form className='card' action="">


                            <div className="form-group">
                                <label htmlFor="estancia">¿Durante cuánto tiempo se va a alquilar? </label>
                                <select name="estancia" id="">
                                    <option value="">---------</option>
                                    <option value="cortaEstancia">Corta estancia (un mes)</option>
                                    <option value="largaEstancia">Estancia larga (de un mes a un año)</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="barrio">¿En que barrio está ubicado? </label>
                                <input className="form-control" type="text" name='barrio' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="medidas">Indica el tamaño de la vivienda en metros cuadrados </label>
                                <input className="form-control" type="number" min="1" name='medidas' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="habitaciones">Indica el número de habitaciones </label>
                                <input className="form-control" type="number" min="1" name='habitaciones' />
                            </div>
                            <div className="form-group">
                                <p>¿El edificio dispone de ascensor?</p>
                                <label htmlFor="si"> Sí </label>
                                <input type="radio" name='ascensor' id='conAscensor' value="si" />
                                <label htmlFor="no"> No </label>
                                <input type="radio" name='ascensor' id='sinAscensor' value="no" />
                            </div>
                            <div className="form-group ">
                                <input type="submit" className="btn btn-primary text-light" value="Calcula" />
                            </div>


                        </form>
                        <div className='row'>
                            <div className="col-6 col-lg-6 background2" >

                                <div className="card mt-5">
                                    <h5 className="card-title h5 h4-sm mt-3 text-center" >Predicción de precios</h5>
                                    <a href="#" className="btn btn-primary mt-3 text-light">Máximo</a>
                                    <a href="#" className="btn btn-primary mt-3 text-light">Mínimo</a>
                                </div>
                            </div>
                            <div className="col-6 col-lg-6 background2" >

                                <div className="card mt-5">
                                    <h5 className="card-title h5 h4-sm mt-3 text-center">Evolución de precios en la zona</h5>
                                    <img src="https://conceptosclaros.com/wp-content/uploads/2016/12/hockey-stick-plot.jpg" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-6 col-lg-6 background2" >

                        <div className="card">
                            <h5 className="card-title h5 h4-sm mt-3 text-center">Precio estimado por zona según las características escogidas</h5>
                            <img src="https://www.mapasdeespana.com/provincia/mapa-provincia-madrid.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>



    )
}