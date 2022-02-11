# Hooks Utils

Utility hooks for React and React Native apps.

## Usage

`yarn add @blockmatic/hooks-utils`

```jsx
import { createContextHook } from '@blockmatic/hooks-utils'
import React from 'react'

const useHookFn = () => {
  const [state, setState] = React.useState(false)
  const toggle = () => setState(!state)
  return { state, toggle }
}

export const [useHook, HookProvider] = createContextHook(
  useHookFn,
  'You must wrap your application with <HookProvider /> in order to useHook().',
)
```
## Contributing

Read the [contributing guidelines](https://developers.blockmatic.io/open-source/contributing-guidelines) for details.
## Blockmatic

Blockmatic is building robust ecosystem of people and tools for development of blockchain applications.

[blockmatic.io](https://blockmatic.io)

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->

<!-- display the social media buttons in your README -->

[![Blockmatic Twitter][1.1]][1]
[![Blockmatic Facebook][2.1]][2]
[![Blockmatic Github][3.1]][3]

<!-- links to social media icons -->
<!-- no need to change these -->

<!-- icons with padding -->

[1.1]: http://i.imgur.com/tXSoThF.png 'twitter icon with padding'
[2.1]: http://i.imgur.com/P3YfQoD.png 'facebook icon with padding'
[3.1]: http://i.imgur.com/0o48UoR.png 'github icon with padding'

<!-- icons without padding -->

[1.2]: http://i.imgur.com/wWzX9uB.png 'twitter icon without padding'
[2.2]: http://i.imgur.com/fep1WsG.png 'facebook icon without padding'
[3.2]: http://i.imgur.com/9I6NRUm.png 'github icon without padding'

<!-- links to your social media accounts -->
<!-- update these accordingly -->

[1]: http://www.twitter.com/blockmatic_io
[2]: http://fb.me/blockmatic.io
[3]: http://www.github.com/blockmatic

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->
