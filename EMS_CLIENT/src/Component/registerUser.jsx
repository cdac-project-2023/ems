import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast} from 'react-toastify'
import { registerUser as registerUserApi } from '../Service/user'

function RegisterUser() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [dob, setDob] = useState('')
  const [gender, setGender] = useState('')
  const [role, setRole] = useState('CUSTOMER') //check

  // get the navigation object
  const navigate = useNavigate()

  const registerUser = async () => {
    if (firstName.length == '') {
      toast.error('Please enter first name')
    } else if (lastName.length == '') {
      toast.error('Please enter last name')
    } else if (email.length == '') {
      toast.error('Please enter email')
    } else if (mobile.length == '') {
      toast.error('Please enter mobile')
    } else if (state.length == '') {
      toast.error('Please enter state')
    } else if (city.length == '') {
      toast.error('Please enter city')
    } else if (dob.length == '') {
      toast.error('Please enter Date Of Birth')
    } else if (gender.length == '') {
      toast.error('Please enter Gender')
    } else if (password.length == '') {
      toast.error('Please enter password')
    } else if (confirmPassword.length == '') {
      toast.error('Please confirm password')
    } else if (password !== confirmPassword) {
      toast.error('Password does not match')
    } else {
      // call register api
      const response = await registerUserApi(
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
      )

      // parse the response
      // response.flag()
      // if (response['status'] === 'success') {
        toast.success('Successfully registered a new user')

        // go back to login
        navigate('/')
      // } else {
          // toast.error('Error while registering a new user, please try again')
    //  }
    }
  }

  return (
    <form action="">

    <div>
      <h1 style={{ textAlign: 'center', margin: 10 }}>Register User</h1>

      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>First Name</label>
              <input
                type='text'
                required
                className='form-control'
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Last Name</label>
              <input
                type='text'
                required
                className='form-control'
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
                
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                type='email'
                required
                className='form-control'
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>City</label>
              <input
              required
                type='text'
                className='form-control'
                onChange={(e) => {
                  setCity(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>State</label>
              <input
              required
                type='text'
                className='form-control'
                onChange={(e) => {
                  setState(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Date Of Birth</label>
              <input
              required
                type='date'
                className='form-control'
                onChange={(e) => {
                  setDob(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Gender </label>&nbsp;&nbsp; <br/>
              <input type="radio" value="Male" name="gender" onChange={(e) => {setGender(e.target.value)}}/> Male&nbsp;&nbsp;
        <input type="radio" value="Female" name="gender" onChange={(e) => {setGender(e.target.value)}}/> Female&nbsp;&nbsp;
        <input type="radio" value="Other" name="gender" onChange={(e) => {setGender(e.target.value)}}/> Other
                
              
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Mobile Number</label>
              <input
              required
                type='text'  minLength={10} maxLength={10}
                className='form-control'
                onChange={(e) => {
                  var mobile=setMobile(e.target.value)
                }}
                />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input
                type='password'
                required
                pattern='/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g'
                className='form-control'
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Confirm Password</label>
              <input
              required
                type='password'
                className='form-control'
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <div className='mb-3'>
                Already got an account? <Link to='/'>Login here</Link>
              </div>
              <input type="submit" className='btn btn-success' onClick={registerUser}
              value="Register" />
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
  </form>
  )
}

export default RegisterUser
