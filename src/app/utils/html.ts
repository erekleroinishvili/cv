export function removeTags(html: string) {
    return html.replaceAll(/<[^<]*>/g, '')
}
