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
import UserDetails from '@/views/apps/user/view/user-left-overview/UserDetails'
import CardStatHorizontal from '@/components/card-statistics/Horizontal'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

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

      <Grid item xs={12} lg={8} md={7}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Grid container direction={'row'} spacing={6}>
              <Grid item xs={12} sm={5}>
                <CardStatHorizontal {...data[0]} />
              </Grid>
              <Grid item xs={12} sm={5}>
                <CardStatHorizontal {...data[1]} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <EarningReportsWithTabs />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DashboardCRM
