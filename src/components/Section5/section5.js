import imagencontacto from "../../img-pin/contact-image.png"
function Section5() {
    return(
    <div id="contact">
        <form  action="" method="POST" id="form">
              <div className="form">
                  <h2 className="contact-title">Get in touch <span>We are hiring!</span></h2>
                  <div className="campo">
                      <input type="text" name="" id="" required/><span class="bar"></span>
                      <label for="">Name</label>
                  </div>
                <div className="campo">
                      <input type="email" name="" id="" required/><span class="bar"></span>
                      <label for="">Email</label>
                </div>
                  <div className="campo">
                      <input type="text" name="" id="" required/><span class="bar"></span>
                      <label for="">Phone</label>
                  </div>
                <div class="campo">
                      <textarea name="" id="" cols="20" rows="4" required/><span class="bar"></span>
                      <label for="">Message</label>
                </div>
                  <button type="submit" className="btn-submt">Send</button>
              </div>
        </form>
          <div className="contact-img">
            <img src={imagencontacto} alt="" className="img-sec5"/>
          {/* <img src="./img-pin/contact-image.png" alt="" className="img-sec5"/> */}
          </div>    
    </div>)
    
}
export default Section5;