import React from 'react'
import mombasaimg from '../../assets/Beach.jpeg'
import '../Destination/Destination.css'
import { FaDollarSign } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import nakuruimg from '../../assets/Lake Nakuru.jpeg'
import masaimara from '../../assets/masaimara.jpeg'
import Naivasha from '../../assets/Naivasha.jpeg'
import Amboseli from '../../assets/Amboseli.jpeg'
import Girrafeimg from '../../assets/Girrafe Center.jpeg'
import FourteenFalls from '../../assets/Fourteen Falls.jpeg'
import Meuseum from '../../assets/meuseum.jpeg'



function Destination() {
  return (
    <div className='destinationSection'>
      <h1 className='destin'>Our Destination</h1>
       <div className="cards">
            <div className="card1">
              <div className="img">
                <img src={mombasaimg} alt="Coast image" />
              </div>
              <div className="info">
                <h3 className="namee">Mombasa Kenya</h3>
                <p className="infoo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, suscipit.</p>
                <div className="hold">
                <div className="rest">
                <p className="groupPrice">Group prize: <span><FaDollarSign />5000</span> </p>
                <p className="individualPrice">Individuals: <span><FaDollarSign />2000</span> </p>
                <p className="ratings2"><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></p>
                </div>
                <div className='viewss'>
                <button type="button" className='viewbtn'>View more</button>
                </div>
                </div>
              </div>
              
            </div>
            <div className="card1">
              <div className="img">
                <img src={nakuruimg} alt="Coast image" />
              </div>
              <div className="info">
                <h3 className="namee">Lake Nakuru</h3>
                <p className="infoo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, suscipit.</p>
                <div className="hold">
                <div className="rest">
                <p className="groupPrice">Group prize: <span><FaDollarSign />5000</span> </p>
                <p className="individualPrice">Individuals: <span><FaDollarSign />2000</span> </p>
                <p className="ratings2"><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></p>
                </div>
                <div className='viewss'>
                <button type="button" className='viewbtn'>View more</button>
                </div>
                </div>
              </div>
              
            </div>
            <div className="card1">
              <div className="img">
                <img src={masaimara} alt="masaimara image" />
              </div>
              <div className="info">
                <h3 className="namee">MasaiMara Park</h3>
                <p className="infoo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, suscipit.</p>
                <div className="hold">
                <div className="rest">
                <p className="groupPrice">Group prize: <span><FaDollarSign />5000</span> </p>
                <p className="individualPrice">Individuals: <span><FaDollarSign />2000</span> </p>
                <p className="ratings2"><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></p>
                </div>
                <div className='viewss'>
                <button type="button" className='viewbtn'>View more</button>
                </div>
                </div>
              </div>
              
            </div>
            <div className="card1">
              <div className="img">
                <img src={Naivasha } alt="Coast image" />
              </div>
              <div className="info">
                <h3 className="namee">Naivasha</h3>
                <p className="infoo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, suscipit.</p>
                <div className="hold">
                <div className="rest">
                <p className="groupPrice">Group prize: <span><FaDollarSign />5000</span> </p>
                <p className="individualPrice">Individuals: <span><FaDollarSign />2000</span> </p>
                <p className="ratings2"><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></p>
                </div>
                <div className='viewss'>
                <button type="button" className='viewbtn'>View more</button>
                </div>
                </div>
              </div>
              
            </div>
            <div className="card1">
              <div className="img">
                <img src={Amboseli} alt="Coast image" />
              </div>
              <div className="info">
                <h3 className="namee">Amboseli National Park</h3>
                <p className="infoo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, suscipit.</p>
                <div className="hold">
                <div className="rest">
                <p className="groupPrice">Group prize: <span><FaDollarSign />5000</span> </p>
                <p className="individualPrice">Individuals: <span><FaDollarSign />2000</span> </p>
                <p className="ratings2"><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></p>
                </div>
                <div className='viewss'>
                <button type="button" className='viewbtn'>View more</button>
                </div>
                </div>
              </div>
              
            </div>
            <div className="card1">
              <div className="img">
                <img src={Girrafeimg} alt="Coast image" />
              </div>
              <div className="info">
                <h3 className="namee">Girrafe Center</h3>
                <p className="infoo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, suscipit.</p>
                <div className="hold">
                <div className="rest">
                <p className="groupPrice">Group prize: <span><FaDollarSign />5000</span> </p>
                <p className="individualPrice">Individuals: <span><FaDollarSign />2000</span> </p>
                <p className="ratings2"><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></p>
                </div>
                <div className='viewss'>
                <button type="button" className='viewbtn'>View more</button>
                </div>
                </div>
              </div>
              
            </div>
            <div className="card1">
              <div className="img">
                <img src={FourteenFalls} alt="Fourteen Falls image" />
              </div>
              <div className="info">
                <h3 className="namee">Fourteen Falls</h3>
                <p className="infoo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, suscipit.</p>
                <div className="hold">
                <div className="rest">
                <p className="groupPrice">Group prize: <span><FaDollarSign />5000</span> </p>
                <p className="individualPrice">Individuals: <span><FaDollarSign />2000</span> </p>
                <p className="ratings2"><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></p>
                </div>
                <div className='viewss'>
                <button type="button" className='viewbtn'>View more</button>
                </div>
                </div>
              </div>
              
            </div>
            <div className="card1">
              <div className="img">
                <img src={Meuseum} alt="Nairobi National meuseum image" />
              </div>
              <div className="info">
                <h3 className="namee">Nairobi National Meusium</h3>
                <p className="infoo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, suscipit.</p>
                <div className="hold">
                <div className="rest">
                <p className="groupPrice">Group prize: <span><FaDollarSign />5000</span> </p>
                <p className="individualPrice">Individuals: <span><FaDollarSign />2000</span> </p>
                <p className="ratings2"><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></p>
                </div>
                <div className='viewss'>
                <button type="button" className='viewbtn'>View more</button>
                </div>
                </div>
              </div>
              
            </div>
       </div>
    </div>
  )
}

export default Destination
