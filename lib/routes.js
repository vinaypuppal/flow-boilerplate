// ******************* GLOBAL SETTINGS *****************************

// SUBSCRIPTIONS

FlowRouter.subscriptions = function() {
  // this.register('mySub', Meteor.subscribe('mySubName'));
};

// TRIGGERS

FlowRouter.triggers.enter([
  // myEnterFunc
] /* , {
  only: ['myRoute'],
  except: ['myOtherRoute']
} */);

FlowRouter.triggers.exit([
  // myExitFunc
] /* , {
  only: ['myRoute'],
  except: ['myOtherRoute']
} */);

// ************************* ROUTES ********************************
FlowRouter.route('/', {
  name: 'home',
  triggersEnter: [],
  subscriptions: function(params, queryParams) {

  },
  action: function(params, queryParams) {
  	BlazeLayout.render('MainLayout',{main:"Hero"});
  },
  triggersExit: []
});

FlowRouter.route('/who-we-are', {
  name: 'who-we-are',
  triggersEnter: [],
  subscriptions: function(params, queryParams) {

  },
  action: function(params, queryParams) {
    BlazeLayout.render('MainLayout',{main:"WhoWeAre"});
  },
  triggersExit: []
});

FlowRouter.route('/why-this-app', {
  name: 'why-this-app',
  triggersEnter: [],
  subscriptions: function(params, queryParams) {
    BlazeLayout.render('MainLayout',{main:"WhyThisApp"});
  },
  action: function(params, queryParams) {

  },
  triggersExit: []
});

FlowRouter.route('/features', {
  name: 'features',
  triggersEnter: [],
  subscriptions: function(params, queryParams) {

  },
  action: function(params, queryParams) {
    BlazeLayout.render('MainLayout',{main:"Features"});
  },
  triggersExit: []
});

FlowRouter.route('/team', {
  name: 'team',
  triggersEnter: [],
  subscriptions: function(params, queryParams) {

  },
  action: function(params, queryParams) {
    BlazeLayout.render('MainLayout',{main:"Team"});
  },
  triggersExit: []
});

FlowRouter.route('/news-letter', {
  name: 'news-letter',
  triggersEnter: [],
  subscriptions: function(params, queryParams) {

  },
  action: function(params, queryParams) {
    BlazeLayout.render('MainLayout',{main:"NewsLetter"});
  },
  triggersExit: []
});

FlowRouter.route('/contact-us', {
  name: 'contact-us',
  triggersEnter: [],
  subscriptions: function(params, queryParams) {

  },
  action: function(params, queryParams) {
    BlazeLayout.render('MainLayout',{main:"ConatctUs"});
  },
  triggersExit: []
});

FlowRouter.route('/blog', {
  name: 'blog',
  triggersEnter: [],
  subscriptions: function(params, queryParams) {

  },
  action: function(params, queryParams) {
    BlazeLayout.render('MainLayout',{main:"Blog"});
  },
  triggersExit: []
});

