import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Caminho-base da publicação.
 * - Repositório de projeto (https://usuario.github.io/repo/): VITE_BASE_PATH=/repo/
 * - Domínio próprio ou usuario.github.io: VITE_BASE_PATH=/ (padrão)
 */
function normalizeBase(value: string | undefined): string {
  if (!value || value === '/') return '/'
  const withLeading = value.startsWith('/') ? value : `/${value}`
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`
}

export default defineConfig({
  base: normalizeBase(process.env.VITE_BASE_PATH),
  plugins: [react()],
})
