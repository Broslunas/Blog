interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Broslunas', // Site author
	title: 'Broslunas Blog', // Site title.
	description: 'Un blog de Broslunas', // Description to display in the meta tags
	lang: 'es_ES',
	ogLocale: 'es_ES',
	shareMessage: 'Compartir esta publicación', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
