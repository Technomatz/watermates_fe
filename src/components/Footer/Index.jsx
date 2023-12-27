/** @format */

import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* About Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">About Us</Typography>
            <ul>
              <li>About Us</li>
              <li>
                <Link href="https://www.bisleri.com/our-journey">
                  Our Journey
                </Link>
              </li>
              {/* ... Other links ... */}
              <li>
                <Link href="https://www.bisleri.com/annual-return">
                  Annual Return
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Brands */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Brands</Typography>
            <ul>
              <li>Brands</li>
              <li>
                <Link href="https://www.bisleri.com/bisleri-mineral-water">
                  Bisleri
                </Link>
              </li>
              {/* ... Other brand links ... */}
              <li>
                <Link href="https://www.bisleri.com/bisleri-soda">
                  Bisleri Soda
                </Link>
              </li>
            </ul>
          </Grid>

          {/* News Room */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">News Room</Typography>
            <ul>
              <li>News Room</li>
              <li>
                <Link href="https://www.bisleri.com/press-release">
                  Press Release
                </Link>
              </li>
              {/* ... Other news links ... */}
              <li>
                <Link href="https://www.bisleri.com/blogs">Blogs</Link>
              </li>
            </ul>
          </Grid>

          {/* Contact Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Contact</Typography>
            <ul>
              <li>Contact</li>

              <li className="email-address">
                Email:{" "}
                <Link href="mailto:wecare@bisleri.co.in">
                  wecare@bisleri.co.in
                </Link>
              </li>
              <li style={{ marginBottom: "10px" }}>
                Phone: <Link href="tel:18001211007">1800-121-1007</Link>
              </li>
              <li style={{ marginBottom: "10px" }}>8 AM to 8 PM </li>
              <li>Monday to Saturday </li>
            </ul>
          </Grid>
        </Grid>

        {/* Copyrights */}
        <Grid container justify="space-between">
          <Typography
            variant="body2"
            color="textSecondary"
            className="copyrights-text"
          >
            © COPYRIGHTS 2020-21
          </Typography>
          <ul className="sitemap-links">
            {/* ... Other sitemap links ... */}
            <li>
              <Link href="https://payments.billdesk.com/MercOnline/BisleriController">
                Online Payment
              </Link>
            </li>
            <li>
              <Link href="https://www.bisleri.com/compliance">Compliance</Link>
            </li>
            <li>
              <Link href="https://www.bisleri.com/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="https://www.bisleri.com/cookies-policy">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
