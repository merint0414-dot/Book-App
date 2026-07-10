import React from 'react'
import NavigationBar from './NavigationBar'

const ViewBook = () => {
  return (
    <div>
      <NavigationBar />
      <div className="containter">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl 12 col-xxl-12">
            <div className="card shadow">
              <div class="card-header bg-primary text-white text-center">
                        <h3>View All</h3>
                    </div>
              <div className="card-body">
                <div className="row g-3">
                  <div class="row row-cols-1 row-cols-md-4 g-4">

                    <div class="col">
                      <div class="card">
                        <img src="https://images.openai.com/static-rsc-4/4yFQ-hg7EWZNqK28bXlfThrJi_yn7-C74X0HYj3tFEuuJA8QAB_7uX8PzYh2o08MvdARWsOe9CnXnNhJwjGuu8clTAEMdwnsaFDnlBuClTz10WufqJwmvuIHh1iHAqvx_fF6v0Zr2DUFBnrpjPF6gjQGAtpH6apCR_aAj0EwDRX5__9zgnuAktAA79UC3Xt2?purpose=fullsize" class="card-img-top" alt="..." height="200" />
                        <div class="card-body">
                          <h5 class="card-title">Title : The Alchemist</h5>
                          <p class="card-text">The Alchemist is a philosophical novel by Paulo Coelho that follows a young Andalusian shepherd on a journey in search of treasure and personal fulfillment. </p>
                          <p class="card-text"><strong>Author : Paulo Coelho</strong></p>
                          <p class="card-text"><strong>Price : 250</strong></p>
                          <a href="#" class="btn btn-primary">Add to cart</a>
                        </div>
                      </div>
                    </div>

                    <div class="col">
                      <div class="card">
                        <img src="https://m.media-amazon.com/images/I/A1c9bOWb6RL._AC_UF1000,1000_QL80_.jpg" class="card-img-top" alt="..." height="200" />
                        <div class="card-body">
                          <h5 class="card-title">Title : The Fault in Our Stars</h5>
                          <p class="card-text">The Fault in Our Stars is a 2012 young adult novel by John Green that follows two teenagers living with cancer who develop a profound romantic relationship.</p>
                          <p class="card-text"><strong>Author : John Green</strong></p>
                          <p class="card-text"><strong>Price : 350</strong></p>
                          <a href="#" class="btn btn-primary">Add to cart</a>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card">
                        <img src="https://images.openai.com/static-rsc-4/yeTJJT_oCGINtKU8eWhOkSzlOzHH68YWJ05YmcO6Vk510mmceNOQD6PKK-2xDfkv5KA3-Kb3Y-Qq_vpD4rm5UsjDokaifIEhcEOcUFBpRMmWX84l7HbaZfwQ4CWZeR1nYx7J58luxMRIYtl-8tI3nBfREzPFkicgkuQYir2rmAp4W2-AQx7J-QTdBauHE6s7?purpose=fullsize" class="card-img-top" alt="..." height="200" />
                        <div class="card-body">
                          <h5 class="card-title">Title : It Ends with Us</h5>
                          <p class="card-text">It Ends with Us is a 2016 romance and contemporary fiction novel by Colleen Hoover. While it begins with the framework of a love story, it is best known for its exploration of domestic violence in breaking cycles of abuse. </p>
                          <p class="card-text"><strong>Author : Colleen Hoover</strong></p>
                          <p class="card-text"><strong>Price : 200</strong></p>
                          <a href="#" class="btn btn-primary">Add to cart</a>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card">
                        <img src="https://images.openai.com/static-rsc-4/i2b1KYYYSlDLyVgMDNjRHl2zIq5_hhYakKia3_Bpa5yJtEBCsnLybPRr2odBP88JhIVN_doI_51UyfKv8ergcwI2XlwRBNiDEnDLHCroZxdDzmLwupDyLsO_IMWeMvE04N0Gihcx7s2vsG2Y_XqgScnWHiqXU9eMnheG3AxUzv392HlZCLMikAHiC92ntZqq?purpose=fullsize" class="card-img-top" alt="..." height="200" />
                        <div class="card-body">
                          <h5 class="card-title">Title : The Silent Patient</h5>
                          <p class="card-text">The Silent Patient is a psychological thriller novel by Alex Michaelides, first published in 2019. </p>
                          <p class="card-text"><strong>Author : Alex Michaelides</strong></p>
                          <p class="card-text"><strong>Price : 400</strong></p>
                          <a href="#" class="btn btn-primary">Add to cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                      <div class="card">
                        <img src="https://images.openai.com/static-rsc-4/7Iv2OxwsIWjlfWQzW4wJfI89bfGsguhy-F1CM08vRmpjg4FfsnTBCTyMznOJOnRYEeyT-vT_kyVlYNHginpNzzeP-pz0MhzEwg383eOh6GbEpZ5SaA_zHZsHjmw5cXHyt_XfSYGDkqW-fE1igmw0GpHFwXVP472wr0qIL0QlEfnrEqHiyFOWKtMZlqy0tgMM?purpose=fullsize" class="card-img-top" alt="..."  height="200"/>
                        <div class="card-body">
                          <h5 class="card-title">Title : Gone Girl</h5>
                          <p class="card-text">The novel became a major bestseller and is widely credited with helping popularize a new wave of domestic and psychological thrillers </p>
                          <p class="card-text"><strong>Author : Gillian Flynn</strong></p>
                          <p class="card-text"><strong>Price : 250</strong></p>
                          <a href="#" class="btn btn-primary">Add to cart</a>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card">
                        <img src="https://images.openai.com/static-rsc-4/HJ4Gxno9x_KHsG1W6-gncT91qaFoylOme6PG8bfj0CzgVchOOnUCbv5aRd5qJvfrOCcG036_gNCT4DcYr-OjQNfcqIntiFWGwGqs0rHeJej0O0Og2nEe98i0pGfv1bg5G6nTUBa44NHJe5iMk_UKIZkgFiVuX96k5C00LJzUA3UdvO1f8FV8suazO9rLpW5C?purpose=fullsize" class="card-img-top" alt="..."height="200" />
                        <div class="card-body">
                          <h5 class="card-title">Title :The Girl with the Dragon Tattoo</h5>
                          <p class="card-text">he Girl with the Dragon Tattoo is a bestselling Swedish crime thriller novel by Stieg Larsson, originally published posthumously in 2005</p>
                          <p class="card-text"><strong>Author : Stieg Larsson</strong></p>
                          <p class="card-text"><strong>Price : 350</strong></p>
                          <a href="#" class="btn btn-primary">Add to cart</a>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card">
                        <img src="https://images.openai.com/static-rsc-4/SATT2HP3EuTJEAWl82AcuPVKjoqgGlkX7pnkQ_nOtU894oV8HaNaJXIOwbkWphHcWY3SK8Aj37aOHg-qjz9I_Fx87DKQkG_8WC1jFhSXbymzpT3LwmTOklHkoDA5I_GAIcmTzFUll2I8N4guK0q7eYGEyFEL8Kxg1J-rS-ADe5v3YrvpVszW3Sr-1k56r3Pl?purpose=fullsize" class="card-img-top" alt="..." height="200" />
                        <div class="card-body">
                          <h5 class="card-title">Title :The Monk Who Sold His Ferrari</h5>
                          <p class="card-text"> First published in the late 1990s, it combines fiction and life lessons through a parable about success, fulfillment, and inner growth.</p>
                          <p class="card-text"><strong>Author : Robin Sharm </strong></p>
                          <p class="card-text"><strong>Price : 250</strong></p>
                          <a href="#" class="btn btn-primary">Add to cart</a>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card">
                        <img src="https://images.openai.com/static-rsc-4/XpP1cE4cSHZegQKs8KN_nk7SC-WNGwUVd7JLZBcnzpYa1W82MqIdDbzaNeFW7tqgvrorNgyQMKvd5E2fX_FWKjJhCl_WpFE4L3yaPzmhbCx8qDu6JmQ8Z3uIRoFFaVw870VQbtdCxdeyvg-HjazTm1dVBfTIDIuMRnH_lFuuQT7cdUX_r1i0RdkAazlpYwgl?purpose=fullsize" class="card-img-top" alt="..." height="200"/>
                        <div class="card-body">
                          <h5 class="card-title">Title : Siddhartha</h5>
                          <p class="card-text">Siddhartha is a 1922 philosophical novel by Hermann Hesse that follows a young man's spiritual journey in ancient India during the era of the Buddha.</p>
                          <p class="card-text"><strong>Author : Hermann Hesse</strong></p>
                          <p class="card-text"><strong>Price : 250</strong></p>
                          <a href="#" class="btn btn-primary">Add to cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                      <div class="card">
                        <img src="https://images.openai.com/static-rsc-4/WB7MqLSfT8uYfCBYXNON8MZkPSv3yjeeb-2bfxPogf9Kuxv2RToIJ4ofRa1QWy0DJyUz-2nPWidVnlvN3gl9rYbNxwJSLG9PGlaLRXlNsk75t9nXcjs-QJ_CwF6jrZCsuoPje3HmsAXJylLWCwaXIUIy8soeoXfwfcEHVNDdHw0ROpEkwdHg9f5fTp_RAuDV?purpose=fullsize" class="card-img-top" alt="..." height="200" />
                        <div class="card-body">
                          <h5 class="card-title">Title :Jonathan Livingston Seagull</h5>
                          <p class="card-text">onathan Livingston Seagull is a 1970 allegorical novella by Richard Bach that uses the story of a seagull obsessed with mastering flight to explore freedom, self-discovery,</p>
                          <p class="card-text"><strong>Author : Richard Bach</strong></p>
                          <p class="card-text"><strong>Price : 250</strong></p>
                          <a href="#" class="btn btn-primary">Add to cart</a>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card">
                        <img src="https://images.openai.com/static-rsc-4/5my--Bnx7xIXMykwcQlzzYzG95ZMuOkKHm166P-i3K08aZmY3tkCCQMdi3arque0QQu5tXdv0MQ5Z0y-C5rsp9-5L9tD-FWGVKUAI63luIVYPHrOwLkpb0mzIAmqnPt6hXDqpj7jf5ekyyJseBWVxwBkjmmJn8kZfmqQCrLlEF4fJ1ZgP_QeTma_Ss9TMIu5?purpose=fullsize" class="card-img-top" alt="..." height="200" />
                        <div class="card-body">
                          <h5 class="card-title">Title :The Celestine Prophecy</h5>
                          <p class="card-text">Blending fiction with New Age spirituality, it follows an unnamed narrator's journey through Peru in search of nine spiritual insights said to transform humanity's understanding of consciousness and purpose</p>
                          <p class="card-text"><strong>Author : James Redfield</strong></p>
                          <p class="card-text"><strong>Price : 250</strong></p>
                          <a href="#" class="btn btn-primary">Add to cart</a>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card">
                        <img src="https://images.openai.com/static-rsc-4/VVze4S_b40wuEzeUm03orLQuJBMs4_RC4fGt54uYnjNWaS6uf03cO0d24pw9WeldxQE4H2R4JYO-pwzHX_iqlHSTHbMHdTRPjHslCFfE9MR5AAojHYhUhvG4H9sfR0IWE1FcMp1e2wgWIy2sW63X3eijtdlruPIIsWFUKqlICSsakDnscOrVh1P_hdkBf_Ay?purpose=fullsize" class="card-img-top" alt="..." height="200" />
                        <div class="card-body">
                          <h5 class="card-title">Title :Tuesdays with Morrie</h5>
                          <p class="card-text">Tuesdays with Morrie: An Old Man, a Young Man, and Life's Greatest Lesson is a 1997 memoir by Mitch Albom that recounts his final conversations with his former sociology professor,</p>
                          <p class="card-text"><strong>Author : Mitch Albom</strong></p>
                          <p class="card-text"><strong>Price : 250</strong></p>
                          <a href="#" class="btn btn-primary">Add to cart</a>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card">
                        <img src="https://images.openai.com/static-rsc-4/99N1-YB9X9hEfiCs9hWawmdRC4EYkK1KgP0BWNslUUPUcISpRHP-0tv1_NRhGfIEUKcR_qZ6dYyUxHBgWRAHBehvoV577RFMQmMwUBcbDMewTRx1r6atuPc_AfPFYYy-vy_a9C2ARC-8ql678wRkgD6MNWXQEOyzeRZ3Baa82D9vAvAAsqQ8H6kt0HdbNnkA?purpose=fullsize" class="card-img-top" alt="..." height="200" />
                        <div class="card-body">
                          <h5 class="card-title">Title :The Leader Who Had No Title</h5>
                          <p class="card-text">The Leader Who Had No Title is a self-help and leadership book by Robin Sharma that argues leadership is a mindset and daily practice rather than a formal position.</p>
                          <p class="card-text"><strong>Author : Robin Sharma </strong></p>
                          <p class="card-text"><strong>Price : 350</strong></p>
                          <a href="#" class="btn btn-primary">Add to cart</a>
                        </div>
                      </div>
                    </div>
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