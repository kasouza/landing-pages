export default function Footer(): JSX.Element {
    return (
        <footer className="flex flex-col w-full bg-very-dark-blue text-white">
            <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between w-10/12 mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 p-8">
                    <div><img src="/images/logo-bookmark-white-text.svg" alt="Bookmark" /></div>
                    <ul className="flex flex-col lg:flex-row items-center gap-8 tracking-widest text-sm">
                        <li><a className="text-xs hover:text-soft-red transition-colors" href="">FEATURES</a></li>
                        <li><a className="text-xs hover:text-soft-red transition-colors" href="">PRICING</a></li>
                        <li><a className="text-xs hover:text-soft-red transition-colors" href="">CONTACT</a></li>
                    </ul>
                </div>

                <ul className="flex gap-10 justify-center lg:justify-start items-center">
                    <li><a className="social-icon" href=""><img src="/images/icon-facebook.svg" alt="Facebook" /></a></li>
                    <li><a className="social-icon" href=""><img src="/images/icon-twitter.svg" alt="Twitter" /></a></li>
                </ul>
            </div>

            <p className="text-sm w-full text-center p-10">
                Challenge by <a className="hover:text-soft-red transition-colors" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a className="hover:text-soft-red transition-colors" href="https://github.com/kasouza/">kasouza</a>.
            </p>
        </footer>
    )
}