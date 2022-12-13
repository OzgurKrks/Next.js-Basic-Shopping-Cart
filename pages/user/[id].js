import React, { useContext, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Single from '../../styles/singleCss.module.css'
import { useRouter } from 'next/router'
import data from '../../data/data.json'
import { Context } from '../../Context/Context'


function SingleProduct() {
  const [countt, setCountt] = useState(1)
  const Data = useContext(Context)
  const router = useRouter()


  const newData = data.filter((m) => m.id === parseInt(router.query.id))


  const basket = (e) => {
    const Find = Data.x.find((m) => m.id === parseInt(e.target.value))
    newData[0].count += 1
    if (!Find) {
      Data.setX([...Data.x, newData[0]])
    }
    Data.setTot(Number(Data.tot) + Number(e.target.name) )
  }




  return (
    <div className='container'>
      <div className='row'>
        {newData.map((m) => (
          <>
            <div className='col-sm-7'>

              <img className={Single.img} src={m.img}></img>
            </div>
            <div key={m.id} className='col-sm-5'>
              {m.name}
              <h3>{m.content}</h3>
              <h2>{m.price} TL</h2>
            

              <div className={Single.div}>
              <button id={Single.btn} type="button" name={m.price} value={m.id} onClick={basket} class="btn btn-primary " data-bs-toggle="modal" data-bs-target={"#".concat(m.name)}>
                sepete ekle
              </button>
              </div>
              

              <div class="modal fade" id={m.name} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div id={Single.modals} class="modal-content">
                    <div class="modal-header">
                      <i id={Single.icon} class="fa-sharp fa-solid fa-circle-check"></i><span className={Single.span}>Ürün başarıyla sepete eklendi...</span>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div    class="modal-body">
                      <div className='row'>
                        <div className='col-sm-5'>
                          <img style={{ "width": "200px" }} src={m.img} />
                        </div>
                        <div className='col-sm-6'>
                          <h4>{m.name}</h4>
                          <p>{m.content}</p>
                          <div className={Single.price}>
                            <h4>{m.price} TL</h4>

                          </div>
                 
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default SingleProduct