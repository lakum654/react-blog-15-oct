import React from 'react'

const SingleBlog = () => {
    return (
        <>
            <div className='container main-container w-75 my-4'>
                <div className="row">
                    <div className="col-lg-8 col-xl-8 col-md-8 col-sm-12">
                        <div class="card rounded-0">
                            <img class="card-img-top rounded-0" src="https://technext.github.io/megakit-2/images/blog/2.jpg" alt="Title" />
                            <div class="card-body">
                                <h6 class="sub-title">
                                    <span className='sub-title-text'>Category</span>
                                    <span className='sub-title-text'>5 Comments</span>
                                    <span className='sub-title-text' >28th January</span>
                                </h6>

                                <h4>
                                    Improve design with typography?
                                </h4>
                                <p class="card-text py-4">
                                    Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!
                                </p>

                                <p class="card-text py-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus natus, consectetur? Illum libero vel nihil nisi quae, voluptatem, sapiente necessitatibus distinctio voluptates, iusto qui. Laboriosam autem, nam voluptate in beatae.
                                </p>

                                <strong className='tag-text'>Tags :</strong><br />
                                <div className='tags'>
                                    <span class="tag-text">News</span>
                                    <span class="tag-text">Strogy</span>
                                    <span class="tag-text">Aggrey</span>
                                    <span class="tag-text">Blogs</span>
                                    <span class="tag-text">Information</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12">
                        <h3>Hello</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog