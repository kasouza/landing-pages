import Card from '../components/Card'
import Footer from '../components/Footer'
import HorizontalSlider from '../components/HorizontalSlider'
import LinkButton from '../components/LinkButton'
import Header from '../components/Header'

import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Mentor | Manage landing page</title>
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.intro}>
          <div className={styles.textContainer}>
            <h1>Bring everyone together to build better products.</h1>

            <h2>
              Manage makes it simple for software teams to plan day-to-day
              tasks while keeping the larger team goals in view.
            </h2>

            <LinkButton href="#">Get Started</LinkButton>
          </div>

          <div className={styles.statisticsContainer}>
            <Image layout="responsive" src="/images/illustration-intro.svg" width="580" height="525" />
          </div>
        </section>

        <div className={styles.differencesTestimonialsContainer}>

          <section className={styles.whatIsDifferent}>
            <div className={styles.textContainer}>
              <h2>What’s different about Manage?</h2>

              <p>
                Manage provides all the functionality your team needs, without
                the complexity. Our software is tailor-made for modern digital
                product teams.
              </p>
            </div>

            <ol className={styles.differences}>
              <li>
                <span className={styles.bullet}>01</span>
                <div className={styles.titleContainer}>
                  <h3>Track company-wide progress</h3>
                </div>
                <p>
                  See how your day-to-day tasks fit into the wider vision. Go from
                  tracking progress at the milestone level all the way done to the
                  smallest of details. Never lose sight of the bigger picture again.
                </p>
              </li>

              <li>
                <span className={styles.bullet}>02</span>

                <div className={styles.titleContainer}>
                  <h3>Advanced built-in report</h3>
                </div>

                <p>
                  Set internal delivery estimates and track progress toward company
                  goals. Our customisable dashboard helps you build out the reports
                  you need to keep key stakeholders informed.
                </p>
              </li>

              <li>
                <span className={styles.bullet}>03</span>

                <div className={styles.titleContainer}>
                  <h3>Everything you need in one place</h3>
                </div>

                <p>
                  Stop jumping from one service to another to communicate, store files,
                  track tasks and share documents. Manage offers an all-in-one team
                  productivity solution.
                </p>
              </li>
            </ol>
          </section>

          <section className={styles.testimonials}>
            <h2>What they’ve said</h2>

            <HorizontalSlider>
              <Card
                imageSrc="/images/avatar-anisha.png"
                imageHeight={144}
                imageWidth={144}
                title="Anisha Li"
                text='“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'
              />

              <Card
                imageSrc="/images/avatar-ali.png"
                imageHeight={144}
                imageWidth={144}
                title="Ali Bravo"
                text='“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”'
              />

              <Card
                imageSrc="/images/avatar-richard.png"
                imageHeight={144}
                imageWidth={144}
                title="Richard Watts"
                text='“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”'
              />

              <Card
                imageSrc="/images/avatar-shanai.png"
                imageHeight={144}
                imageWidth={144}
                title="Shanai Gough"
                text='“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”'
              />
            </HorizontalSlider>

            <div className={styles.buttonContainer}>
              <LinkButton href="">Get Started</LinkButton>
            </div>
          </section>
        </div>

        <section className={styles.simplify}>
          <h2>Simplify how your team works today.</h2>
          <div className={styles.buttonContainer}>
            <LinkButton white href="">Get Started</LinkButton>
          </div>

          <div className={styles.backgroundImage}></div>
        </section>
      </main>

      <Footer />

      <div className={styles.attribution}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://www.github.com/kasouza">kasouza</a>.
      </div>
    </div>
  )
}

export default Home
