import React, { useEffect, useState } from 'react'
import { Context } from '../Context/Context'
import { useContext } from 'react'
import sepetCss from '../styles/sepet.module.css'
function Basket() {

  const [countt, setCountt] = useState(1)
  const Data = useContext(Context)

  const Plus = (e) => {
    const Find = Data.x.find((m) => m.id === parseInt(e.target.value))
    Find.count += 1
    setCountt(countt + 1)
    Data.setTot(Number(Data.tot) + Number(e.target.name))

  }
  const Minus = (e) => {
    const Find = Data.x.find((m) => m.id === parseInt(e.target.value))
    Find.count -= 1
    setCountt(countt - 1)
    if (Find.count <= 0) {
      Find.count = 0
      setCountt(0)
      Data.setX(Data.x.filter((m) => m.id !== parseInt(e.target.value)))
    }
    Data.setTot(Number(Data.tot) - Number(e.target.name))


  }
  useEffect(() => {
    if (Number(Data.tot) < 0) {
      Data.setTot(0)
    }
  })

  return (
    <div className='container'>

      <div className='row'>
        <div className='col-lg-8'>
          {Data.x.map((m) => (
            <div key={m.id} className={sepetCss.map}>
              <picture>


                <img 
                className={sepetCss.img}
                  src={m.img}
                  alt={m.name}
                  width={100}
                  height={100}
                />
              </picture>
              <div>
                <p>{m.name}</p>
                <p>{m.content}</p>
                <div className={sepetCss.buttons}>
                  <button className='btn btn-danger' name={m.price} onClick={Plus} value={m.id} >+</button>
                  <h5>{m.count}</h5>
                  <button className='btn btn-light' name={m.price} onClick={Minus} value={m.id} >-</button>
                </div>


              </div>
            </div>
          ))}

        </div >
        <div id={sepetCss.onay} className='col-lg-4'>

          {Data.x.map((m) => (
            <div key={m.id} className={sepetCss.total}>
              <h6>{m.name}</h6>

              <div className='d-flex'>
                <p>{m.count}</p>
                <p>X</p>
                <p>{m.price}TL</p>
              </div>
            </div>
          ))}

          <div className={sepetCss.totall}>
            <div className={sepetCss.totalDiv}>
              <h6>Toplam Tutar</h6>
              <h6>{Data.tot}TL</h6>
            </div>
          </div>
          <button className={sepetCss.button}>sepeti onayla</button>

        </div>
      </div>
    </div>

  )
}

export default Basket