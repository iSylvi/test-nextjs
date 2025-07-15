import styles from '@/styles/home.module.css'
import Layout from './layout'
import { Inter } from 'next/font/google'
import SortFilterSection from '@/components/SortFilterSection'
import RecipeSection from '@/components/RecipeSection'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <Layout>
      <div className={`${styles.container} ${inter.className}`}>
        <SortFilterSection />
        <RecipeSection />
      </div>
    </Layout>
  )
}

export default Home;