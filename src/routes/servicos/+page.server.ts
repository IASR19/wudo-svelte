/** @type {import('./$types').PageLoad} */
export async function load({ locals }) {
  const services = await locals.pb.collection('service').getList()

  return {
    services: structuredClone(services)
  }
}