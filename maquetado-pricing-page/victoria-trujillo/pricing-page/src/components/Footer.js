import React from 'react';

function Footer(){
    return (
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="row text-center">
            
                <div className="col-3 col-md">
                    <h5>Company</h5>
                    <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Team</a></li>
                    <li><a className="text-muted" href="#">History</a></li>
                    <li><a className="text-muted" href="#">Contac us</a></li>
                    <li><a className="text-muted" href="#">Locations</a></li>
                    </ul>
                </div>
                
                <div className="col-3 col-md">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Cool stuff</a></li>
                    <li><a className="text-muted" href="#">Random feature</a></li>
                    <li><a className="text-muted" href="#">Team feature</a></li>
                    <li><a className="text-muted" href="#">Developer stuff</a></li>
                    <li><a className="text-muted" href="#">Another one</a></li>
                    </ul>
                </div>
                
                <div className="col-3 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Resource</a></li>
                    <li><a className="text-muted" href="#">Resource name</a></li>
                    <li><a className="text-muted" href="#">Another resource</a></li>
                    <li><a className="text-muted" href="#">Final resource</a></li>
                    </ul>
                </div>
                
                <div className="col-3 col-md">
                    <h5>Legal</h5>
                    <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Privay policy</a></li>
                    <li><a className="text-muted" href="#">Terms of use</a></li>
                    </ul>
                </div>

            </div>
      </footer>
    )
}
export default Footer;