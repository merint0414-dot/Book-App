import React from 'react'
import NavigationBar from './NavigationBar'

const AddBook = () => {
    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card shadow">
                            <div class="card-header bg-primary text-white text-center">
                                <h3>Book Details </h3>
                            </div>
                            <div className="card-body">
                                <div className="row g-3">

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Book Code/ISBN</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Title</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                        <label htmlFor="" className="form-label">Author</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                        <label htmlFor="" className="form-label">Publisher</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                        <label htmlFor="" className="form-label">Category</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                        <label htmlFor="" className="form-label">Edition</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                        <label htmlFor="" className="form-label">Number of Copies</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                        <label htmlFor="" className="form-label">Price</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                        <label htmlFor="" className="form-label">Publication Year</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                        <label htmlFor="" className="form-label">Shelf Location</label>
                                        <input type="url" className="form-control" />
                                    </div>

                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <button className="btn btn-success">Submit</button>
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

export default AddBook