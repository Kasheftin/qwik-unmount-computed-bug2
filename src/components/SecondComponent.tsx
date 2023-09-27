import { component$, useComputed$ } from '@builder.io/qwik'
import { type SecondData } from '~/routes'

export default component$(({ data }: { data: SecondData }) => {
  const output = useComputed$(() => data.key2.key2)
  return (
    <div>
      Second data: { output }
    </div>
  )
})
