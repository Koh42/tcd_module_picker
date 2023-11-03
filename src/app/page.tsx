'use client'
import type { Module } from './types'
import { modules } from './data'
import { ChangeEventHandler, MouseEventHandler, useEffect, useId, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'


function ModuleItem({ module, checked, onChanged, onCategoryClick }
  : { module: Module, checked: boolean, onChanged: ChangeEventHandler<HTMLInputElement>, onCategoryClick: MouseEventHandler<HTMLSpanElement> }) {
  const elementId = useId();
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value={module.type === 'Major' ? 1 : .5} id={elementId} onChange={onChanged} checked={checked} />
      <span className={`badge bg-${module.type === 'Major' ? 'primary' : 'secondary'}`} onClick={onCategoryClick}>{module.category}</span>&nbsp;
      <label className="form-check-label" htmlFor={elementId}>
        {module.name}
      </label>
    </div>
  )
}

function Title({ amount }: { amount: number }) {
  const textColor = amount < 7 ? 'text-danger' : amount <= 9.5 ? 'text-success' : 'text-warning'
  return (
    <div className="row">
      <h1>ft_transcendence v14</h1>
      <p className={textColor}>{amount} major modules equivalent selected.&nbsp;
        {amount < 7 && <>{7 - amount} more needed for 100% project completion.</>}
        {(amount >= 7 && amount <= 9.5) && <>{100 + (amount - 7) * 10}% project completion.</>}
        {amount > 9.5 && <>125% with {amount - 9.5} modules extra</>}
      </p>
    </div>
  )
}

function defaultSelection(checked = false) {
  return new Array(modules.length).fill(checked)
}

function selectToInt(array: boolean[]) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      sum += 2 ** i;
    }
  }
  return sum;
}

function intToSelect(arraySize: number, state: number) {
  const array = new Array(arraySize).fill(false)
  for (let i = 0; i < array.length; i++) {
    if (state & 2 ** i) {
      array[i] = true;
    }
  }
  return array;
}

export default function Home() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const urlState = parseInt(searchParams.get('state') ?? '-1')
  const [checkeds, setChecks] = useState(defaultSelection())

  // url triggers loading state from url
  useEffect(() => {
    const currentState = selectToInt(checkeds)
    if (urlState == currentState) return; // prevent infinite loop
    console.log('load state', urlState, currentState)
    setChecks(intToSelect(modules.length, urlState))
  }, [urlState])

  function gotoState(array: boolean[]) {
    const currentState = selectToInt(array)
    router.push('/?state=' + currentState)
  }

  function toggle(i: number) {
    const newChecks = [...checkeds]
    newChecks[i] = !newChecks[i]
    gotoState(newChecks)
  }

  function toggleCategory(index: number) {
    const newChecks = [...checkeds]
    const selected = !newChecks[index]
    const category = modules[index].category
    for (let i = 0; i < modules.length; i++) {
      if (modules[i].category === category) {
        newChecks[i] = selected
      }
    }
    gotoState(newChecks)
  }

  return (
    <main className="container">
      <Title amount={parseFloat(checkeds.reduce((a, c, i) => a + c * (modules[i].type === 'Major' ? 1 : 0.5), 0))} />
      {modules.map((module, i) =>
        <ModuleItem key={`mod${i}`}
          module={module}
          checked={checkeds[i]}
          onChanged={_ => toggle(i)}
          onCategoryClick={_ => toggleCategory(i)}
        />
      )}

      {checkeds.some(x => x) &&
        <p><a href="#" role="button" onClick={e => { e.preventDefault(); gotoState(defaultSelection()); }}>Reset Selection</a></p>
      }
      {!checkeds.some(x => x) &&
        <p><a href="#" role="button" onClick={e => { e.preventDefault(); gotoState(defaultSelection(true)); }}>Select All</a></p>
      }
      <p>* Two <span className="badge bg-secondary">Minor</span> Modules are equivalent to one <span className="badge bg-primary">Major</span> Module.
      </p>

    </main>
  )
}
