import { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'

function SimpleSlider({ slides, interval = 5500, renderSlide }) {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    if (slides.length <= 1) return undefined
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, interval)
    return () => clearInterval(timerRef.current)
  }, [interval, slides.length])

  const goto = (i) => setIndex((i + slides.length) % slides.length)

  return (
    <div className="relative">
      <div className="relative h-full">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`transition-all duration-700 ${
              i === index ? 'opacity-100 translate-x-0 relative' : 'opacity-0 -translate-x-6 absolute inset-0 pointer-events-none'
            }`}
          >
            {renderSlide(slide, i === index)}
          </div>
        ))}
      </div>
      {slides.length > 1 && (
        <div className="mt-4 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goto(i)}
              className={`h-2 w-8 rounded-full transition ${
                i === index ? 'bg-white/90' : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Aller au slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

SimpleSlider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.any).isRequired,
  interval: PropTypes.number,
  renderSlide: PropTypes.func.isRequired,
}

export default SimpleSlider
