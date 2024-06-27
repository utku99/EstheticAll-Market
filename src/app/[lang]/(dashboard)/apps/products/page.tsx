import UserListTable from '@/views/apps/user/list/UserListTable'

const getDataUser = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/user-list`)

  if (!res.ok) {
    throw new Error('Failed to fetch userData')
  }

  return res.json()
}

const Products = async () => {
  const userData = await getDataUser()

  return <UserListTable tableData={userData} />
}

export default Products
