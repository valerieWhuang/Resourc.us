import React from "react";

function TestPage () {
  return (
    <div>
      <h1>This is the test page.</h1>

      <div className="wrapper">
		
    <nav id="sidebar" className="sidebar">
			<div className="sidebar-content js-simplebar">
				<a className="sidebar-brand" href="index.html">
    
          <span className="align-middle mr-3">AppStack</span>
        </a>

				<ul className="sidebar-nav">
					<li className="sidebar-header">
						Pages
					</li>
					<li className="sidebar-item">
						<a href="#dashboards" data-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Dashboards</span>
              <span className="badge badge-sidebar-primary">5</span>
            </a>
						<ul id="dashboards" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
							<li className="sidebar-item"><a className="sidebar-link" href="dashboard-default.html">Default</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="dashboard-analytics.html">Analytics</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="dashboard-saas.html">SaaS</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="dashboard-social.html">Social</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="dashboard-crypto.html">Crypto</a></li>
						</ul>
					</li>
					<li className="sidebar-item active">
						<a href="#pages" data-toggle="collapse" className="sidebar-link">
              <i className="align-middle" data-feather="layout"></i> <span className="align-middle">Pages</span>
            </a>
						<ul id="pages" className="sidebar-dropdown list-unstyled collapse show" data-parent="#sidebar">
							<li className="sidebar-item"><a className="sidebar-link" href="pages-profile.html">Profile</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="pages-settings.html">Settings</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="pages-clients.html">Clients</a></li>
							<li className="sidebar-item">
								<a href="#projects" data-toggle="collapse" className="sidebar-link">
                  Projects
                </a>
								<ul id="projects" className="sidebar-dropdown list-unstyled collapse">
									<li className="sidebar-item active">
										<a className="sidebar-link" href="pages-projects-list.html">List</a>
									</li>
									<li className="sidebar-item">
										<a className="sidebar-link" href="pages-projects-detail.html">Detail <span className="badge badge-sidebar-primary">New</span></a>
									</li>
								</ul>
							</li>
							<li className="sidebar-item"><a className="sidebar-link" href="pages-invoice.html">Invoice</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="pages-pricing.html">Pricing</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="pages-tasks.html">Tasks</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="pages-chat.html">Chat <span className="badge badge-sidebar-primary">New</span></a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="pages-blank.html">Blank Page</a></li>
						</ul>
					</li>
					<li className="sidebar-item">
						<a href="#auth" data-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="users"></i> <span className="align-middle">Auth</span>
              <span className="badge badge-sidebar-secondary">Special</span>
            </a>
						<ul id="auth" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
							<li className="sidebar-item"><a className="sidebar-link" href="pages-sign-in.html">Sign In</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="pages-sign-up.html">Sign Up</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="pages-reset-password.html">Reset Password</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="pages-404.html">404 Page</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="pages-500.html">500 Page</a></li>
						</ul>
					</li>
					<li className="sidebar-item">
						<a href="#documentation" data-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="book-open"></i> <span className="align-middle">Documentation</span>
            </a>
						<ul id="documentation" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
							<li className="sidebar-item"><a className="sidebar-link" href="docs-introduction.html">Introduction</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="docs-installation.html">Getting Started</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="docs-customization.html">Customization</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="docs-plugins.html">Plugins</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="docs-changelog.html">Changelog</a></li>
						</ul>
					</li>

					<li className="sidebar-header">
						Tools & Components
					</li>
					<li className="sidebar-item">
						<a href="#ui" data-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="grid"></i> <span className="align-middle">UI Elements</span>
            </a>
						<ul id="ui" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
							<li className="sidebar-item"><a className="sidebar-link" href="ui-alerts.html">Alerts</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="ui-buttons.html">Buttons</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="ui-cards.html">Cards</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="ui-carousel.html">Carousel</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="ui-embed-video.html">Embed Video</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="ui-general.html">General <span className="badge badge-sidebar-primary">10+</span></a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="ui-grid.html">Grid</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="ui-modals.html">Modals</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="ui-tabs.html">Tabs</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="ui-typography.html">Typography</a></li>
						</ul>
					</li>
					<li className="sidebar-item">
						<a href="#icons" data-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="heart"></i> <span className="align-middle">Icons</span>
              <span className="badge badge-sidebar-primary">1500+</span>
            </a>
						<ul id="icons" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
							<li className="sidebar-item"><a className="sidebar-link" href="icons-feather.html">Feather</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="icons-font-awesome.html">Font Awesome</a></li>
						</ul>
					</li>
					<li className="sidebar-item">
						<a href="#forms" data-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="check-square"></i> <span className="align-middle">Forms</span>
            </a>
						<ul id="forms" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
							<li className="sidebar-item"><a className="sidebar-link" href="forms-layouts.html">Layouts</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="forms-basic-inputs.html">Basic Inputs</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="forms-input-groups.html">Input Groups</a></li>
						</ul>
					</li>
					<li className="sidebar-item">
						<a className="sidebar-link" href="tables-bootstrap.html">
              <i className="align-middle" data-feather="list"></i> <span className="align-middle">Tables</span>
            </a>
					</li>

					<li className="sidebar-header">
						Plugin & Addons
					</li>
					<li className="sidebar-item">
						<a href="#form-plugins" data-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="check-square"></i> <span className="align-middle">Form Plugins</span>
            </a>
						<ul id="form-plugins" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
							<li className="sidebar-item"><a className="sidebar-link" href="forms-advanced-inputs.html">Advanced Inputs</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="forms-editors.html">Editors</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="forms-validation.html">Validation</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="forms-wizard.html">Wizard</a></li>
						</ul>
					</li>
					<li className="sidebar-item">
						<a href="#datatables" data-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="list"></i> <span className="align-middle">DataTables</span>
            </a>
						<ul id="datatables" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
							<li className="sidebar-item"><a className="sidebar-link" href="tables-datatables-responsive.html">Responsive Table</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="tables-datatables-buttons.html">Table with Buttons</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="tables-datatables-column-search.html">Column Search</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="tables-datatables-multi.html">Multi Selection</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="tables-datatables-ajax.html">Ajax Sourced Data</a></li>
						</ul>
					</li>

					<li className="sidebar-item">
						<a href="#charts" data-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="pie-chart"></i> <span className="align-middle">Charts</span>
              <span className="badge badge-sidebar-primary">New</span>
            </a>
						<ul id="charts" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
							<li className="sidebar-item"><a className="sidebar-link" href="charts-chartjs.html">Chart.js</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="charts-apexcharts.html">ApexCharts <span className="badge badge-sidebar-primary">New</span></a></li>
						</ul>
					</li>
					<li className="sidebar-item">
						<a className="sidebar-link" href="notifications.html">
              <i className="align-middle" data-feather="bell"></i> <span className="align-middle">Notifications</span>
            </a>
					</li>
					<li className="sidebar-item">
						<a href="#maps" data-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="map-pin"></i> <span className="align-middle">Maps</span>
            </a>
						<ul id="maps" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
							<li className="sidebar-item"><a className="sidebar-link" href="maps-google.html">Google Maps</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="maps-vector.html">Vector Maps</a></li>
						</ul>
					</li>
					<li className="sidebar-item">
						<a className="sidebar-link" href="calendar.html">
              <i className="align-middle" data-feather="calendar"></i> <span className="align-middle">Calendar</span>
            </a>
					</li>
					<li className="sidebar-item">
						<a href="#multi" data-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="share-2"></i> <span className="align-middle">Multi Level</span>
            </a>
						<ul id="multi" className="sidebar-dropdown list-unstyled collapse" data-parent="#sidebar">
							<li className="sidebar-item">
								<a href="#multi-2" data-toggle="collapse" className="sidebar-link collapsed">
                  Two Levels
                </a>
								<ul id="multi-2" className="sidebar-dropdown list-unstyled collapse">
									<li className="sidebar-item">
										<a className="sidebar-link" href="#">Item 1</a>
										<a className="sidebar-link" href="#">Item 2</a>
									</li>
								</ul>
							</li>
							<li className="sidebar-item">
								<a href="#multi-3" data-toggle="collapse" className="sidebar-link collapsed">
                  Three Levels
                </a>
								<ul id="multi-3" className="sidebar-dropdown list-unstyled collapse">
									<li className="sidebar-item">
										<a href="#multi-3-1" data-toggle="collapse" className="sidebar-link collapsed">
                      Item 1
                    </a>
										<ul id="multi-3-1" className="sidebar-dropdown list-unstyled collapse">
											<li className="sidebar-item">
												<a className="sidebar-link" href="#">Item 1</a>
												<a className="sidebar-link" href="#">Item 2</a>
											</li>
										</ul>
									</li>
									<li className="sidebar-item">
										<a className="sidebar-link" href="#">Item 2</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>

				<div className="sidebar-cta">
					<div className="sidebar-cta-content">
						<strong className="d-inline-block mb-2">Monthly Sales Report</strong>
						<div className="mb-3 text-sm">
							Your monthly sales report is ready for download!
						</div>
						<a href="https://themes.getbootstrap.com/product/appstack-responsive-admin-template/" className="btn btn-primary btn-block" target="_blank">Download</a>
					</div>
				</div>
			</div>
		</nav>

		<div className="main">
			<nav className="navbar navbar-expand navbar-light navbar-bg">
				<a className="sidebar-toggle">
          <i className="hamburger align-self-center"></i>
        </a>

				<form className="d-none d-sm-inline-block">
					<div className="input-group input-group-navbar">
						<input type="text" className="form-control" placeholder="Search projects…" aria-label="Search" />
						<div className="input-group-append">
							<button className="btn" type="button">
                <i className="align-middle" data-feather="search"></i>
              </button>
						</div>
					</div>
				</form>

				<ul className="navbar-nav">
					<li className="nav-item px-2 dropdown">
						<a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Mega menu
            </a>
						<div className="dropdown-menu dropdown-menu-left dropdown-mega" aria-labelledby="servicesDropdown">
							<div className="d-md-flex align-items-start justify-content-start">
								<div className="dropdown-mega-list">
									<div className="dropdown-header">UI Elements</div>
									<a className="dropdown-item" href="#">Alerts</a>
									<a className="dropdown-item" href="#">Buttons</a>
									<a className="dropdown-item" href="#">Cards</a>
									<a className="dropdown-item" href="#">Carousel</a>
									<a className="dropdown-item" href="#">General</a>
									<a className="dropdown-item" href="#">Grid</a>
									<a className="dropdown-item" href="#">Modals</a>
									<a className="dropdown-item" href="#">Tabs</a>
									<a className="dropdown-item" href="#">Typography</a>
								</div>
								<div className="dropdown-mega-list">
									<div className="dropdown-header">Forms</div>
									<a className="dropdown-item" href="#">Layouts</a>
									<a className="dropdown-item" href="#">Basic Inputs</a>
									<a className="dropdown-item" href="#">Input Groups</a>
									<a className="dropdown-item" href="#">Advanced Inputs</a>
									<a className="dropdown-item" href="#">Editors</a>
									<a className="dropdown-item" href="#">Validation</a>
									<a className="dropdown-item" href="#">Wizard</a>
								</div>
								<div className="dropdown-mega-list">
									<div className="dropdown-header">Tables</div>
									<a className="dropdown-item" href="#">Basic Tables</a>
									<a className="dropdown-item" href="#">Responsive Table</a>
									<a className="dropdown-item" href="#">Table with Buttons</a>
									<a className="dropdown-item" href="#">Column Search</a>
									<a className="dropdown-item" href="#">Muulti Selection</a>
									<a className="dropdown-item" href="#">Ajax Sourced Data</a>
								</div>
							</div>
						</div>
					</li>
				</ul>

				<div className="navbar-collapse collapse">
					<ul className="navbar-nav navbar-align">
						<li className="nav-item dropdown">
							<a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-toggle="dropdown">
								<div className="position-relative">
									<i className="align-middle" data-feather="message-circle"></i>
									<span className="indicator">4</span>
								</div>
							</a>
							<div className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0" aria-labelledby="messagesDropdown">
								<div className="dropdown-menu-header">
									<div className="position-relative">
										4 New Messages
									</div>
								</div>
								<div className="list-group">
									<a href="#" className="list-group-item">
										<div className="row no-gutters align-items-center">
											<div className="col-2">
												<img src="img/avatars/avatar-5.jpg" className="avatar img-fluid rounded-circle" alt="Ashley Briggs" />
											</div>
											<div className="col-10 pl-2">
												<div className="text-dark">Ashley Briggs</div>
												<div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
												<div className="text-muted small mt-1">15m ago</div>
											</div>
										</div>
									</a>
									<a href="#" className="list-group-item">
										<div className="row no-gutters align-items-center">
											<div className="col-2">
												<img src="img/avatars/avatar-2.jpg" className="avatar img-fluid rounded-circle" alt="Carl Jenkins" />
											</div>
											<div className="col-10 pl-2">
												<div className="text-dark">Carl Jenkins</div>
												<div className="text-muted small mt-1">Curabitur ligula sapien euismod vitae.</div>
												<div className="text-muted small mt-1">2h ago</div>
											</div>
										</div>
									</a>
									<a href="#" className="list-group-item">
										<div className="row no-gutters align-items-center">
											<div className="col-2">
												<img src="img/avatars/avatar-4.jpg" className="avatar img-fluid rounded-circle" alt="Stacie Hall" />
											</div>
											<div className="col-10 pl-2">
												<div className="text-dark">Stacie Hall</div>
												<div className="text-muted small mt-1">Pellentesque auctor neque nec urna.</div>
												<div className="text-muted small mt-1">4h ago</div>
											</div>
										</div>
									</a>
									<a href="#" className="list-group-item">
										<div className="row no-gutters align-items-center">
											<div className="col-2">
												<img src="img/avatars/avatar-3.jpg" className="avatar img-fluid rounded-circle" alt="Bertha Martin" />
											</div>
											<div className="col-10 pl-2">
												<div className="text-dark">Bertha Martin</div>
												<div className="text-muted small mt-1">Aenean tellus metus, bibendum sed, posuere ac, mattis non.</div>
												<div className="text-muted small mt-1">5h ago</div>
											</div>
										</div>
									</a>
								</div>
								<div className="dropdown-menu-footer">
									<a href="#" className="text-muted">Show all messages</a>
								</div>
							</div>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-toggle="dropdown">
								<div className="position-relative">
									<i className="align-middle" data-feather="bell-off"></i>
								</div>
							</a>
							<div className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0" aria-labelledby="alertsDropdown">
								<div className="dropdown-menu-header">
									4 New Notifications
								</div>
								<div className="list-group">
									<a href="#" className="list-group-item">
										<div className="row no-gutters align-items-center">
											<div className="col-2">
												<i className="text-danger" data-feather="alert-circle"></i>
											</div>
											<div className="col-10">
												<div className="text-dark">Update completed</div>
												<div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
												<div className="text-muted small mt-1">2h ago</div>
											</div>
										</div>
									</a>
									<a href="#" className="list-group-item">
										<div className="row no-gutters align-items-center">
											<div className="col-2">
												<i className="text-warning" data-feather="bell"></i>
											</div>
											<div className="col-10">
												<div className="text-dark">Lorem ipsum</div>
												<div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
												<div className="text-muted small mt-1">6h ago</div>
											</div>
										</div>
									</a>
									<a href="#" className="list-group-item">
										<div className="row no-gutters align-items-center">
											<div className="col-2">
												<i className="text-primary" data-feather="home"></i>
											</div>
											<div className="col-10">
												<div className="text-dark">Login from 192.186.1.1</div>
												<div className="text-muted small mt-1">8h ago</div>
											</div>
										</div>
									</a>
									<a href="#" className="list-group-item">
										<div className="row no-gutters align-items-center">
											<div className="col-2">
												<i className="text-success" data-feather="user-plus"></i>
											</div>
											<div className="col-10">
												<div className="text-dark">New connection</div>
												<div className="text-muted small mt-1">Anna accepted your request.</div>
												<div className="text-muted small mt-1">12h ago</div>
											</div>
										</div>
									</a>
								</div>
								<div className="dropdown-menu-footer">
									<a href="#" className="text-muted">Show all notifications</a>
								</div>
							</div>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-flag dropdown-toggle" href="#" id="languageDropdown" data-toggle="dropdown">
                <img src="img/flags/us.png" alt="English" />
              </a>
							<div className="dropdown-menu dropdown-menu-right" aria-labelledby="languageDropdown">
								<a className="dropdown-item" href="#">
                  <img src="img/flags/us.png" alt="English" width="20" className="align-middle mr-1" />
                  <span className="align-middle">English</span>
                </a>
								<a className="dropdown-item" href="#">
                  <img src="img/flags/es.png" alt="Spanish" width="20" className="align-middle mr-1" />
                  <span className="align-middle">Spanish</span>
                </a>
								<a className="dropdown-item" href="#">
                  <img src="img/flags/de.png" alt="German" width="20" className="align-middle mr-1" />
                  <span className="align-middle">German</span>
                </a>
								<a className="dropdown-item" href="#">
                  <img src="img/flags/nl.png" alt="Dutch" width="20" className="align-middle mr-1" />
                  <span className="align-middle">Dutch</span>
                </a>
							</div>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-toggle="dropdown">
                <i className="align-middle" data-feather="settings"></i>
              </a>

							<a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-toggle="dropdown">
                <img src="img/avatars/avatar.jpg" className="avatar img-fluid rounded-circle mr-1" alt="Chris Wood" /> <span className="text-dark">Chris Wood</span>
              </a>
							<div className="dropdown-menu dropdown-menu-right">
								<a className="dropdown-item" href="pages-profile.html"><i className="align-middle mr-1" data-feather="user"></i> Profile</a>
								<a className="dropdown-item" href="#"><i className="align-middle mr-1" data-feather="pie-chart"></i> Analytics</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href="pages-settings.html">Settings & Privacy</a>
								<a className="dropdown-item" href="#">Help</a>
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

			<footer className="footer">
				<div className="container-fluid">
					<div className="row text-muted">
						<div className="col-6 text-left">
							<ul className="list-inline">
								<li className="list-inline-item">
									<a className="text-muted" href="#">Support</a>
								</li>
								<li className="list-inline-item">
									<a className="text-muted" href="#">Help Center</a>
								</li>
								<li className="list-inline-item">
									<a className="text-muted" href="#">Privacy</a>
								</li>
								<li className="list-inline-item">
									<a className="text-muted" href="#">Terms of Service</a>
								</li>
							</ul>
						</div>
						<div className="col-6 text-right">
							<p className="mb-0">
								&copy; 2020 - <a href="index.html" className="text-muted">AppStack</a>
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	</div>
  )
}

export default TestPage;