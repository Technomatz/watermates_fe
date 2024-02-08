import { Box, Typography } from '@mui/material';
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';

function Footer() {
  return (
    <>
      <Box style={{}}>
        <Box className="parentDiv">
          <Box className="internalparentDiv" sx={{ position: 'relative' }}>
            <Box className="childDiv">
              <h2 className="footerheadeing">About us</h2>
              <ul>
                <li>
                  <Link>Our Journey </Link>
                </li>

                <li>
                  <Link>Leadership Team</Link>
                </li>
                <li>
                  <Link>Careers</Link>
                </li>
                <li>
                  <Link>Book a plant visit </Link>
                </li>
                <li>
                  <Link> Terms & Conditions </Link>
                </li>
                <li>
                  <Link>Cancelation & Refund Policy </Link>
                </li>
                <li>
                  <Link> FAQs </Link>
                </li>
              </ul>
            </Box>
            <Box className="childDiv">
              <h4 className="footerheadeing">Brands</h4>
              <ul>
                <li>
                  <Link>Bisleri</Link>{' '}
                </li>
                <li>
                  <Link>Vedica </Link>{' '}
                </li>

                <li>
                  <Link>Bisleri Soda</Link>{' '}
                </li>
              </ul>
              <h4 className="footerheadeing">News Rooms</h4>
              <ul>
                <li>
                  <Link>Press Release </Link>
                </li>
                <li>
                  <Link>News </Link>
                </li>
                <li>
                  <Link>Blogs </Link>
                </li>
              </ul>
            </Box>
            <Box className="childDiv">
              <Box className="childDiv">
                <h4 className="footerheadeing">Become a Distributor</h4>
                <ul>
                  <Link>
                    <li>Apply for Bisleri Leadership</li>
                  </Link>
                </ul>
              </Box>
              <br />
              <Box>
                <h4 className="footerheadeing">
                  {' '}
                  <Link> Greener Promise </Link>
                </h4>
              </Box>
            </Box>

            <Box
              className="childDiv contactBox"
              sx={{ display: 'flex', flexDirection: 'row' }}
            >
              <Box>
                <h4 className="footerheadeing">Contact</h4>
                <ul style={{ marginTop: '15px' }}>
                  <li>
                    <Link>Bisleri Internation Pvt. Ltd. </Link>
                  </li>
                  <li>
                    <Link>CTS No. 525/1A/1 , Western Express Highway, </Link>
                  </li>
                  <li>
                    <Link>Opp Hindustan Uniliver, at Chakala </Link>
                  </li>
                  <li>
                    <Link>division,</Link>
                  </li>
                  <li>
                    <Link>Andheri (East) , Mumbai - 400 099 </Link>
                  </li>
                </ul>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  marginLeft: '30px',
                }}
              >
                <span className="contact">Email : </span>{' '}
                <span>watermates@gmail.com</span>
                <span className="contact">Phone : </span>{' '}
                <span>1800-121-1001</span>
                <h6> 8 Am To 8 PM</h6>
                <h6> Monday To Saturday</h6>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                  <Facebook className="facebook-icon" />
                  <Twitter className="twitter-icon" />
                  <Instagram className="instagram-icon" />
                  <YouTube className="youtube-icon" />
                </Box>
              </Box>
            </Box>
            <Box sx={{ position: 'absolute', bottom: '0', left: '40%' }}>
              <Typography>@2024 all right reserved</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
