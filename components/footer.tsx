import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="p-8">
            All rights reserved © Gustavo C. Rodrigues {currentYear}
        </footer>
    )
}

export default Footer
