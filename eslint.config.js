import {generateConfig} from '@whitetrefoil/eslint-config'


export default await generateConfig({
  type: 'node',
  ts  : {
    rootDir: import.meta.dirname,
  },
})
