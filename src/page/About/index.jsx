import React from 'react'
import './style.scss'
import img from '../../assets/banner2.png'
import img2 from '../../assets/banner3.png'
function About() {
    return (
        <div className="about row mt-5 container p-2 m-0 mt-md-3">
            <div className="col-12 col-md-6"> 
            <h4 className="about-title ">About us</h4>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti rem, laboriosam at magni iste perspiciatis. Sunt ab aut, praesentium quis magnam id expedita modi qui cupiditate quisquam facilis neque? Corrupti?</p>
            <h4 className="about-title  ">Mission</h4>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti rem, laboriosam at magni iste perspiciatis. Sunt ab aut, praesentium quis magnam id expedita modi qui cupiditate quisquam facilis neque? Corrupti?</p>
            <h4 className="about-title ">Vision</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti rem, laboriosam at magni iste perspiciatis. Sunt ab aut, praesentium quis magnam id expedita modi qui cupiditate quisquam facilis neque? Corrupti?</p>

            </div>
        

            <div className="col-12 col-md-6"> 
            <img src={img} alt="" />
            <img src={img2} alt="" />
            </div>
        </div>
    )
}

export default About
