import Card from '../components/Card'
import Filter from '../components/Filter'

import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import fs from 'fs'
import { useState } from 'react'

export interface Job {
  id: number,
  company: string,
  logo: string,
  new: boolean,
  featured: boolean,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: string[],
  tools: string[],
}

interface HomeProps {
  jobs: Job[]
}

export const getStaticProps: GetStaticProps = async () => {
  const jobs: Job[] = JSON.parse(fs.readFileSync(process.cwd() + '/data.json').toString())

  return {
    props: {
      jobs
    }
  }
}

const Home = ({ jobs }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [filters, setFilters] = useState<string[]>([])

  return (
    <div className="w-full">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap" rel="stylesheet" />
      </Head>

      <header className="flex flex-col justify-end bg-desaturated-dark-cyan bg-no-repeat h-36 bg-cover bg-[url('/images/bg-header-mobile.svg')] md:bg-[url('/images/bg-header-desktop.svg')]">
        {filters.length > 0
          ? <Filter filters={filters} setFilters={setFilters} />
          : <></>
        }
      </header>

      <main className="flex flex-col gap-8 mx-auto py-24 md:py-16 w-11/12 md:w-4/5">
        {jobs
          .filter((job: Job) => {
            if (filters.length === 0) {
              return true
            }

            let passed = false

            for (let filter of filters) {
              passed = false

              if (filter === job.role) {
                passed = true
              }

              if (filter === job.level) {
                passed = true
              }

              if (job.tools.includes(filter)) {
                passed = true
              }

              if (job.languages.includes(filter)) {
                passed = true
              }

              if (!passed) {
                return false
              }
            }

            return passed
          })
          .map((job: Job, i: Number) => (
            <Card key={i.toString()} job={job} filters={filters} setFilters={setFilters} />
          ))}
      </main>
    </div>
  )
}

export default Home
