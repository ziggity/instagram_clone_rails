// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

body {
	background: #E9E9E9;
}

h1, h2, h3, h4, h5, h6 {
	font-weight: 100;
	color: #529ECC;
	font-weight: bold;
	text-align: center;
}



nav {
	box-shadow: 0 1px 2px 0 rgba(82,158,204, 0.22);
	box-color: #529ECC;
	background: #529ECC;

	.navbar-brand {
		a {
			color: #529ECC;
			font-weight: bold;
			font-size: 1.6em;
			&:hover {
				text-decoration: none;
			}
		}
	}
}

#pics {
  margin: 0 auto;
  width: 100%;
  .box {
	  margin: 7px;
	  width: 350px;
	  box-shadow: 0 1px 2px 0 rgba(82,158,204, 0.48);
	  border-radius: 2px;
	  text-align: center;
	  img {
	  	max-width: 100%;
	  	height: auto;
	  }
	  h2 {
	  	font-size: 10px;
	  	margin: 0;
	  	font-weight: bold;
	  	padding: 25px 10px;

	  	a {
				color: #529ECC;

	  	}
	  }
	}
}

#edit_page {
	.current_image {
		img {
			display: block;
			margin: 20px 0;
		}
	}
}

#pic_show {
	.panel-heading {
		padding: 0;
	}
	.pic_image {
		img {
			max-width: 100%;
			width: 100%;
			display: block;
			margin: 0 auto;
		}
	}
	.panel-body {
		padding: 35px;
		h1 {
			margin: 0 0 10px 0;
			color: #529ECC;
			font-weight: bold;
		}
		.description {
			color: #253567;
			font-weight: bold;
			line-height: 1.75;
			margin: 0;
			text-align: center;
		}
	}
	.panel-footer {
		padding: 20px 25px;
		p {
			margin: 0;
		}
		.user {
			padding-top: 2px;
			font-weight: bold;
			text-align: center;

		}
	}
}

textarea {
	min-height: 250px;
}