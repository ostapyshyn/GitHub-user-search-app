import axios from 'axios'

export interface User {
  name: string
  login: string
  followers: number
  public_repos: number
  following: number
  location: string
  blog: string
  company: string
  twitter_username: string
  bio: string
  created_at: string
  avatar_url: string
}

export async function fetchUser(name: string) {
  const { data } = await axios.get<User>(`https://api.github.com/users/${name}`)
  return data
}
