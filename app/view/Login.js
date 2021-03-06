Ext.define('smiley360.view.Login', {
    extend: 'Ext.form.Panel',
    requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.Img', 'Ext.field.Text'],
    alias: 'widget.loginview',
    cls: 'page-bg',

    config: {
        title: 'Login',
        padding: '15px',
        scrollable: 'none',
        items: [{
            xtype: 'image',
            src: 'resources/images/logo.png',
            cls: 'logo'
        },
		{
		    xtype: 'spacer',
		    height: '14px'
		},
		{
		    xtype: 'panel',
		    cls: 'login-box',
		    height: '254px',
		    items: [
				{
				    xtype: 'textfield',
				    placeHolder: 'Username',
				    itemId: 'txtUserName',
				    name: 'txtUserName',
				    cls: 'cust-input cust-input-user',
				    clearIcon: false,
				    required: true
				},
				{
				    xtype: 'passwordfield',
				    maxHeight: '20px',
				    placeHolder: '******',
				    itemId: 'txtPassword',
				    name: 'txtPassword',
				    cls: 'cust-input cust-input-pwd',
				    clearIcon: false,
				    required: true
				},
				{
				    xtype: 'spacer',
				    height: '12px'
				},
				{
				    xtype: 'button',
				    itemId: 'xLogin',
				    cls: 'cust-btn login-btn',
				    text: 'LOG IN'
				},
				{
				    xtype: 'label',
				    id: 'xForgetPassword',
				    html: 'Lost your password?',
				    cls: 'left cust-label'
				},
				{
				    xtype: 'label',
				    id: 'xSignup',
				    html: 'Need to set up a New Account?',
				    cls: 'right cust-label'
				},
				{
				    xtype: 'spacer',
				    cls: 'clear',
				    height: '27px'
				},
                {
                    xtype: 'panel',
                    layout: 'hbox',
                    items: [
                            {
                                xtype: 'button',
                                style: 'background-color: #37b7da !important;',
                                text: 'T',
                                width: '50px',
                                ui: 'action',
                                itemId: 'xShareToTwitter',
                                tap: 'onShareToTwitterTap'
                            },
                            {
                                xtype: 'button',
                                text: 'F',
                                width: '50px',
                                ui: 'action',
                                itemId: 'xShareToFacebook',
                                tap: 'onShareToFacebookTap'
                            },
                            {
                                xtype: 'button',
                                style: 'background-color: #3f4b4e !important;',
                                itemId: 'xEditProfile',
                                text: 'E',
                                width: '50px',
                                ui: 'action',
                                tap: 'onEditProfileTap'
                            },
                            {
                                xtype: 'button',
                                style: 'background-color: #3f4b4e !important;',
                                itemId: 'xSurvey',
                                text: 'S',
                                width: '50px',
                                ui: 'action',
                                tap: 'onSurveyTap'
                            },
                            {
                                xtype: 'button',
                                style: 'background-color: #3f4b4e !important;',
                                itemId: 'xMission',
                                text: 'M',
                                width: '50px',
                                ui: 'action',
                                tap: 'onMission'
                            },
                            {
                                xtype: 'button',
                                style: 'background-color: #3f4b4e !important;',
                                itemId: 'xMissionList',
                                text: 'M_L',
                                width: '50px',
                                ui: 'action',
                                tap: 'onMission_List'
                            },
                    ],
                },
		    ]
		}],
        listeners: [
            {
                delegate: "#xMission",
                fn: "onMissionTap",
                event: "tap",
            },
            {
                delegate: "#xMissionList",
                fn: "onMissionListTap",
                event: "tap",
            },
            {
                delegate: "#xLogin",
                fn: "onLoginTap",
                event: "tap",
            },
            {
                delegate: 'div#xSignup',
                fn: 'onSignupTap',
                element: 'element',
                event: 'tap',
            },
	  		{
	  		    delegate: 'div#xForgetPassword',
	  		    fn: 'onForgetPasswordTap',
	  		    event: 'tap',
	  		    element: 'element',
	  		},
            {
                delegate: '#xShareToTwitter',
                fn: 'onShareToTwitterTap',
                event: 'tap',
            },
            {
                delegate: '#xShareToFacebook',
                fn: 'onShareToFacebookTap',
                event: 'tap',
            },
            {
                delegate: "#xEditProfile",
                fn: "onEditProfileTap",
                event: "tap",
            },
            {
                delegate: "#xSurvey",
                fn: "onSurveyTap",
                event: "tap",
            },
        ]
    },

    onMissionListTap: function () {
        //================================
        console.log("onLoginTap");
        //================================
        this.fireEvent('onMissionListTapCommand', this);
    },

    onMissionTap: function () {
        //================================
        console.log("onLoginTap");
        //================================
        this.fireEvent('onMissionTapCommand', this);
    },

    onLoginTap: function () {
        //================================
        console.log("onLoginTap");
        //================================
        this.fireEvent('ShowLoginViewCommand', this);
    },

    onSignupTap: function () {
        //================================
        console.log("onSignupTap");
        //================================
        this.fireEvent('ShowSignupViewCommand', this);
    },

    onForgetPasswordTap: function () {
        //================================
        console.log("onForgetPasswordTap");
        //================================
        var forgetPasswordView = Ext.widget('forgetpasswordview');

        forgetPasswordView.reset();
        forgetPasswordView.show();
    },

    onShareToTwitterTap: function () {
        //================================
        console.log("onShareToTwitterTap");
        //================================
        var shareToTwitterView = Ext.widget('sharetotwitterview');

        shareToTwitterView.reset();
        shareToTwitterView.show();
    },

    onShareToFacebookTap: function () {
        //================================
        console.log("onShareToFacebookTap");
        //================================
        var shareToFacebookView = Ext.widget('sharetofacebookview');

        shareToFacebookView.reset();
        shareToFacebookView.show();
    },

    onEditProfileTap: function () {
        //================================
        console.log("onEditProfileTap");
        //================================
        this.fireEvent('ShowEditProfileViewCommand', this);
    },

    onSurveyTap: function () {
        //================================
        console.log("onSurveyTap");
        //================================
        this.fireEvent('ShowSurveyViewCommand', this);
    },
});