import { IdentificationIcon } from '@heroicons/react/outline'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../Context/AuthContext'
import validations from './validations'
import styles from './styles.module.css'


const Signup = () => {
  const {
    currentUser,
    setCurrentUser,
    users,
    loggedIn,
    errors,
    setErrors,
    setIsSubmitting
  } = useAuth()

  const navigate = useNavigate()
  
  useEffect(() => {
    loggedIn && navigate('/')
  }, [loggedIn])

  const handleSignUpFormChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value })
  }

  const handleSignUpSubmit = (e) => {
    e.preventDefault()
    setErrors(validations(currentUser, users)) 
    setIsSubmitting(true)
    localStorage.setItem('user', JSON.stringify(currentUser))
    localStorage.setItem('users', JSON.stringify(users))
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.form}>
        <div>
          <h2 className={styles.title}>Sign Up</h2>
        </div>
        <form
          autoComplete="off"
          onSubmit={handleSignUpSubmit}
          className={styles.signUpForm}
        >
          <div className={styles.inputGroup}>
            <div>
            {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
              <label className='sr-only'>First Name</label>
              <input
                type="text"
                onChange={handleSignUpFormChange}
                value={currentUser.firstName}
                name="firstName"
                placeholder="First Name"
                className={styles.input}
              />
              
            </div>

            <div>
            {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
              <label className='sr-only'>Last Name</label>
              <input
                type="text"
                onChange={handleSignUpFormChange}
                value={currentUser.lastName}
                name="lastName"
                placeholder="Last Name"
                className={styles.input}
              />
              
            </div>
            <div>
            {errors.email && <span className={styles.error}>{errors.email}</span>}
              <label className='sr-only'>Email</label>
              <input
                type="email"
                onChange={handleSignUpFormChange}
                value={currentUser.email}
                name="email"
                placeholder="Email Address"className={styles.input}
              />
              
            </div>
            <div>
            {errors.password && <span className={styles.error}>{errors.password}</span>}
              <label className='sr-only'>Password</label>
              <input
                type="Password"
                onChange={handleSignUpFormChange}
                value={currentUser.password}
                name="password"
                placeholder="Password"
                className={styles.input}
              />
              
            </div>
            <div>
            {errors.passwordConfirm && <span className={styles.error}>{errors.passwordConfirm}</span>}
              <label className='sr-only'>Password Confirm</label>
              <input
                type="Password"
                onChange={handleSignUpFormChange}
                value={currentUser.passwordConfirm}
                name="passwordConfirm"
                placeholder="Password Confirm"
                className={styles.input}
              />
              
            </div>
            <div className={styles.linkBox}>
              <div className={styles.linkDiv}>
                <span>
                  Already have an account? Login{" "}
                  <Link to="/signin" >
                    {" "}
                    here.
                  </Link>
                </span>
              </div>
            </div>
            <div className='text-center'>
              <button type="submit" className={styles.button}>
                <IdentificationIcon
                  aria1-hidden="true"
                  className="my-auto h-5 w-6"
                />
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
