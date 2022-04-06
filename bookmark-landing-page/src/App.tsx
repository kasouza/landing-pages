import EmailForm from './components/EmailForm'
import Faq from './components/Faq'
import DownloadCard from './components/DownloadCard'
import Footer from './components/Footer'
import Header from './components/Header'
import Tabs from './components/Tabs'

function App() {
  return (
    <div className="App text-very-dark-blue">
      <Header />

      <main className="mt-16">
        <section id="intro" className="bg-tablet flex flex-col-reverse lg:flex-row text-center lg:text-left items-center w-full pb-32 gap-16 md:gap-0">
          <div className="flex flex-col flex-1 justify-between sm:px-4 md:px-32 gap-8 h-min">
            <h1 className="text-3xl lg:text-5xl font-medium">A Simple Bookmark Manager</h1>

            <p className="text-grayish-blue w-10/12 mx-auto md:mx-0 text-lg md:text-xl">
              A clean and simple interface to organize your favourite websites. Open a new
              browser tab and see your sites load instantly. Try it for free.
            </p>

            <div className="flex justify-center lg:justify-start gap-3 mt-6 w-10/12 mx-auto md:mx-0 md:w-auto">
              <a className="whitespace-nowrap text-sm px-7 py-4 font-medium shadow-lg rounded-md bg-soft-blue text-white outline-soft-blue outline-2 hover:outline hover:bg-transparent hover:text-soft-blue transition-colors" href="/">Get it on Chrome</a>
              <a className="whitespace-nowrap text-sm px-7 py-4 font-medium shadow-lg rounded-md bg-gray-100 text-gray-600 outline-gray-500 outline-2 hover:text-gray-600 hover:outline hover:bg-transparent" href="/">Get it on Firefox</a>
            </div>
          </div>

          <div className="flex align-center justify-center flex-1 w-full">
            <img src="/images/illustration-hero.svg" alt="" />
          </div>
        </section>

        <section id="features" className="bg-tablet bg-no-repeat pb-32">
          <div className="flex flex-col items-center gap-6 w-full mb-16">
            <h2 className="text-4xl font-medium text-very-dark-blue">Features</h2>

            <p className="text-lg text-grayish-blue w-10/12 md:w-2/5 text-center">
              Our aim is to make it quick and easy for you to access your favourite websites.
              Your bookmarks sync between your devices so you can access them on the go.
            </p>
          </div>

          <Tabs tabs={[
            {
              name: "Simple Bookmarking",
              title: "Bookmark in one click",
              text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
              imgSrc: "/images/illustration-features-tab-1.svg",
              imgAlt: "",
            },
            {
              name: "Speedy Searching",
              title: "Intelligent search",
              text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
              imgSrc: "/images/illustration-features-tab-2.svg",
              imgAlt: "",
            },
            {
              name: "Easy Sharing",
              title: "Share your bookmarks",
              text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
              imgSrc: "/images/illustration-features-tab-3.svg",
              imgAlt: "",
            }
          ]} />
        </section>

        <section id="download" className="w-full flex flex-col items-center gap-16 mb-32 text-center md:text-left">
          <div className="flex flex-col items-center gap-6">
            <h2 className="w-10/12 md:w-auto text-3xl md:text-4xl font-medium">Download the extension</h2>

            <p className="text-lg text-grayish-blue w-10/12 md:w-3/5 text-center">
              We’ve got more browsers in the pipeline. Please do let us know if you’ve
              got a favourite you’d like us to prioritize.
            </p>
          </div>

          <ul className="flex flex-col lg:flex-row gap-8 relative lg:h-[550px]">
            <li className="flex-1 self-start">
              <DownloadCard imageSrc="/images/logo-chrome.svg" href="/" browser="Chrome" minVersion={62} />
            </li>

            <li className="flex-1 self-center">
              <DownloadCard imageSrc="/images/logo-firefox.svg" href="/" browser="Firefox" minVersion={55} />
            </li>

            <li className="flex-1 self-end">
              <DownloadCard imageSrc="/images/logo-opera.svg" href="/" browser="Opera" minVersion={46} />
            </li>
          </ul>
        </section>

        <section id="faq" className="mb-32">
          <div className="flex flex-col items-center w-11/12 md:w-8/12 lg:w-2/5 mx-auto">
            <div className="flex flex-col items-center text-center gap-6 mb-16">
              <h2 className="text-very-dark-blue font-medium w-10/12 md:w-auto text-3xl md:text-4xl">Frequently Asked Questions</h2>
              <p className="text-lg text-grayish-blue max-w-lg">
                Here are some of our FAQs. If you have any other questions you’d like
                answered please feel free to email us.
              </p>
            </div>

            <div className="w-full mb-16">
              <Faq questions={[
                {
                  q: "What is Bookmark?",
                  a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla.Phasellus blandit ipsum quis quam ornare mattis."
                },
                {
                  q: "How can I request a new browser?",
                  a: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
                },
                {
                  q: "Is there a mobile app?",
                  a: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
                },
                {
                  q: "What about other Chromium browsers?",
                  a: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
                }
              ]} />
            </div>

            <a className="text-sm bg-soft-blue px-7 py-3.5 rounded-md text-white font-medium outline-soft-blue outline-2 hover:outline hover:bg-transparent hover:text-soft-blue transition-colors" href="">More Info</a>
          </div>
        </section>


        <section id="contact" className="flex flex-col items-center bg-soft-blue text-white px-6 py-16 md:p-16">
          <div className="flex flex-col items-center gap-8 w-full md:w-4/5 lg:w-2/5 text-center">
            <p className="tracking-[0.35rem] text-xs font-medium">35,000+ ALREADY JOINED</p>

            <h2 className="text-3xl font-medium p-1">
              Stay up-to-date with what we’re doing
            </h2>

              <EmailForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
