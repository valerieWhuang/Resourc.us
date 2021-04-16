import React from "react";
import { Link } from "react-router-dom";
// import avatar from './assets/img/avatar.jpg';

function TestPage () {
  return (
    <div>
      <h1>This is the test page.</h1>

      <div className="wrapper">
		
    <nav id="sidebar" className="sidebar">
			<div className="sidebar-content js-simplebar">
				<a className="sidebar-brand" href="/">
          <span className="align-middle mr-3"><i class='bx bx-bolt-circle'></i> Resourcus</span>
        </a>

				<ul className="sidebar-nav">
          <li className="sidebar-header">Home</li>
          <li className="sidebar-header">Teams</li>
          <li className="sidebar-header"><Link to='/'><i class='bx bx-home-heart' ></i> Home</Link></li>
          <li className="sidebar-header"><Link to='/teams'><i class='bx bx-group' ></i> Teams</Link></li>

					<li className="sidebar-item">
						<a href="/teams" className="sidebar-link ">
              <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">View All Teams</span>
            </a>
					</li>

					<li className="sidebar-item active">
						<a href="#pages" data-toggle="collapse" className="sidebar-link">
              <i className="align-middle" data-feather="layout"></i> <span className="align-middle">My Teams</span>
            </a>
						<ul id="pages" className="sidebar-dropdown list-unstyled collapse show" data-parent="#sidebar">
							<li className="sidebar-item"><a className="sidebar-link" href="pages-profile.html">Team 1</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="pages-settings.html">Team 2</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="pages-clients.html">Team 3</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</nav>

		<div className="main">
			<nav className="navbar navbar-expand navbar-light navbar-bg">
				<a className="sidebar-toggle">
          {/* <i className="hamburger align-self-center"></i> */}
          <i className='bx bx-menu-alt-left hamburger'></i>
        </a>

				<form className="d-none d-sm-inline-block">
					<div className="input-group input-group-navbar">
						<input type="text" className="form-control" placeholder="Search projects…" aria-label="Search" />
						<div className="input-group-append">
							<button className="btn" type="button">
                <i className='bx bx-search-alt-2'></i>
              </button>
						</div>
					</div>
				</form>

				<div className="navbar-collapse collapse">
					<ul className="navbar-nav navbar-align">
						<li className="nav-item dropdown">
							<a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-toggle="dropdown">
                <i className="align-middle" data-feather="settings"></i>
              </a>

							<a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-toggle="dropdown">
                <i className='bx bx-user-circle' ></i> <span className="text-dark">John Smith</span>
                {/* <img src={avatar} className="avatar img-fluid rounded-circle mr-1" alt="Chris Wood" /> <span className="text-dark">Chris Wood</span> */}
              </a>
							<div className="dropdown-menu dropdown-menu-right">
								<a className="dropdown-item" href="pages-profile.html"> 
                  <i className='bx bx-user' ></i> Profile
                </a>
                <a className="dropdown-item" href="pages-settings.html">
                  <i class='bx bx-cog' ></i> Settings
                </a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href="#">Sign out</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>

			<main className="content">
				<div className="container-fluid p-0">

					<a href="#" className="btn btn-primary float-right mt-n1"><i className="fas fa-plus"></i> New project</a>
					<h1 className="h3 mb-3">Projects</h1>

					<div className="row">
						<div className="col-12 col-md-6 col-lg-3">
							<div className="card">
								<div className="card-header px-4 pt-4">
									<div className="card-actions float-right">
										<div className="dropdown show">
											<a href="#" data-toggle="dropdown" data-display="static">
                      <i className="align-middle" data-feather="more-horizontal"></i>
                    </a>

											<div className="dropdown-menu dropdown-menu-right">
												<a className="dropdown-item" href="#">Action</a>
												<a className="dropdown-item" href="#">Another action</a>
												<a className="dropdown-item" href="#">Something else here</a>
											</div>
										</div>
									</div>
									<h5 className="card-title mb-0">Landing page redesign</h5>
									<div className="badge badge-success my-2">Finished</div>
								</div>
								<div className="card-body px-4 pt-2">
									<p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>

									<img src="img/avatars/avatar-3.jpg" className="rounded-circle mr-1" alt="Avatar" width="28" height="28" />
									<img src="img/avatars/avatar-2.jpg" className="rounded-circle mr-1" alt="Avatar" width="28" height="28" />
									<img src="img/avatars/avatar.jpg" className="rounded-circle mr-1" alt="Avatar" width="28" height="28" />
								</div>
								<ul className="list-group list-group-flush">
									<li className="list-group-item px-4 pb-4">
										<p className="mb-2 font-weight-bold">Progress <span className="float-right">100%</span></p>
										<div className="progress progress-sm">
											<div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
          </div>
        </div>  
        </main>
      </div>  
		</div>
	</div>
  )
}

export default TestPage;