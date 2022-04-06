interface DownloadCardProps {
    imageSrc: string,
    href: string,
    browser: string,
    minVersion: number,
}

export default function DownloadCard({ imageSrc, href, browser, minVersion }: DownloadCardProps): JSX.Element {
    return (
        <div className="flex flex-col gap-12 items-center justify-between py-10 shadow-lg rounded-2xl">
            <img src={imageSrc} alt={browser + ' logo'} />

            <div className="flex flex-col gap-2 items-center">
                <h3 className="text-xl font-medium">Add to {browser}</h3>
                <span className="whitespace-nowrap text-grayish-blue">Minimum version {minVersion}</span>
            </div>

            <div className="flex flex-col gap-4 w-full">
                <div className="h-4 w-full bg-no-repeat bg-dots"></div>
                <a className="tracking-wide text-sm whitespace-nowrap text-white text-center bg-soft-blue px-7 mx-10 py-3.5 font-medium rounded-md outline-soft-blue outline-2 hover:outline hover:bg-transparent hover:text-soft-blue transition-colors" href={href}>Add &amp; Install Extension</a>
            </div>
        </div>
    )
}