import type { Post } from '$lib/types'

export async function load({ fetch }) {
	const response = await fetch('api/posts')
	const posts: Post[] = await response.json()
    const events = posts.filter( post => {  return post.categories.includes("agenda") })
	return { posts: events }
}