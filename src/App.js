import React from 'react'
import { useState } from 'react'

export default () => {
  const consonants = [
    'Б',
    'В',
    'Г',
    'Д',
    'Ж',
    'З',
    'К',
    'Л',
    'М',
    'Н',
    'П',
    'Р',
    'С',
    'Т',
    'Ф',
    'Х',
    'Ц',
    'Ч',
    'Ш',
    'Щ',
  ]
  const vowels = ['А', 'Е', 'Ё', 'И', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я']

  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  const newSlog = () => {
    const t =
      consonants[getRandomInt(consonants.length)] +
      vowels[getRandomInt(vowels.length)]
    return t
  }

  const downHandler = ({ key }) => {
    if (key === ' ') {
      setSlog(newSlog())
      window.removeEventListener('keydown', downHandler)
    }
  }
  const [slog, setSlog] = useState('...')

  window.addEventListener('keydown', downHandler)

  return (
    <div className="container">
      <p className="slog">{slog}</p>
    </div>
  )
}
