import { templates, type Template } from '~/data/templates'

export function useTemplates() {
  function all(): Template[] {
    return templates
  }

  function where(key: keyof Template, op: '=' | '!=', value: unknown): Template[] {
    if (op === '=') return templates.filter(t => t[key] === value)
    return templates.filter(t => t[key] !== value)
  }

  function query() {
    let result = [...templates]

    return {
      where(key: keyof Template, op: '=' | '!=', value: unknown) {
        if (op === '=') result = result.filter(t => t[key] === value)
        else result = result.filter(t => t[key] !== value)
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

  return { all, where, query }
}
