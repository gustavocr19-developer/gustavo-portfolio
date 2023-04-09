import useSWR from 'swr'
import { Poppins } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faYoutube,
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
const poppins = Poppins({ subsets: ['latin'], weight: '500' })

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json())

export default function Home() {
    const { data, error } = useSWR('/api/staticdata', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <main className={`${poppins.className} flex w-full justify-around`}>
            <div className="flex flex-col p-8 max-w-3xl gap-y-16">
                <div className="flex flex-col gap-y-7">
                    <h2 className="text-lg text-blue-600 dark:text-white">
                        {data.greetings}
                    </h2>
                    <h1 className="text-5xl text-blue-600 dark:text-white">
                        {data.name}
                    </h1>
                    <p className="text-lg text-neutral-700">
                        {data.description}
                    </p>
                </div>
                <div className="relative border border-slate-200 rounded p-8">
                    <span className="absolute mt-[-50px] text-lg bg-white text-black rounded p-0.5 uppercase">
                        {data.contact.title}
                    </span>
                    <div className="flex gap-x-4 text-5xl mb-4">
                        <a
                            href="https://www.linkedin.com/in/gustavorodrigues-dev/"
                            className="hover:text-sky-600"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a
                            href="https://twitter.com/gu_crodrigues"
                            className="hover:text-sky-600"
                        >
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a
                            href="https://www.youtube.com/@gu_crodrigues"
                            className="hover:text-sky-600"
                        >
                            <FontAwesomeIcon className="" icon={faYoutube} />
                        </a>
                        <a
                            href="https://github.com/gustavocr19-developer"
                            className="hover:text-sky-600"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                    <p className="text-lg text-neutral-700">
                        {data.contact.message}
                    </p>
                </div>
            </div>
            <div className="flex items-center">
                <Image
                    className="rounded-lg"
                    src="/gustavo-profile.jpeg"
                    alt="Gustavo"
                    width={350}
                    height={350}
                />
            </div>
        </main>
    )
}
