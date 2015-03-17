import Ember from 'ember';
import FacebookEventsMixin from '../mixins/facebook-events';

export default Ember.Route.extend(FacebookEventsMixin, {

  // ---------------------------------- アクション

  actions: {
    // ログアウトする
    logout: function() {
      this.get("session").invalidate();
    }
  },

  // ---------------------------------- メソッド

  // ログインおよびログアウトのアクションをトリガする
  didFacebookStatusChange: function(response) {
    if (response.status === "connected")
      this.get("session").authenticate("authenticator:facebook", response);
    else
      this.get("session").invalidate();
  }.on("didFacebookStatusChange")
});
