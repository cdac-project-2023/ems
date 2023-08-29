import axios from 'axios'
import { createUrl, log } from '../utils/utils'

export async function registerUser(
  firstName,
  lastName,
  email,
  password,
  mobile,
  gender,
  city,
  state,
  dob,
  role
) {
  const url = createUrl('/auth/signUp')
  const body = {
    firstName,
    lastName,
    email,
    password,
    mobNo:mobile,
    gender,
    city,
    state,
    dob,
    role
  }

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url, body)
    log(response.data)
    return response.data
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function loginUser(email, password) {
  const url = createUrl('/auth/signIn')
  const body = {
    email,
    password,
  }

  // wait till axios is making the api call and getting response from server
  try {
    const response = await (await axios.post(url, body))
    log(response.data)
    return response.data
  } catch (ex) {
    log(ex)
    return null
  }
}
