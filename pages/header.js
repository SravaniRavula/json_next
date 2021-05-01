import styles from '../styles/Home.module.css'

import Navbar from './Navbar'
import path from 'path'
import fs from 'fs'

export default function Header() {
    return (
        <div className={styles.container}>
        <h1>
            hello
            
        </h1>
  
        <Navbar  text = "hello world"/>

        </div>
    )
}

export async function getServerSideProps() {
    const filePath = path.join(process.cwd(), 'data.json')
    const tweets = JSON.parse(fs.readFileSync(filePath))
    return {
        props: {
           tweets 
        }
    }
}
