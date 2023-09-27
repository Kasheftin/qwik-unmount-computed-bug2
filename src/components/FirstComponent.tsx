import { component$, useComputed$ } from '@builder.io/qwik'
import { type FirstData } from '~/routes'

export default component$(({ data }: { data: FirstData }) => {
  const output = useComputed$(() => data.key1.key1)
  return (
    <div>
      First data: { output }
    </div>
  )
})
