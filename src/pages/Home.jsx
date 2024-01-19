import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-start'>
        <section className='p-5 rounded-lg shadow-lg text-center flex flex-col space-y-5 w-[70%]'>
            <h1 className='text-white text-xl'>Details</h1>
            <table className='text-white'>
                <thead className='bg-blue-300'>
                    <tr>
                        <th>Full Name</th>
                        <th>USername</th>
                        <th>Country</th>
                        <th>Email id</th>
                        <th>Mobile Number</th>
                        <th>Referral id</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
  )
}

export default Home