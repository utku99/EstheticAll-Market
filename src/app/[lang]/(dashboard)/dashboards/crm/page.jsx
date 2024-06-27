// MUI Imports
import Grid from '@mui/material/Grid'

// Next Imports
import dynamic from 'next/dynamic'

// Component Imports
import DistributedBarChartOrder from '@views/dashboards/crm/DistributedBarChartOrder'
import LineAreaYearlySalesChart from '@views/dashboards/crm/LineAreaYearlySalesChart'
import CardStatVertical from '@/components/card-statistics/Vertical'
import BarChartRevenueGrowth from '@views/dashboards/crm/BarChartRevenueGrowth'
import EarningReportsWithTabs from '@views/dashboards/crm/EarningReportsWithTabs'
import RadarSalesChart from '@views/dashboards/crm/RadarSalesChart'
import SalesByCountries from '@views/dashboards/crm/SalesByCountries'
import ProjectStatus from '@views/dashboards/crm/ProjectStatus'
import ActiveProjects from '@views/dashboards/crm/ActiveProjects'
import LastTransaction from '@views/dashboards/crm/LastTransaction'
import ActivityTimeline from '@views/dashboards/crm/ActivityTimeline'
import UserLeftOverview from '@views/apps/user/view/user-left-overview'
import UserRight from '@views/apps/user/view/user-right'
import InvoiceListTable from '@views/apps/user/view/user-right/overview/InvoiceListTable'
import Horizontal from '@views/pages/widget-examples/statistics/Horizontal'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'
import UserDetails from '@/views/apps/user/view/user-left-overview/UserDetails'
import CardStatHorizontal from '@/components/card-statistics/Horizontal'
import UserListTable from '@/views/apps/user/list/UserListTable'

const getData = async () => {
  const res = await fetch(`${process.env.API_URL}/apps/invoice`)

  if (!res.ok) {
    throw new Error('Failed to fetch invoice data')
  }

  return res.json()
}

const data = [
  {
    stats: '21,459',
    avatarIcon: 'tabler-eye',
    avatarColor: '',
    title: 'Toplam Görüntüleme',
    avatarSkin: '',
    avatarSize: 46,
    avatarIconSize: 24
  },
  {
    stats: '4,567',
    avatarIcon: 'tabler-cube',
    avatarColor: '',
    title: 'Toplam Sipariş',
    avatarSkin: '',
    avatarSize: 46,
    avatarIconSize: 24
  }
]

const getDataUser = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/user-list`)

  if (!res.ok) {
    throw new Error('Failed to fetch userData')
  }

  return res.json()
}

const DashboardCRM = async () => {
  // Vars
  // const serverMode = getServerMode()

  // Vars
  const invoiceData = await getData()
  // const data = await getData2()

  const userData = await getDataUser()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={4} md={5}>
        <UserDetails />
      </Grid>

      <Grid item container xs={12} lg={8} md={7} spacing={6}>
        <Grid item container spacing={6}>
          <Grid item xs={12} sm={6} md={3} lg={4}>
            <CardStatHorizontal {...data[0]} />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={4}>
            <CardStatHorizontal {...data[1]} />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <InvoiceListTable invoiceData={invoiceData} />
        </Grid>
      </Grid>

      {/* <Grid item xs={12} sm={6} md={4} lg={2}>
        <DistributedBarChartOrder />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <LineAreaYearlySalesChart />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <CardStatVertical
          title='Total Profit'
          subtitle='Last Week'
          stats='1.28k'
          avatarColor='error'
          avatarIcon='tabler-credit-card'
          avatarSkin='light'
          avatarSize={44}
          avatarIconSize={28}
          chipText='-12.2%'
          chipColor='error'
          chipVariant='tonal'
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <CardStatVertical
          title='Total Sales'
          subtitle='Last Week'
          stats='24.67k'
          avatarColor='success'
          avatarIcon='tabler-currency-dollar'
          avatarSkin='light'
          avatarSize={44}
          avatarIconSize={28}
          chipText='+24.67%'
          chipColor='success'
          chipVariant='tonal'
        />
      </Grid>
      <Grid item xs={12} md={8} lg={4}>
        <BarChartRevenueGrowth serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} lg={8}>
        <EarningReportsWithTabs serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <RadarSalesChart serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <SalesByCountries />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ProjectStatus />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ActiveProjects />
      </Grid>
      <Grid item xs={12} md={6}>
        <LastTransaction serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} md={6}>
        <ActivityTimeline />
      </Grid> */}
    </Grid>
  )
}

export default DashboardCRM
