import React from 'react'
import '../Home/NewsLetter.css';

function NewsLetter() {
  return (
    <div className='NewsletterSection'>
       <h5 className="newslet">Get more out of your newsletter</h5>
       <form >
            <input type="text" placeholder='Email' />
            <button type='button'>Subscribe</button>
       </form>
       <p className='news'>No strings attached - No Credit card required</p>
    </div>
  )
}

export default NewsLetter
