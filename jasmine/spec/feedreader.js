/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* A test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it("has feed has url defined and not empty", function() {
      for(var feed of allFeeds) {
        expect(feed.url).toBeDefined();
        expect(feed.url).toBeTruthy();
      }
    });

    /* A test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it("each feed has name defined and not empty", function() {
      for(var feed of allFeeds) {
        expect(feed.name).toBeDefined();
        expect(feed.name).toBeTruthy();
      }
    });

  });


  describe('The menu', function() {

    /* A test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */

    it("meun element is hidden by default", function() {
      expect(document.querySelector("body").classList.contains("menu-hidden")).toBe(true);
    });

    /* A test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */

    it("menu changes visibility when cliked", function() {
      document.querySelector(".icon-list").click();
      expect(document.querySelector("body").classList.contains("menu-hidden")).toBeFalsy();
      document.querySelector(".icon-list").click();
      expect(document.querySelector("body").classList.contains("menu-hidden")).toBe(true);
    });


  });

  describe('Initial Entries', function() {

    /* A test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
    beforeEach(function(done){
      loadFeed(0,done);
    });
    it("test loadFeed", function(done) {
      expect($('.feed .entry').length >0 ).toBeTruthy();
      done();
    });

  });

  describe('New Feed Selection', function() {
    /* TODO: Write a new test suite named "New Feed Selection" */

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */


    var current;
    beforeEach(function(done){
      loadFeed(0,function() {
        current = $('.feed');
        loadFeed(1,done);
      });
    });

    it("new feed is loaded", function(done) {
      expect($('.feed')).not.toBe(current);
      done();
    });

  });

}());
