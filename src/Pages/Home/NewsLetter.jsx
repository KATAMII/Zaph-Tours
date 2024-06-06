import React from 'react'
import '../Home/NewsLetter.css';

function NewsLetter() {
  return (
    <div className='NewsletterSection'>
       <h3 className="newslet">Get more out of your newsletter</h3>
       <form >
            <input type="text" placeholder='Email' />
            <button type='button'>Signup for Free</button>
       </form>
       <p>No strings attached - No Credit card required</p>
    </div>
  )
}

export default NewsLetter
