import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
  default: async ({ locals, request }) => {
    const data = await request.formData()

    let user
    try {
      user = await locals.pb.collection('users').create(data)
      console.log('new user:', user)
    } catch(err) {
      console.error(err)
    }

    if(user) {
      throw redirect(301, '/login')
    } else {
      return { success: false }
    }
  }
} satisfies Actions;