import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewBook = () => {
  const [data,changeData] =  useState(
    [
      { "title": "The Alchemist", "avadar": "https://images.openai.com/static-rsc-4/4yFQ-hg7EWZNqK28bXlfThrJi_yn7-C74X0HYj3tFEuuJA8QAB_7uX8PzYh2o08MvdARWsOe9CnXnNhJwjGuu8clTAEMdwnsaFDnlBuClTz10WufqJwmvuIHh1iHAqvx_fF6v0Zr2DUFBnrpjPF6gjQGAtpH6apCR_aAj0EwDRX5__9zgnuAktAA79UC3Xt2?purpose=fullsize", "author": " Paulo Coelho", "description": "The Alchemist is a philosophical novel by Paulo Coelho that follows a young Andalusian shepherd on a journey in search of treasure and personal fulfillment.", "price": "250" },
      { "title": "The Fault in Our Stars", "avadar": "https://m.media-amazon.com/images/I/A1c9bOWb6RL._AC_UF1000,1000_QL80_.jpg", "author": "John Green", "description": "The Fault in Our Stars is a 2012 young adult novel by John Green that follows two teenagers living with cancer who develop a profound romantic relationship.", "price": "320" },
      { "title": "It Ends with Us", "avadar": "https://images.openai.com/static-rsc-4/yeTJJT_oCGINtKU8eWhOkSzlOzHH68YWJ05YmcO6Vk510mmceNOQD6PKK-2xDfkv5KA3-Kb3Y-Qq_vpD4rm5UsjDokaifIEhcEOcUFBpRMmWX84l7HbaZfwQ4CWZeR1nYx7J58luxMRIYtl-8tI3nBfREzPFkicgkuQYir2rmAp4W2-AQx7J-QTdBauHE6s7?purpose=fullsize", "author": "Colleen Hoover", "description": "It Ends with Us is a 2016 romance and contemporary fiction novel by Colleen Hoover. While it begins with the framework of a love story, it is best known for its exploration of domestic violence in breaking cycles of abuse.", "price": "400" },
      { "title": "The Silent Patient", "avadar": "https://images.openai.com/static-rsc-4/i2b1KYYYSlDLyVgMDNjRHl2zIq5_hhYakKia3_Bpa5yJtEBCsnLybPRr2odBP88JhIVN_doI_51UyfKv8ergcwI2XlwRBNiDEnDLHCroZxdDzmLwupDyLsO_IMWeMvE04N0Gihcx7s2vsG2Y_XqgScnWHiqXU9eMnheG3AxUzv392HlZCLMikAHiC92ntZqq?purpose=fullsize", "author": "Alex Michaelides", "description": "The Silent Patient is a psychological thriller novel by Alex Michaelides, first published in 2019.", "price": "230" },
      { "title": "Gone Girl", "avadar": "https://images.openai.com/static-rsc-4/7Iv2OxwsIWjlfWQzW4wJfI89bfGsguhy-F1CM08vRmpjg4FfsnTBCTyMznOJOnRYEeyT-vT_kyVlYNHginpNzzeP-pz0MhzEwg383eOh6GbEpZ5SaA_zHZsHjmw5cXHyt_XfSYGDkqW-fE1igmw0GpHFwXVP472wr0qIL0QlEfnrEqHiyFOWKtMZlqy0tgMM?purpose=fullsize", "author": "Gillian Flynn", "description": "The novel became a major bestseller and is widely credited with helping popularize a new wave of domestic and psychological thrillers", "price": "200" },
      { "title": "The Girl with the Dragon Tattoo", "avadar": "https://images.openai.com/static-rsc-4/HJ4Gxno9x_KHsG1W6-gncT91qaFoylOme6PG8bfj0CzgVchOOnUCbv5aRd5qJvfrOCcG036_gNCT4DcYr-OjQNfcqIntiFWGwGqs0rHeJej0O0Og2nEe98i0pGfv1bg5G6nTUBa44NHJe5iMk_UKIZkgFiVuX96k5C00LJzUA3UdvO1f8FV8suazO9rLpW5C?purpose=fullsize", "author": "Stieg Larsson", "description": "he Girl with the Dragon Tattoo is a bestselling Swedish crime thriller novel by Stieg Larsson, originally published posthumously in 2005", "price": "190" },
      { "title": "The Monk Who Sold His Ferrari", "avadar": "https://images.openai.com/static-rsc-4/SATT2HP3EuTJEAWl82AcuPVKjoqgGlkX7pnkQ_nOtU894oV8HaNaJXIOwbkWphHcWY3SK8Aj37aOHg-qjz9I_Fx87DKQkG_8WC1jFhSXbymzpT3LwmTOklHkoDA5I_GAIcmTzFUll2I8N4guK0q7eYGEyFEL8Kxg1J-rS-ADe5v3YrvpVszW3Sr-1k56r3Pl?purpose=fullsize", "author": "Robin Sharm", "description": "First published in the late 1990s, it combines fiction and life lessons through a parable about success, fulfillment, and inner growth.", "price": "240" },
      { "title": "Siddhartha", "avadar": "https://images.openai.com/static-rsc-4/XpP1cE4cSHZegQKs8KN_nk7SC-WNGwUVd7JLZBcnzpYa1W82MqIdDbzaNeFW7tqgvrorNgyQMKvd5E2fX_FWKjJhCl_WpFE4L3yaPzmhbCx8qDu6JmQ8Z3uIRoFFaVw870VQbtdCxdeyvg-HjazTm1dVBfTIDIuMRnH_lFuuQT7cdUX_r1i0RdkAazlpYwgl?purpose=fullsize", "author": "Hermann Hesse", "description": "Siddhartha is a 1922 philosophical novel by Hermann Hesse that follows a young man's spiritual journey in ancient India during the era of the Buddha.", "price": "160" }
    ]
  )
  return (
    <div>
      <NavigationBar />
      <div className="containter">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl 12 col-xxl-12">
            <div className="card shadow">
              <div className="card-header bg-primary text-white text-center">
                <h3>View All</h3>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  <div class="row row-cols-1 row-cols-md-4 g-4">

                    {data.map(
                      (value, index) => {
                        return (
                          <div class="col">
                            <div class="card">
                              <img src={value.avadar} class="card-img-top" alt="..." height="200" />
                              <div class="card-body">
                                <h5 class="card-title">Title : {value.title}</h5>
                                <p class="card-text">{value.description}</p>
                                <p class="card-text"><strong>Author : {value.author}</strong></p>
                                <p class="card-text"><strong>Price : {value.price}</strong></p>
                                <a href="#" class="btn btn-primary">Add to cart</a>
                              </div>
                            </div>
                          </div>
                        )
                      }
                    )}



                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewBook