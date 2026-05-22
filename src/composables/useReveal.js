// composables/useReveal.js
// Adds IntersectionObserver-based scroll reveal to .reveal elements

export function useReveal() {
  function init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      })
    }, { threshold: 0.12 })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
  }

  return { init }
}
