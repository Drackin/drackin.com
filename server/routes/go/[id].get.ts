import links from "~/assets/links.json"

export default defineEventHandler(async (event) => {
    const linkCode = event.context.params!.id
    await sendRedirect(event, (links as any)[linkCode])
})