import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return{
        <div className="dsmeta-card">
        <h2 className="dsmeta-sales-title">Vendas</h2>
        <div>
          <div class="dsmeta-form-control-container">
            <input class="dsmeta-form-control" type="text">/>
          </div>
          <div class="dsmeta-form-control-container">
            <input class="dsmeta-form-control" type="text"/>
          </div>
        </div>

        <div>
          <table class="dsmeta-sales-table">
            <thead>
              <tr>
                <th class="show992">ID</th>
                <th class="show576">Data</th>
                <th>Vendedor</th>
                <th class="show992">Visitas</th>
                <th class="show992">Vendas</th>
                <th>Total</th>
                <th>Notificar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="show992">#341</td>
                <td class="show576">08/07/2022</td>
                <td>Anakin</td>
                <td class="show992">15</td>
                <td class="show992">11</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className="dsmeta-red-btn-container">
                    <NotificationButton />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="show992">#341</td>
                <td class="show576">08/07/2022</td>
                <td>Anakin</td>
                <td class="show992">15</td>
                <td class="show992">11</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className="dsmeta-red-btn-container">
                    <NotificationButton />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="show992">#341</td>
                <td class="show576">08/07/2022</td>
                <td>Anakin</td>
                <td class="show992">15</td>
                <td class="show992">11</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className="dsmeta-red-btn-container">
                    <NotificationButton />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>
    }
  }
  
  export default SalesCard