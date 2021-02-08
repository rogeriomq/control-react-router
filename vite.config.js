import reactRefresh from '@vitejs/plugin-react-refresh'
import alias from '@rollup/plugin-alias'
import path from 'path'

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [
    reactRefresh(),
    alias({
      entries: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
    }),
  ],
}
