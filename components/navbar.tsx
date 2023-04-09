'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faMoon } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme()

    const currentTheme = theme === 'system' ? systemTheme : theme
    const isDark = currentTheme == 'dark'

    const handleThemeChange = () => {
        isDark ? setTheme('light') : setTheme('dark')
    }

    return (
        <nav className="flex h-6 w-full justify-between pt-6 pb-16 px-16">
            <Link href="/">
                <h1 className="text-2xl text-black dark:text-white underline underline-offset-4">
                    Gustavo C. Rodrigues
                </h1>
            </Link>
            <button
                onClick={handleThemeChange}
                className="text-sky-600 dark:text-white text-2xl h-12 w-12 border border-sky-600 dark:border-white rounded-full"
            >
                <FontAwesomeIcon icon={isDark ? faMoon : faLightbulb} />
            </button>
        </nav>
    )
}

export default Navbar
