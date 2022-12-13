import React from 'react'
import data from '../data/data.json'
import indexCss from '../styles/index.module.css'
import Link from 'next/link'
import Image from 'next/image'
function Products() {
    return (
        <div className='container'>
            <div className='row'>

                {data.map((m) => (
                    <div key={m.id} id={indexCss.pCard} className='col-lg-3'>
                        <Link href={"user/" + m.id}>

                            <div className={indexCss.productCard}>
                                <picture>


                                    <img className={indexCss.img}
                                        src={m.img}
                                        alt={m.name}
                                        width={300}
                                        height={200}
                                    />
                                </picture>
                            </div>
                        </Link>
                    </div>

                ))}

                
            </div>

        </div>
    )
}

export default Products