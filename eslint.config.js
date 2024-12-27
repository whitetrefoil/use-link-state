import {generateConfig} from '@whitetrefoil/eslint-config'


export default await generateConfig({
  type: 'react',
  ts  : {
    rootDir: import.meta.dirname,
  },
})
