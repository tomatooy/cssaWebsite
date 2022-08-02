import DepartmentDetail from '../components/Departments/DepartmentDetail'
import Home from '../components/Home'
import Detail from '../components/Detail'

const router = [
    {
        path: '/detail',
        element:<Detail/>
    },
    {
        path: '/',
        element:<Home/>
    }
]

export default router