// ***************************************************************
// STATIC PAGES
// ***************************************************************

// HOME
// -------------------------------------------------------
FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("layout", {header: "header", main: "/"});
  },
  name: "/"
});

// SERVICES
// -------------------------------------------------------
  FlowRouter.route('/services', {
  action: function() {
    BlazeLayout.render("layout", {header: "header", main: "services"});
  },
  name: "services"
});

// CONTACT
// -------------------------------------------------------
  FlowRouter.route('/contact', {
  action: function() {
    BlazeLayout.render("layout", {header: "header", main: "contact"});
  },
  name: "contact"
});