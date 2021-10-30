addEventListener('scheduled', event => {
  event.waitUntil(
    handleSchedule(event.scheduledTime)
  )
})

async function handleSchedule(scheduledDate) {
  console.log("Attesting")
  await fetch('https://api.mit.edu/pass-v1/pass/attestations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer *****************'
    },
    body: '{"answers":[{"id":"14","checked":false},{"id":"16","checked":true},{"id":"18","checked":false}]}'
  })
}
