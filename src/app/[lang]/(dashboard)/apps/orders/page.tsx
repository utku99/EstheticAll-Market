import AllOrders from '@/views/apps/orders/AllOrders'
import React from 'react'

const getDataUser = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/user-list`)

  if (!res.ok) {
    throw new Error('Failed to fetch userData')
  }

  return res.json()
}

const page = async () => {
  const userData = await getDataUser()

  return <AllOrders tableData={userData} />
}

export default page
