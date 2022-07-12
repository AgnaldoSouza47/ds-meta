import NotificationButton from '../NotificationButton'
import './styles.css'
function SalesCard() {
    return (

        <div className="ds-meta-card">
            <h2 className="ds-metas-sales-title">Vendas</h2>
            <div>
                <div className="ds-meta-form-control-container" >
                    <input className="ds-meta-form-control" type="text" />
                </div>

                <div className="ds-meta-form-control-container" >
                    <input className="ds-meta-form-control" type="text" />
                </div>
            </div>
            <div>
                <table className="ds-meta-sales-table">
                    <thead>

                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Abreviada</th>
                            <th> Vendedor </th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th> Total </th>
                            <th>Notificar </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/07/22</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="ds-meta-red-btn-conteiner">
                                    <NotificationButton />

                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/07/22</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="ds-meta-red-btn-conteiner">
                                    <NotificationButton />

                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/07/22</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>

                                <div className="ds-meta-red-btn-conteiner">
                                    <NotificationButton />

                                </div>

                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>)


}

export default SalesCard