
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { getAllData } from './slice/userSlice'
import CardDetail from './component/CardDetail'

function App() {
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.app
  })

  return (
    <>
      <CardDetail />
    </>
  )
}

export default App
