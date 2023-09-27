import { $, component$, useSignal } from '@builder.io/qwik'
import FirstComponent from '~/components/FirstComponent'
import SecondComponent from '~/components/SecondComponent'

export type FirstData = {
  key1: { key1: string }
}

export type SecondData = {
  key2: { key2: string }
}

type DataWithType = {
  type?: 'first' | 'second'
  data?: FirstData | SecondData
}

export default component$(() => {
  const data = useSignal<DataWithType>({})

  const reset = $(() => {
    data.value = {}
  })

  const setFirst = $(() => {
    data.value = {
      type: 'first',
      data: {
        key1: {
          key1: 'value1'
        }
      }
    }
  })

  const setSecond = $(() => {
    data.value = {
      type: 'second',
      data: {
        key2: {
          key2: 'value2'
        }
      }
    }
  })

  return (
    <div>
      <div>
        <button onClick$={reset}>
          reset
        </button>
        <button onClick$={setFirst}>
          set first
        </button>
        <button onClick$={setSecond}>
          set second
        </button>
      </div>
      {data.value.type === 'first' ? (
        <FirstComponent data={data.value.data as FirstData} />
      ) : null}
      {data.value.type === 'second' ? (
        <SecondComponent data={data.value.data as SecondData} />
      ) : null}
    </div>
  )
})
