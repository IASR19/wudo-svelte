import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
  default: async ({ locals, request }) => {
    const data = await request.formData()
    const email = data.get('email') || ''
    const password = data.get('password') || ''

    if(!(email instanceof File) && !(password instanceof File)) {
      let user
      try {
        user = await locals.pb.collection("users").authWithPassword(email, password)
        console.log('logged user:', user)
      } catch(err) {
        console.error(err)
      }
      if(user) {
        throw redirect(301, '/ambiente')
      } else {
        return { success: false }
      }
    } else {
      return { success: false }
    }
  }
} satisfies Actions;