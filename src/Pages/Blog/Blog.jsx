import React from "react";

import { FaRegCommentAlt } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { IoPersonRemoveOutline } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";


export default function BlogPage() {
  const posts = [
    { id: 1, image: "/Images/blog/Image (1).svg" },
    { id: 2, image: "/Images/blog/Image (2).svg" },
    { id: 3, image: "/Images/blog/Image (3).svg" },
    { id: 4, image: "/Images/blog/Image (4).svg" },
    { id: 5, image: "/Images/blog/Image (5).svg" },
    { id: 6, image: "/Images/blog/Image (6).svg" },
    { id: 7, image: "/Images/blog/Image (7).svg" },
    { id: 8, image: "/Images/blog/Image (8).svg" },
    { id: 9, image: "/Images/blog/Image (9).svg" },
    { id: 10, image: "/Images/blog/Image.svg" },
  ];

  return (
    <section className="blog py-5 bg-light">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 mb-4">
            <aside className="sidebar bg-white shadow-sm rounded p-4">
              {/* Search */}
              <form className="mb-4">
                <input
                  type="search"
                  className="form-control rounded-pill"
                  placeholder="Search..."
                />
              </form>

              {/* Our Gallery */}
              <h6 className="fw-bold mb-3">Our Gallery</h6>
              <div className="row g-2 mb-4">
                {posts.slice(0, 6).map(({ id, image }) => (
                  <div key={id} className="col-4">
                    <img
                      src={image}
                      className="img-fluid rounded"
                      alt={`Gallery ${id}`}
                    />
                  </div>
                ))}
              </div>

              {/* Recently Added */}
              <h6 className="fw-bold mb-3">Recently Added</h6>
              {posts.slice(0, 5).map(({ id, image }) => (
                <div key={id} className="d-flex mb-3 align-items-center">
                  <img
                    src={image}
                    width="60"
                    height="60"
                    className="rounded me-2"
                    alt={`Recent ${id}`}
                  />
                  <p className="small mb-0 text-secondary">
                    Curabitur porttitor orci eget neque accumsan venenatis.
                  </p>
                </div>
              ))}
            </aside>
          </div>

          {/* Blog Grid */}
          <div className="col-md-9">
            <div className="row">
              {posts.map((post) => (
                <div key={post.id} className="col-md-6 mb-4">
                  <div
                    className="card border-0 shadow-sm h-100"
                    style={{
                      transition: "all 0.3s ease",
                    }}
                  >
                    <img
                      src={post.image}
                      className="card-img-top rounded-top"
                      alt="blog post"
                    />
                    <div className="card-body">
                      <div className="d-flex justify-content-between small text-muted mb-2">
                        <span>
                          <p>
                            {" "}
                            <GoTag className="me-2" />
                            18 Nov
                          </p>
                        </span>
                        <span>
                          <p>
                            <IoPersonRemoveOutline className="me-2" />
                            By Admin
                          </p>
                        </span>
                        <span>
                          <p>
                            <FaRegCommentAlt className="me-2" />
                            65 Comments
                          </p>
                        </span>
                      </div>
                      <p className="fw-bold text-dark mb-3">
                        Curabitur porttitor orci eget neque <br />
                        accumsan venenatis. Nunc fermentum.
                      </p>
<NavLink
  to="/singleblog"
  className="fw-bold text-decoration-none"
  style={{ color: "#00B207", cursor: "pointer" }}
>
  Read More <IoArrowForwardOutline />
</NavLink>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
