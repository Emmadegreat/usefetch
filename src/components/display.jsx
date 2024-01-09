import React from 'react'

import UseFetch from './useFetch'

const Display = () => {

    const { dataItem, error, loading } = UseFetch('https://fakestoreapi.com/products');

    if (loading) {
        return <p>Loading ...</p>
    }

    if (error) {
        return <p>Error!: { error.message}</p>
    }

    return (
        <div className='flex justify-center items-center m-auto flex-col pt-24'>
            <h1 className='md:text-3xl text-2xl text-blue-800 md:font-bold font-semibold'>
                useFetch Custom Hook implementation
            </h1>

            {dataItem.map((item, index) => {
                return(

                    <ul key={index} className='flex flex-col p-2'>
                        <li>{item.id}. {item.title}</li>
                        <img src={item.image} alt="product image" className='w-[200px] h-[200px]' />
                    </ul>

                )

            })}
        </div>
    )
}

export default Display
