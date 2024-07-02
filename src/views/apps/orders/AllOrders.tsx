'use client'

// React Imports
import { useState, useMemo, useEffect } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import TablePagination from '@mui/material/TablePagination'
import MenuItem from '@mui/material/MenuItem'

// Third-party Imports
import classnames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table'

// Component Imports
import OptionMenu from '@core/components/option-menu'
import TablePaginationComponent from '@components/TablePaginationComponent'
import CustomTextField from '@core/components/mui/TextField'
import CustomAvatar from '@core/components/mui/Avatar'

// Util Imports
import { getInitials } from '@/utils/getInitials'
import { getLocalizedUrl } from '@/utils/i18n'

// Style Imports
import tableStyles from '@core/styles/table.module.css'
import TableFilters from '../user/list/TableFilters'
import { CardContent, Grid } from '@mui/material'

const orderStatus = [
  { label: 'Onay Bekliyor', value: 1 },
  { label: 'Onaylandı', value: 2 },
  { label: 'Kargoya Verildi', value: 3 },
  { label: 'Tamamlandı', value: 4 }
]

// Styled Components
const Icon = styled('i')({})

const fuzzyFilter = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

const DebouncedInput = ({ value: initialValue, onChange, debounce = 500, ...props }) => {
  // States
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return <CustomTextField {...props} value={value} onChange={e => setValue(e.target.value)} />
}

// Column Definitions
const columnHelper = createColumnHelper()

const AllOrders = ({ tableData }) => {
  // States
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [rowSelection, setRowSelection] = useState({})

  const [data, setData] = useState(...[tableData])
  const [globalFilter, setGlobalFilter] = useState('')

  const router = useRouter()

  // Hooks
  const { lang: locale } = useParams()

  const columns = useMemo(
    () => [
      columnHelper.accessor('fullName', {
        header: '#ID',
        cell: ({ row }) => (
          <div>
            <Typography variant='h6'>Siparişi Veren:</Typography>
            <Typography color='primary' variant='h6'>{`${row.original.username}`}</Typography>
          </div>
        )
      }),
      columnHelper.accessor('fullName', {
        header: 'Görsel',
        cell: ({ row }) => (
          <div className='w-[100px]'>
            <Typography variant='h6'>Sipariş No:</Typography>
            <Typography color='primary' variant='h6'>{`${row.original.username}`}</Typography>
          </div>
        )
      }),
      columnHelper.accessor('category', {
        header: 'Kategori',
        cell: ({ row }) => (
          <div>
            <Typography variant='body1'>Sipariş Durumu:</Typography>
            <Typography color='primary' variant='body1'>{`${row.original.username}`}</Typography>
          </div>
        )
      }),
      columnHelper.accessor('price', {
        header: 'Fiyat',
        cell: ({ row }) => (
          <div className='w-[300px] '>
            <Typography variant='body1'>İstanbul</Typography>
            <Typography variant='body1'>14.10.2024 - 15:50</Typography>
          </div>
        )
      }),
      columnHelper.accessor('action', {
        header: 'İşlemler',
        cell: () => (
          <div className='flex items-center justify-center w-[300px] border-l'>
            <Button variant='contained' className='text-white w-[160px]'>
              <Link href={getLocalizedUrl('apps/orders/detail', locale)} className='flex'>
                Detaylar
              </Link>
            </Button>
          </div>
        ),
        enableSorting: false
      })
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const table = useReactTable({
    data: data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      rowSelection,
      globalFilter
    },
    initialState: {
      pagination: {
        pageSize: 10
      }
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    globalFilterFn: fuzzyFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  })

  const [plan, setPlan] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    const filteredData = tableData?.filter(user => {
      if (plan && user.currentPlan !== plan) return false
      if (status && user.status !== status) return false

      return true
    })

    setData(filteredData)
  }, [plan, status, tableData, setData])

  return (
    <>
      <Card className='bg-transparent shadow-none'>
        <CardContent>
          <Grid container spacing={6} className='gap-4'>
            <Grid item xs={12} sm={4} className='pl-0'>
              <Typography variant='body2'>Durum</Typography>
              <CustomTextField
                select
                fullWidth
                id='select-role'
                value={status}
                onChange={e => setStatus(e.target.value)}
                SelectProps={{ displayEmpty: true }}
                className='bg-white rounded-md'
              >
                {orderStatus.map(item => (
                  <MenuItem value={item.value}>{item.label}</MenuItem>
                ))}
              </CustomTextField>
            </Grid>
            <Grid item xs={12} sm={4} className='pl-0'>
              <Typography variant='body2'>Kategori</Typography>
              <CustomTextField
                select
                fullWidth
                id='select-plan'
                value={plan}
                onChange={e => setPlan(e.target.value)}
                SelectProps={{ displayEmpty: true }}
                className='bg-white rounded-md'
              >
                <MenuItem value=''>Tümü</MenuItem>
                <MenuItem value='basic'>Basic</MenuItem>
                <MenuItem value='company'>Company</MenuItem>
                <MenuItem value='enterprise'>Enterprise</MenuItem>
                <MenuItem value='team'>Team</MenuItem>
              </CustomTextField>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          {table.getFilteredRowModel().rows.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan={table.getVisibleFlatColumns().length} className='text-center'>
                  No data available
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {table
                .getRowModel()
                .rows.slice(0, table.getState().pagination.pageSize)
                .map(row => {
                  return (
                    <Card className='mb-4 px-4 py-6'>
                      <tr key={row.id} className='border-none flex flex-row justify-between'>
                        {row.getVisibleCells().map(cell => (
                          <td key={cell.id}>
                            <div>{flexRender(cell.column.columnDef.cell, cell.getContext())}</div>
                          </td>
                        ))}
                      </tr>
                    </Card>
                  )
                })}
            </tbody>
          )}
        </table>
      </div>

      <Card className='bg-transparent shadow-none'>
        <TablePagination
          component={() => <TablePaginationComponent table={table} />}
          count={table.getFilteredRowModel().rows.length}
          rowsPerPage={table.getState().pagination.pageSize}
          page={table.getState().pagination.pageIndex}
          onPageChange={(_, page) => {
            table.setPageIndex(page)
          }}
        />
      </Card>
    </>
  )
}

export default AllOrders
