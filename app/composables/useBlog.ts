import { blogPosts, type BlogPost } from '~/data/blog'

export function useBlog() {
  function all(): BlogPost[] {
    return blogPosts
  }

  function featured(): BlogPost[] {
    return blogPosts.filter(p => p.featured)
  }

  function findBySlug(slug: string): BlogPost | null {
    return blogPosts.find(p => p.slug === slug) ?? null
  }

  function related(slug: string, limit: number = 3): BlogPost[] {
    return blogPosts.filter(p => p.slug !== slug).slice(0, limit)
  }

  function query() {
    let result = [...blogPosts]

    return {
      where(key: keyof BlogPost, op: '=' | '!=', value: unknown) {
        if (op === '=') result = result.filter(p => p[key] === value)
        else result = result.filter(p => p[key] !== value)
        return this
      },
      limit(n: number) {
        result = result.slice(0, n)
        return this
      },
      all() {
        return result
      },
      first() {
        return result[0] ?? null
      },
    }
  }

  return { all, featured, findBySlug, related, query }
}
