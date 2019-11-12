/*
YUI 3.17.2 (build 9c3c78e)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add('plugin', function (Y, NAME) {

    /**
     * Provides the base Plugin class, which plugin developers should extend, when creating custom plugins
     *
     * @module plugin
     */

    /**
     * The base class for all Plugin instances.
     *
     * @class Plugin.Base
     * @extends Base
     * @param {Object} config Configuration object with property name/value pairs.
     */
    function Plugin(config) {
        if (! (this.hasImpl && this.hasImpl(Y.Plugin.Base)) ) {
            Plugin.superclass.constructor.apply(this, arguments);
        } else {
            Plugin.prototype.initializer.apply(this, arguments);
        }
    }

    /**
     * Object defining the set of attributes supported by the Plugin.Base class
     *
     * @property ATTRS
     * @type Object
     * @static
     */
    Plugin.ATTRS = {

        /**
         * The plugin's host object.
         *
         * @attribute host
         * @writeonce
         * @type Plugin.Host
         */
        host : {
            writeOnce: true
        }
    };

    /**
     * The string identifying the Plugin.Base class. Plugins extending
     * Plugin.Base should set their own NAME value.
     *
     * @property NAME
     * @type String
     * @static
     */
    Plugin.NAME = 'plugin';

    /**
     * The name of the property the the plugin will be attached to
     * when plugged into a Plugin Host. Plugins extending Plugin.Base,
     * should set their own NS value.
     *
     * @property NS
     * @type String
     * @static
     */
    Plugin.NS = 'plugin';

    Y.extend(Plugin, Y.Base, {

        /**
         * The list of event handles for event listeners or AOP injected methods
         * applied by the plugin to the host object.
         *
         * @property _handles
         * @private
         * @type Array
         * @value null
         */
        _handles: null,

        /**
         * Initializer lifecycle implementation.
         *
         * @method initializer
         * @param {Object} config Configuration object with property name/value pairs.
         */
        initializer : function(config) {
            this._handles = [];
        },

        /**
         * Destructor lifecycle implementation.
         *
         * Removes any event listeners or injected methods applied by the Plugin
         *
         * @method destructor
         */
        destructor: function() {
            // remove all handles
            if (this._handles) {
                for (var i = 0, l = this._handles.length; i < l; i++) {
                   this._handles[i].detach();
                }
            }
        },

        /**
         * Listens for the "on" moment of events fired by the host,
         * or injects code "before" a given method on the host.
         *
         * @method doBefore
         *
         * @param strMethod {String} The event to listen for, or method to inject logic before.
         * @param fn {Function} The handler function. For events, the "on" moment listener. For methods, the function to execute before the given method is executed.
         * @param context {Object} An optional context to call the handler with. The default context is the plugin instance.
         * @return handle {EventHandle} The detach handle for the handler.
         */
        doBefore: function(strMethod, fn, context) {
            var host = this.get("host"), handle;

            if (strMethod in host) { // method
                handle = this.beforeHostMethod(strMethod, fn, context);
            } else if (host.on) { // event
                handle = this.onHostEvent(strMethod, fn, context);
            }

            return handle;
        },

        /**
         * Listens for the "after" moment of events fired by the host,
         * or injects code "after" a given method on the host.
         *
         * @method doAfter
         *
         * @param strMethod {String} The event to listen for, or method to inject logic after.
         * @param fn {Function} The handler function. For events, the "after" moment listener. For methods, the function to execute after the given method is executed.
         * @param context {Object} An optional context to call the handler with. The default context is the plugin instance.
         * @return handle {EventHandle} The detach handle for the listener.
         */
        doAfter: function(strMethod, fn, context) {
            var host = this.get("host"), handle;

            if (strMethod in host) { // method
                handle = this.afterHostMethod(strMethod, fn, context);
            } else if (host.after) { // event
                handle = this.afterHostEvent(strMethod, fn, context);
            }

            return handle;
        },

        /**
         * Listens for the "on" moment of events fired by the host object.
         *
         * Listeners attached through this method will be detached when the plugin is unplugged.
         *
         * @method onHostEvent
         * @param {String | Object} type The event type.
         * @param {Function} fn The listener.
         * @param {Object} context The execution context. Defaults to the plugin instance.
         * @return handle {EventHandle} The detach handle for the listener.
         */
        onHostEvent : function(type, fn, context) {
            var handle = this.get("host").on(type, fn, context || this);
            this._handles.push(handle);
            return handle;
        },

        /**
         * Listens for the "on" moment of events fired by the host object one time only.
         * The listener is immediately detached when it is executed.
         *
         * Listeners attached through this method will be detached when the plugin is unplugged.
         *
         * @method onceHostEvent
         * @param {String | Object} type The event type.
         * @param {Function} fn The listener.
         * @param {Object} context The execution context. Defaults to the plugin instance.
         * @return handle {EventHandle} The detach handle for the listener.
         */
        onceHostEvent : function(type, fn, context) {
            var handle = this.get("host").once(type, fn, context || this);
            this._handles.push(handle);
            return handle;
        },

        /**
         * Listens for the "after" moment of events fired by the host object.
         *
         * Listeners attached through this method will be detached when the plugin is unplugged.
         *
         * @method afterHostEvent
         * @param {String | Object} type The event type.
         * @param {Function} fn The listener.
         * @param {Object} context The execution context. Defaults to the plugin instance.
         * @return handle {EventHandle} The detach handle for the listener.
         */
        afterHostEvent : function(type, fn, context) {
            var handle = this.get("host").after(type, fn, context || this);
            this._handles.push(handle);
            return handle;
        },

        /**
         * Listens for the "after" moment of events fired by the host object one time only.
         * The listener is immediately detached when it is executed.
         *
         * Listeners attached through this method will be detached when the plugin is unplugged.
         *
         * @method onceAfterHostEvent
         * @param {String | Object} type The event type.
         * @param {Function} fn The listener.
         * @param {Object} context The execution context. Defaults to the plugin instance.
         * @return handle {EventHandle} The detach handle for the listener.
         */
        onceAfterHostEvent : function(type, fn, context) {
            var handle = this.get("host").onceAfter(type, fn, context || this);
            this._handles.push(handle);
            return handle;
        },

        /**
         * Injects a function to be executed before a given method on host object.
         *
         * The function will be detached when the plugin is unplugged.
         *
         * @method beforeHostMethod
         * @param {String} method The name of the method to inject the function before.
         * @param {Function} fn The function to inject.
         * @param {Object} context The execution context. Defaults to the plugin instance.
         * @return handle {EventHandle} The detach handle for the injected function.
         */
        beforeHostMethod : function(strMethod, fn, context) {
            var handle = Y.Do.before(fn, this.get("host"), strMethod, context || this);
            this._handles.push(handle);
            return handle;
        },

        /**
         * Injects a function to be executed after a given method on host object.
         *
         * The function will be detached when the plugin is unplugged.
         *
         * @method afterHostMethod
         * @param {String} method The name of the method to inject the function after.
         * @param {Function} fn The function to inject.
         * @param {Object} context The execution context. Defaults to the plugin instance.
         * @return handle {EventHandle} The detach handle for the injected function.
         */
        afterHostMethod : function(strMethod, fn, context) {
            var handle = Y.Do.after(fn, this.get("host"), strMethod, context || this);
            this._handles.push(handle);
            return handle;
        },

        toString: function() {
            return this.constructor.NAME + '[' + this.constructor.NS + ']';
        }
    });

    Y.namespace("Plugin").Base = Plugin;


}, '3.17.2', {"requires": ["base-base"]});
YUI.add('moodle-core-lockscroll', function (Y, NAME) {

/**
 * Provides the ability to lock the scroll for a page, allowing nested
 * locking.
 *
 * @module moodle-core-lockscroll
 */

/**
 * Provides the ability to lock the scroll for a page.
 *
 * This is achieved by applying the class 'lockscroll' to the body Node.
 *
 * Nested widgets are also supported and the scroll lock is only removed
 * when the final plugin instance is disabled.
 *
 * @class M.core.LockScroll
 * @extends Plugin.Base
 */
Y.namespace('M.core').LockScroll = Y.Base.create('lockScroll', Y.Plugin.Base, [], {

    /**
     * Whether the LockScroll has been activated.
     *
     * @property _enabled
     * @type Boolean
     * @protected
     */
    _enabled: false,

    /**
     * Handle destruction of the lockScroll instance, including disabling
     * of the current instance.
     *
     * @method destructor
     */
    destructor: function() {
        this.disableScrollLock();
    },

    /**
     * Start locking the page scroll.
     *
     * This is achieved by applying the lockscroll class to the body Node.
     *
     * A count of the total number of active, and enabled, lockscroll instances is also kept on
     * the body to ensure that premature disabling does not occur.
     *
     * @method enableScrollLock
     * @param {Boolean} forceOnSmallWindow Whether to enable the scroll lock, even for small window sizes.
     * @chainable
     */
    enableScrollLock: function(forceOnSmallWindow) {
        if (this.isActive()) {
            Y.log('LockScroll already active. Ignoring enable request', 'warn', 'moodle-core-lockscroll');
            return;
        }

        if (!this.shouldLockScroll(forceOnSmallWindow)) {
            Y.log('Dialogue height greater than window height. Ignoring enable request.', 'warn', 'moodle-core-lockscroll');
            return;
        }

        Y.log('Enabling LockScroll.', 'debug', 'moodle-core-lockscroll');
        this._enabled = true;
        var body = Y.one(Y.config.doc.body);

        // Get width of body before turning on lockscroll.
        var widthBefore = body.getComputedStyle('width');

        // We use a CSS class on the body to handle the actual locking.
        body.addClass('lockscroll');

        // Increase the count of active instances - this is used to ensure that we do not
        // remove the locking when parent windows are still open.
        // Note: We cannot use getData here because data attributes are sandboxed to the instance that created them.
        var currentCount = parseInt(body.getAttribute('data-activeScrollLocks'), 10) || 0,
            newCount = currentCount + 1;
        body.setAttribute('data-activeScrollLocks', newCount);
        Y.log("Setting the activeScrollLocks count from " + currentCount + " to " + newCount,
                'debug', 'moodle-core-lockscroll');

        // When initially enabled, set the body max-width to its current width. This
        // avoids centered elements jumping because the width changes when scrollbars
        // disappear.
        if (currentCount === 0) {
            body.setStyle('maxWidth', widthBefore);
        }

        return this;
    },

    /**
     * Recalculate whether lock scrolling should be on or off.
     *
     * @method shouldLockScroll
     * @param {Boolean} forceOnSmallWindow Whether to enable the scroll lock, even for small window sizes.
     * @return boolean
     */
    shouldLockScroll: function(forceOnSmallWindow) {
        var dialogueHeight = this.get('host').get('boundingBox').get('region').height,
            // Most modern browsers use win.innerHeight, but some older versions of IE use documentElement.clientHeight.
            // We fall back to 0 if neither can be found which has the effect of disabling scroll locking.
            windowHeight = Y.config.win.innerHeight || Y.config.doc.documentElement.clientHeight || 0;

        if (!forceOnSmallWindow && dialogueHeight > (windowHeight - 10)) {
            return false;
        } else {
            return true;
        }
    },

    /**
     * Recalculate whether lock scrolling should be on or off because the size of the dialogue changed.
     *
     * @method updateScrollLock
     * @param {Boolean} forceOnSmallWindow Whether to enable the scroll lock, even for small window sizes.
     * @chainable
     */
    updateScrollLock: function(forceOnSmallWindow) {
        // Both these functions already check if scroll lock is active and do the right thing.
        if (this.shouldLockScroll(forceOnSmallWindow)) {
            this.enableScrollLock(forceOnSmallWindow);
        } else {
            this.disableScrollLock(true);
        }

        return this;
    },

    /**
     * Stop locking the page scroll.
     *
     * The instance may be disabled but the scroll lock not removed if other instances of the
     * plugin are also active.
     *
     * @method disableScrollLock
     * @chainable
     */
    disableScrollLock: function(force) {
        if (this.isActive()) {
            Y.log('Disabling LockScroll.', 'debug', 'moodle-core-lockscroll');
            this._enabled = false;

            var body = Y.one(Y.config.doc.body);

            // Decrease the count of active instances.
            // Note: We cannot use getData here because data attributes are sandboxed to the instance that created them.
            var currentCount = parseInt(body.getAttribute('data-activeScrollLocks'), 10) || 1,
                newCount = currentCount - 1;

            if (force || currentCount === 1) {
                body.removeClass('lockscroll');
                body.setStyle('maxWidth', null);
            }

            body.setAttribute('data-activeScrollLocks', currentCount - 1);
            Y.log("Setting the activeScrollLocks count from " + currentCount + " to " + newCount,
                    'debug', 'moodle-core-lockscroll');
        }

        return this;
    },

    /**
     * Return whether scroll locking is active.
     *
     * @method isActive
     * @return Boolean
     */
    isActive: function() {
        return this._enabled;
    }

}, {
    NS: 'lockScroll',
    ATTRS: {
    }
});


}, '@VERSION@', {"requires": ["plugin", "base-build"]});
