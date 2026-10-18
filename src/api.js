// Backend base URL. Override per environment with VITE_API_URL in a .env file.
export const API_URL = (import.meta.env.VITE_API_URL || 'https://cuuure-production.up.railway.app').replace(/\/+$/, '')

export async function createBookingRequest({ name, phone, service }) {
  let res
  try {
    res = await fetch(API_URL + '/api/public/booking-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, service }),
    })
  } catch {
    throw new Error('Could not reach the server. Please check your connection and try again.')
  }
  const data = await res.json().catch(() => ({}))
  if (!res.ok || !data.success) throw new Error(data.message || 'Something went wrong. Please try again.')
  return data
}
