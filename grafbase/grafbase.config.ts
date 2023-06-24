import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string(),
  email: g.string().unique(),
  description: g.string().optional(),
  avatarUrl: g.url(),
  linkedInUrl: g.url().optional(),
  githubUrl: g.url().optional(),
  projects:g.relation(() => Project).list().optional(),
})

const Project = g.model('Project', {
  title: g.string().length({ min: 3, max: 100 }),
  description: g.string().length({ min: 3, max: 1000 }),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),

})

export default config({
  schema: g
})
